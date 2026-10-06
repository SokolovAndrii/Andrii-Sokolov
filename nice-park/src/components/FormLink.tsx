import { ArrowRight } from "lucide-react";
import { FORM_URL } from "@/config/site";

type Props = {
  children: React.ReactNode;
  className?: string;
  pulse?: boolean;
  arrow?: boolean;
};

/** Будь-яка CTA-кнопка, що веде на Google Форму (нова вкладка). */
export function FormLink({ children, className = "", pulse = false, arrow = true }: Props) {
  return (
    <a
      href={FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-primary ${pulse ? "animate-pulse-ring" : ""} ${className}`}
    >
      {children}
      {arrow && <ArrowRight className="h-5 w-5" aria-hidden />}
    </a>
  );
}
