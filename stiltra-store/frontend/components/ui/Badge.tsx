import type { ReactNode } from 'react';

type BadgeProps = {
    children: ReactNode;
    variant? : "default" | "sale" | "new" | "success";
};

export default function Badge({
    children,
    variant = "default"
}: BadgeProps) {

    const variants = {
        default: 
            "bg-[var(--color-border)] text-[var(--color-primary)]",

        sale: 
            "bg-[var(--color-primary)] text-white",
        
        new:
            "bg-[var(--color-accent)] text-white",

        success:
            "bg-green-200 text-green-700",
    };

    return (
        <span
            className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide ${variants[variant]}`}
        >
            {children}
        </span>
    );
}