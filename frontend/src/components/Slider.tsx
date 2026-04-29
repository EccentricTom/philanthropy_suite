interface SliderProps {
    label: string;
    value: number;
    onChange: (newValue: number) =>void;
    min?: number;
    max?: number;
}

export function Slider({ label, value, onChange, min = 0, max = 100}: SliderProps) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <label className="input-label-caps"> {label} </label>
                <span className="metric-badge"> {value} </span>
            </div>
            <input
            type="range"
            min={min}
            max={max}
            onChange={(e) => onChange(Number(e.target.value))}
            className="slider-track"
            >
            </input>
        </div>
    );
}