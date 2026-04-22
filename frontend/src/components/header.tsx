import { Sparkles , Flag} from 'lucide-react';

interface HeaderProps {
  budget: number;
  setBudget: (value: number) => void;
}

export function Header({ budget, setBudget }: HeaderProps) {
  return (
    <header className="header-nav">
      <div className="flex items-center gap-3">
        <div className="flex gap-2 bg-brand-primary p-2 rounded-xl text-white">
          <Sparkles size={20} fill="currentColor" />
          <Flag size={20} fill='black' />
        </div>
        <h1 className="text-xl font-bold text-brand-dark">Philanthropy Suite</h1>
      </div>
      
      <div className="input-budget-wrapper">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Pool</span>
        <input 
          type="number" 
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="bg-transparent border-none font-bold text-xl outline-none w-32 text-right"
        />
      </div>
    </header>
  );
}