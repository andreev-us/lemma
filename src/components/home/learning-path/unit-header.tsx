import { cn, UNIT_THEMES, UnitTheme } from "@/lib/utils"
import { UnitIcon, UnitIconType } from "@/components/icons"

interface UnitHeaderProps {
  title: string
  description: string
  label?: string // e.g. "Unit 1"
  className?: string
  themeColor?: UnitTheme
  icon?: UnitIconType
}

export function UnitHeader({
  title,
  description,
  label,
  className,
  themeColor = "indigo",
  icon = "star"
}: UnitHeaderProps) {
  const theme = UNIT_THEMES[themeColor]

  return (
    <div
      className={cn(
        "sticky top-[9.5rem] z-30 w-full mb-8 overflow-hidden",
        "backdrop-blur-md border-2 border-slate-200 rounded-3xl shadow-sm",
        className
      )}
      style={{
        background: `linear-gradient(to bottom right, rgba(255,255,255,0.8) 0%, ${theme.primary}15 100%)`
      }}
    >
      <div className="flex flex-row items-center justify-between p-6 gap-4">
        {/* Left Side: Text Content */}
        <div className="flex flex-col items-start gap-1 flex-1 min-w-0">
          {label && (
            <span className={cn(
              "inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
              theme.classes.bgLight,
              theme.classes.text
            )}>
              {label}
            </span>
          )}
          <h2 className="text-2xl font-bold text-gray-900">
            {title}
          </h2>
          <p className="text-gray-500 font-medium">
            {description}
          </p>
        </div>

        {/* Right Side: Visual Asset Placeholder */}
        <div
          className={cn(
            "hidden sm:flex items-center justify-center w-20 h-20 flex-shrink-0 rounded-full shadow-sm border-2 border-white/50",
            "bg-white/50 backdrop-blur-md"
          )}
        >
          <UnitIcon
            name={icon}
            variant={icon === 'book' ? 'outline' : 'filled'}
            className={cn("w-8 h-8", theme.classes.text)}
          />
        </div>
      </div>
    </div>
  )
}
