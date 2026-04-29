// src/components/ProjectCard.tsx
import { Trash2 } from 'lucide-react';
import type { Project } from '../types'; // Import the type we created
import { Slider } from './Slider';

interface ProjectCardProps {
  project: Project;
  onUpdate: (id: string, field: keyof Project, value: string | number) => void;
  onDelete: (id: string) => void;
}

export function ProjectCard({ project, onUpdate, onDelete }: ProjectCardProps) {
  return (
    <div className="card-project">
      <div className="flex justify-between items-start gap-4">
        <input 
          value={project.name}
          onChange={(e) => onUpdate(project.id, 'name', e.target.value)}
          placeholder="Project name..." 
          className="text-xl font-semibold outline-none w-full border-b border-transparent focus:border-slate-100" 
        />
        <button 
          onClick={() => onDelete(project.id)}
          className="btn-interactive text-slate-300 hover:text-red-400 transition-colors"
        >
          <Trash2 size={18} />
        </button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
        <Slider 
          label="Impact Score" 
          value={project.impact} 
          onChange={(val) => onUpdate(project.id, 'impact', val)} 
        />
        <Slider 
          label="Urgency" 
          value={project.urgency} 
          onChange={(val) => onUpdate(project.id, 'urgency', val)} 
        />
      </div>
    </div>
  );
}