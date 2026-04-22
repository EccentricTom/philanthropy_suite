import "./index.css";

function App() {
  return (
    // 'bg-brand-dark' comes from our @theme block
    <div className="min-h-screen flex flex-col justify-center items-center gap-6 bg-brand-dark text-white font-display">
      
      <div className="p-8 bg-white/10 rounded-2xl shadow-soft border border-white/20 backdrop-blur-md">
        <h1 className="text-4xl font-bold text-brand-primary">
          Philanthropy Suite
        </h1>
        <p className="mt-4 text-slate-300">
          The allocation engine is ready.
        </p>
      </div>

      <button className="px-6 py-2 bg-brand-primary hover:bg-emerald-400 transition-colors rounded-lg font-medium">
        Get Started
      </button>
      
    </div>
  );
}

export default App;