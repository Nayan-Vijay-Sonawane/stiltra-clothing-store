import type { InputHTMLAttributes } from "react";

type InputProps = 
    InputHTMLAttributes<HTMLInputElement> & {
        label? : string;
    };

export default function Input({
    label,
    id,
    className = "",
    ...props
}: InputProps) {
    return (
        <div className="flex flex-col gap-2">
            
            {label && (
                <label
                htmlFor={id}
                className="text-sm font-medium text-[var(--color-primary)]"
                >
                    {label}
                </label>
            )}

            <input 
                id={id}
                className={`w-full border border-[var(--color-border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)] ${className} `}
                {...props}
            />

        </div>
    )
}

