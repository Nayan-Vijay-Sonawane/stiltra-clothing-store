import type { ButtonHTMLAttributes } from "react";

type ButtonProps = 
    ButtonHTMLAttributes<HTMLButtonElement> & {
        variant?: "primary" | "secondary" | "outline" | "ghost";
        size?: "sm" | "md" | "lg";
    };


export default function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    type = "button",
    ...props
} : ButtonProps) {

    const baseStyles = 
        "Inline-flex items-center justify-center font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 ";

    const variants = {
        primary:
            "bg-[var(--color-primary)] text-white hover:opacity-85",

        secondary:
            "bg-[var(--color-accent)] text-white hover:opacity-85",

        outline:
            "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white" ,
        
        ghost:
            "text-[var(--color-primary)] hover:bg-[var(--color-border)]",
    };

    const sizes = {
        sm: "px-3 py-2 text-sm",
        md: "px-5 py-3 text-sm",
        lg: "px-8 py-4 text-base",
    };

    return (
        <button
            type={type}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}