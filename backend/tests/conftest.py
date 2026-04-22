import pytest
from fastapi.testclient import TestClient
from app.main import app

@pytest.fixture
def client():
    """Provides a TestClient for integration tests."""
    with TestClient(app) as c:
        yield c

@pytest.fixture
def sample_data():
    """Provides a consistent dataset for multiple tests."""
    return {
        "total_budget": 100000,
        "weights": {"impact": 2.0, "need": 1.0},
        "projects": {
            "proj_a": {"impact": 8, "need": 5},
            "proj_b": {"impact": 4, "need": 9}
        }
    }