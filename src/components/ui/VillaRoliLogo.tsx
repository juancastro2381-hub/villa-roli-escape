import { cn } from "@/lib/utils";

interface VillaRoliLogoProps {
  className?: string;
  variant?: "light" | "dark";
  showTagline?: boolean;
}

export function VillaRoliLogo({ 
  className, 
  variant = "dark",
  showTagline = false 
}: VillaRoliLogoProps) {
  const textColor = variant === "light" ? "text-cream-light" : "text-primary";
  const accentColor = "text-gold";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Palm tree icon */}
      <svg 
        viewBox="0 0 40 40" 
        className="w-10 h-10"
        fill="none"
      >
        {/* Sun/circle */}
        <circle 
          cx="28" 
          cy="12" 
          r="6" 
          className="fill-gold"
        />
        {/* Palm tree trunk */}
        <path 
          d="M16 38 L18 22 L20 38" 
          className="stroke-primary" 
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Palm leaves */}
        <path 
          d="M18 22 Q8 18 4 12 Q12 16 18 20" 
          className="fill-primary"
        />
        <path 
          d="M18 22 Q12 12 8 6 Q16 14 18 20" 
          className="fill-primary"
        />
        <path 
          d="M18 22 Q22 10 26 6 Q22 14 18 20" 
          className="fill-primary"
        />
        <path 
          d="M18 22 Q28 14 34 12 Q26 18 18 20" 
          className="fill-primary"
        />
      </svg>
      
      <div className="flex flex-col">
        <span className={cn("font-display text-2xl md:text-3xl font-bold leading-tight", textColor)}>
          Villa<span className={accentColor}>Roli</span>
        </span>
        {showTagline && (
          <span className={cn("text-[10px] tracking-wider uppercase", 
            variant === "light" ? "text-cream-light/70" : "text-muted-foreground"
          )}>
            Finca de recreación y turismo
          </span>
        )}
      </div>
    </div>
  );
}
