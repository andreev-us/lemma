"use client"

import React from "react"
import { LessonNode } from "./lesson-node"
import { UnitHeader } from "./unit-header"
import { cn, UNIT_THEMES, UnitTheme } from "@/lib/utils"
import { useActiveUnit } from "@/context/active-unit-context"
import { units } from "@/lib/data"
import { usePathGenerator } from "@/lib/hooks"

export function LearningPath() {
  const { setActiveTheme } = useActiveUnit()
  // Constants for layout
  const NODE_HEIGHT = 72
  const NODE_MARGIN_BOTTOM = 43.2
  const HORIZONTAL_OFFSET_STEP = 54
  const CONTAINER_WIDTH = 320 // Increased width for better spacing

  const getThemeForUnit = (index: number): UnitTheme => {
    const themes: UnitTheme[] = ["indigo", "emerald", "amber", "azure"]
    return themes[index % themes.length]
  }

  const activeLessonRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    // Find the unit that contains the current lesson
    const activeUnitIndex = units.findIndex(unit =>
      unit.lessons.some(lesson => lesson.status === "current")
    )

    // If found, set the theme for that unit
    if (activeUnitIndex !== -1) {
      const themeName = getThemeForUnit(activeUnitIndex)
      setActiveTheme(themeName)
    } else {
      // Fallback to first unit if no current lesson found (e.g. all completed or none started)
      // Or logic for "last completed" could go here
      setActiveTheme(getThemeForUnit(0))
    }
  }, [setActiveTheme])

  React.useEffect(() => {
    // Immediate scroll on mount with a slight offset for the tooltip
    if (activeLessonRef.current) {
      const element = activeLessonRef.current
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - (window.innerHeight / 2) + (element.clientHeight / 2) - 100

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }, [])

  return (
    <div className="flex flex-col w-full relative">
      {units.map((unit, index) => {
        const themeName = getThemeForUnit(index)
        const theme = UNIT_THEMES[themeName]
        const nextThemeName = getThemeForUnit(index + 1)
        const nextTheme = UNIT_THEMES[nextThemeName]

        // Ensure the last lesson is always centered (position 0)
        const lessonsWithPositions = unit.lessons.map((lesson, idx) => ({
          ...lesson,
          position: idx === unit.lessons.length - 1 ? 0 : lesson.position
        }))

        const { generatePath, verticalSpacing } = usePathGenerator({
          lessons: lessonsWithPositions,
          nodeHeight: NODE_HEIGHT,
          nodeMarginBottom: NODE_MARGIN_BOTTOM,
          horizontalOffsetStep: HORIZONTAL_OFFSET_STEP,
          containerWidth: CONTAINER_WIDTH,
        })

        const unitHeight = lessonsWithPositions.length * verticalSpacing

        // Generate the full continuous path string
        const fullPathD = generatePath(0, lessonsWithPositions.length - 1)

        // Find the index of the current lesson to determine active path
        const currentLessonIndex = lessonsWithPositions.findIndex(l => l.status === "current")
        const lastCompletedIndex = lessonsWithPositions.findLastIndex(l => l.status === "completed")
        const activeEndIndex = currentLessonIndex !== -1 ? currentLessonIndex : lastCompletedIndex

        // Check if the unit is fully completed (all lessons completed)
        const isUnitCompleted = unit.lessons.every(l => l.status === "completed")

        let activePathD = ""
        if (activeEndIndex > 0) {
          activePathD = generatePath(0, activeEndIndex)
        }

        const titleParts = unit.title.split(":")
        const label = titleParts.length > 1 ? titleParts[0].trim() : undefined
        const title = titleParts.length > 1 ? titleParts.slice(1).join(":").trim() : unit.title

        return (
          <div
            key={unit.id}
            className="w-full flex flex-col items-center relative mb-12"
          >
            <UnitHeader
              title={title}
              label={label}
              description={unit.description}
              className={index === 0 ? "mt-0" : undefined}
              themeColor={themeName}
              icon={unit.icon}
            />

            <div className="relative w-full max-w-[320px] flex flex-col items-center mt-12">
              {/* SVG Path Background */}
              <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible"
                viewBox={`0 0 ${CONTAINER_WIDTH} ${unitHeight}`}
                preserveAspectRatio="xMidYMin meet"
                style={{ height: unitHeight }}
              >
                <defs>
                  <linearGradient id="path-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <g>
                  {/* Base Continuous Path (Road Surface) */}
                  <path
                    d={fullPathD}
                    stroke="#e2e8f0"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />

                  {/* Active Path Overlay */}
                  {activePathD && (
                    <>
                      <path
                        d={activePathD}
                        stroke={theme.primary}
                        strokeWidth="18"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-1000 ease-out"
                        fill="none"
                      />
                    </>
                  )}
                </g>
              </svg>

              {/* Nodes */}
              {lessonsWithPositions.map((lesson, index) => {
                const isCurrent = lesson.status === "current"
                return (
                  <React.Fragment key={lesson.id}>
                    <LessonNode
                      ref={isCurrent ? activeLessonRef : undefined}
                      index={index}
                      {...lesson}
                      status={lesson.status as "locked" | "current" | "completed"}
                      themeColor={themeName}
                      iconType={lesson.type === 'milestone' ? unit.icon : (lesson.iconType || unit.icon)}
                    />
                  </React.Fragment>
                )
              })}
            </div>

            {/* Endless Path Connector (Bottom) */}
            <div
              className="w-3 h-24 mt-[-20px] z-0 rounded-full transition-all duration-500"
              style={{
                background: isUnitCompleted
                  ? `linear-gradient(to bottom, ${theme.primary}, ${nextTheme.primary})`
                  : "linear-gradient(to bottom, #e2e8f0, transparent)"
              }}
            />
          </div>
        )
      })}
    </div>
  )
}
