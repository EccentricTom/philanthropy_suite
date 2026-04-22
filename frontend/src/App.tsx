import { useState } from 'react';
import { ListChecks, Plus, PieChart } from 'lucide-react';
import { Header } from './components/Header';
import { ProjectCard } from './components/ProjectCard';

// 1. IMPORT TYPE: Ensures compatibility with 'verbatimModuleSyntax'
import type { Project } from './types';

export default function App() {
  // --- STATE ---
  const [budget, setBudget] = useState(1000000);
  const [projects, setProjects] = useState<Project[]>([]);

  // --- LOGIC FUNCTIONS ---
  
  // Adds a new project card to the list
  const addProject = () => {
    const newProject: Project = {
      id: crypto.randomUUID(),
      name: '',
      impact: 50,
      urgency: 50
    };
    setProjects([...projects, newProject]);
  };

  // Updates specific fields (name, impact, urgency) for a specific ID
  const updateProject = (id: string, field: keyof Project, value: string | number) => {
    setProjects(
      projects.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  // Removes a project from the list
  const deleteProject = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  // --- RENDER ---
  return (
    <div className="app-container">
      {/* Our Modular Header */}
      <Header budget={budget} setBudget={setBudget} />

      <main className="main-layout">
        
        {/* Left Column: Project List */}
        <section className="lg:col-span-8 w-full space-y-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="flex items-center gap-2 text-lg font-bold text-slate-700">
              <ListChecks className="text-brand-primary" size={20} /> 
              Active Projects
            </h2>
            <button 
              onClick={addProject} 
              className="btn-interactive btn-ghost-style"
            >
              <Plus size={18} /> New Entry
            </button>
          </div>

          <div className="space-y-4">
            {projects.length === 0 ? (
              <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-dashboard">
                <p className="text-slate-400">No projects added yet. Click "New Entry" to start.</p>
              </div>
            ) : (
              projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onUpdate={updateProject}
                  onDelete={deleteProject}
                />
              ))
            )}
          </div>
        </section>

        {/* Right Column: Results Panel (Summary) */}
        <aside className="sidebar-container lg:col-span-4 w-full">
          <div className="panel-summary">
            <h2 className="flex items-center gap-2 text-lg font-bold mb-8 border-b border-white/10 pb-4">
              <PieChart className="text-brand-primary" size={20} /> 
              Allocation Summary
            </h2>
            
            <div className="space-y-4 min-h-[100px]">
              {projects.map((p) => (
                <div key={p.id} className="summary-row">
                  <span className="text-slate-400 truncate max-w-[150px]">
                    {p.name || "Untitled Project"}
                  </span>
                  <div className="text-right">
                    <p className="summary-amount">$0</p>
                    <span className="summary-percent">0%</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-interactive btn-primary-style w-full mt-8">
              Calculate Results
            </button>
            
            <p className="text-center text-slate-500 text-[10px] mt-6 uppercase tracking-widest font-bold">
              Philanthropy Engine v1.0
            </p>
          </div>
        </aside>

      </main>
    </div>
  );
}