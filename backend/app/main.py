# backend/app/main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
from typing import Dict
from app.logic import calculate_weighted_allocations

app = FastAPI()

class AllocationRequest(BaseModel):
    total_budget: float = Field(gt=0) # Must be greater than 0
    weights: Dict[str, float]
    projects: Dict[str, Dict[str, float]]

@app.post("/api/v1/allocate")
def allocate(payload: AllocationRequest):
    # Call the logic function with validated data
    results = calculate_weighted_allocations(
        total_budget=payload.total_budget,
        weights=payload.weights,
        projects=payload.projects
    )
    return results