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
        "Inline-flex items-center justify-center font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2  "
}