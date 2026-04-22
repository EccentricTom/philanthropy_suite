import { useState } from 'react';
import { Sparkles, Plus, PieChart, ListChecks } from 'lucide-react';
import { Header } from './components/header';
import "./index.css";

function App() {
  const [budget, setBudget] = useState(1000000);
  const [projects, setProjects] = useState<Project[]>([]); // Same logic as before

  return (
    <div className="app-container">
      <Header budget={budget}></Header>

      <main className="main-layout">
        <section className="lg:col-span-10 space-y-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-slate-700">
              <ListChecks className="text-brand-primary" size={20} /> Active Projects
            </h2>
            <button className="btn-interactive btn-ghost-style">
              <Plus size={18} /> New Entry
            </button>
          </div>

          <div className="card-project">
             <input placeholder="Project Name..." className="text-xl font-semibold outline-none w-full" />
          </div>
        </section>

        <section className="lg:col-span-2">
          <div className="panel-summary">
            <h2 className="flex items-center gap-2 text-lg font-bold mb-8 border-b border-white/10 pb-4">
              <PieChart className="text-brand-primary" size={20} /> Allocation
            </h2>
            
            {/* COMBINING CLASSES HERE */}
            <button className="btn-interactive btn-primary-style w-full mt-6">
              Calculate Results
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;