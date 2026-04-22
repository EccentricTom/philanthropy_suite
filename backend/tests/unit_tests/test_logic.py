import pytest
import numpy as np
from app.logic import calculate_weighted_allocations

def test_allocation_math_correctness(sample_data):
    """Verify that the math follows the weighted multiplier logic."""
    results = calculate_weighted_allocations(**sample_data)
    
    # Proj_a: (Normalized Impact * 2) + (Normalized Need * 1)
    # Since we only have two projects, normalization makes 8->1 and 4->0 for impact.
    assert results["proj_a"]["allocation"] > results["proj_b"]["allocation"]
    assert sum(p["allocation"] for p in results.values()) == pytest.approx(100000)

def test_normalization_safety():
    """Ensure that identical scores don't cause division by zero (NaN)."""
    weights = {"impact": 1.0}
    projects = {
        "p1": {"impact": 5},
        "p2": {"impact": 5}
    }
    # Logic should handle range_diff == 0
    results = calculate_weighted_allocations(1000, weights, projects)
    assert results["p1"]["allocation"] == 500.0

def test_zero_budget():
    """Regression test: Ensure zero budget doesn't crash the system."""
    weights = {"impact": 1.0}
    projects = {"p1": {"impact": 10}}
    results = calculate_weighted_allocations(0, weights, projects)
    assert results == {}