// src/hooks/useProjectLogic.ts
import { useEffect, useState } from 'react';
import type { Project } from '../types';

// Future version will have this saved more securely and loaded
const STORAGE_KEYS = {
    PROJECTS: "philanthropy_store_projects",
    BUDGET:"philanthropy_stor_budget"
  }

export function useProjectLogic() {
    
    const [projects, setProjects] = useState<Project[]>(() => {
        const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
        return saved ? JSON.parse(saved) : [];
    });
    
    const [budget, setBudget] = useState<number>(() => {
        const saved = localStorage.getItem(STORAGE_KEYS.BUDGET);
        return saved ? Number(saved) : 1000000
    })
    
    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects))
    }, [projects]);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.BUDGET, budget.toString())
    })


    const addProject = () => {
        const newProject: Project = {
        id: crypto.randomUUID(),
        name: '',
        impact: 50,
        urgency: 50
        };
        setProjects([...projects, newProject]);
    };
    const updateProject = (id: string, field: keyof Project, value: string | number) => {
        setProjects(prev => 
        prev.map(p => (p.id === id ? { ...p, [field]: value } : p))
        );
    };

    const deleteProject = (id: string) => {
        setProjects(prev => prev.filter(p => p.id !== id));
    };

  // We return everything the UI might need
  return {
    budget,
    setBudget,
    projects,
    addProject,
    updateProject,
    deleteProject
  };
}