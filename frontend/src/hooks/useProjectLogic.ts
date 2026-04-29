// src/hooks/useProjectLogic.ts
import { useState } from 'react';
import type { Project } from '../types';

export function useProjectLogic() {
  const [budget, setBudget] = useState(1000000);
  const [projects, setProjects] = useState<Project[]>([]);

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