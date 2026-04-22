// src/components/ProjectCard.tsx
import { Trash2 } from 'lucide-react';
import type { Project } from '../types'; // Import the type we created

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
      
      {/* Visual placeholder for the sliders we'll build next */}
      <div className="mt-4 grid grid-cols-2 gap-4 border-t border-slate-50 pt-4">
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-slate-400 uppercase">Impact</label>
          <div className="h-2 bg-slate-100 rounded-full w-full"></div>
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-slate-400 uppercase">Urgency</label>
          <div className="h-2 bg-slate-100 rounded-full w-full"></div>
        </div>
      </div>
    </div>
  );
}