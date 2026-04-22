from fastapi import status

def test_calculate_endpoint_success(client, sample_data):
    """Test the full lifecycle from POST request to JSON response."""
    response = client.post("/api/v1/allocate", json=sample_data)
    
    assert response.status_code == status.HTTP_200_OK
    data = response.json()
    
    # Verify JSON structure
    assert "proj_a" in data
    assert "allocation" in data["proj_a"]
    # Ensure types are serialized to standard floats, not numpy types
    assert isinstance(data["proj_a"]["allocation"], float)

def test_invalid_payload(client):
    """Regression test: Ensure the API rejects bad data shapes gracefully."""
    bad_payload = {"total_budget": "not-a-number", "weights": {}}
    response = client.post("/api/v1/allocate", json=bad_payload)
    
    assert response.status_code == status.HTTP_422_UNPROCESSABLE_CONTENT