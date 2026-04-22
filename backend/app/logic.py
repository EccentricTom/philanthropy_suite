"""Copyright Thomas Oliver 2026

Collection of logical functions to be used in the suite of philanthropy tools
"""

import numpy as np
from typing import Dict

def calculate_weighted_allocations(
    total_budget: float, 
    weights: Dict[str, float], 
    projects: Dict[str, Dict[str, float]]
) -> Dict[str, Dict]:
    
    if not weights or total_budget <= 0 or not projects:
        return {}

    project_ids = list(projects.keys())
    criteria_keys = list(weights.keys())

    # Build Matrix
    score_matrix = np.array([
        [projects[p].get(c, 0.0) for c in criteria_keys]
        for p in project_ids
    ])

    # Normalize
    col_min = score_matrix.min(axis=0)
    col_max = score_matrix.max(axis=0)
    range_diff = col_max - col_min
    range_diff[range_diff == 0] = 1.0 
    
    normalized_matrix = (score_matrix - col_min) / range_diff

    # Calculate
    weights_vector = np.array([weights[c] for c in criteria_keys])
    weighted_scores = normalized_matrix @ weights_vector
    
    total_weighted_sum = np.sum(weighted_scores)
    if total_weighted_sum == 0:
        num_projects = len(project_ids)
        shares = np.full(num_projects, 1.0 / num_projects)
    else:
        shares = weighted_scores / total_weighted_sum
    allocations = shares * total_budget

    return {
        p_id: {
            "allocation": round(float(allocations[i]), 2),
            "percentage": round(float(shares[i] * 100), 2)
        }
        for i, p_id in enumerate(project_ids)
    }
