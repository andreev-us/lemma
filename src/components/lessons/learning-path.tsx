"use client"

import React from "react"
import { LessonNode } from "./lesson-node"
import { UnitHeader } from "./unit-header"
import { cn, UNIT_THEMES, UnitTheme } from "@/lib/utils"
import { useActiveUnit } from "@/context/active-unit-context"
import { UnitIconType } from "./unit-icons"

// Mock Data
const units: {
  id: number
  title: string
  description: string
  progress: number
  icon: UnitIconType
  lessons: {
    id: string
    title: string
    status: string
    position: number
    description?: string
    type?: "lesson" | "quiz" | "milestone"
    iconType?: UnitIconType
  }[]
}[] = [
  {
    id: 1,
    title: "Unit 1: Basics",
    description: "Start your journey with essential phrases",
    progress: 60,
    icon: "star",
    lessons: [
      { id: "l1", title: "Greetings", status: "completed", position: 0, iconType: "listening" },
      { id: "l2", title: "Introductions", status: "completed", position: -1, iconType: "reading" },
      { id: "l3", title: "Common Phrases", status: "completed", position: 1, iconType: "writing" },
      { id: "l4", title: "Numbers", status: "current", position: 0, description: "Learn to count 1-100", iconType: "puzzle" },
      { id: "l5", title: "Colors", status: "locked", position: -1, iconType: "quiz" },
      { id: "l6", title: "Family", status: "locked", position: 1, iconType: "listening" },
      { id: "l7", title: "Unit Review", status: "locked", position: 0, type: "milestone" },
    ]
  },
  {
    id: 2,
    title: "Unit 2: Travel",
    description: "Explore the world with confidence",
    progress: 0,
    icon: "airplane",
    lessons: [
      { id: "l12", title: "At the Airport", status: "locked", position: 0, iconType: "listening" },
      { id: "l13", title: "Asking Directions", status: "locked", position: -1, iconType: "reading" },
      { id: "l14", title: "Hotel Check-in", status: "locked", position: 1, iconType: "writing" },
      { id: "l15", title: "Public Transport", status: "locked", position: 0, iconType: "puzzle" },
      { id: "l16", title: "Sightseeing", status: "locked", position: -1, iconType: "quiz" },
    ]
  },
  {
    id: 3,
    title: "Unit 3: Cooking & Food",
    description: "Taste the local cuisine",
    progress: 0,
    icon: "chef",
    lessons: [
      { id: "l17", title: "Restaurant Basics", status: "locked", position: 0, iconType: "listening" },
      { id: "l18", title: "Ordering Food", status: "locked", position: 1, iconType: "reading" },
      { id: "l19", title: "Dietary Restrictions", status: "locked", position: -1, iconType: "writing" },
      { id: "l20", title: "Paying the Bill", status: "locked", position: 0, iconType: "puzzle" },
    ]
  },
  {
    id: 4,
    title: "Unit 4: Reading & Literature",
    description: "Discover great stories",
    progress: 0,
    icon: "book",
    lessons: [
      { id: "l21", title: "Short Stories", status: "locked", position: 0, iconType: "reading" },
      { id: "l22", title: "Poems", status: "locked", position: 1, iconType: "writing" },
      { id: "l23", title: "Novels", status: "locked", position: -1, iconType: "listening" },
      { id: "l24", title: "Classics", status: "locked", position: 0, iconType: "quiz" },
    ]
  },
  {
    id: 5,
    title: "Unit 5: IT & Technology",
    description: "Navigate the digital world",
    progress: 0,
    icon: "laptop",
    lessons: [
      { id: "l25", title: "Computers", status: "locked", position: 0, iconType: "puzzle" },
      { id: "l26", title: "Internet", status: "locked", position: 1, iconType: "reading" },
      { id: "l27", title: "Coding", status: "locked", position: -1, iconType: "writing" },
      { id: "l28", title: "Cybersecurity", status: "locked", position: 0, iconType: "quiz" },
    ]
  },
  {
    id: 6,
    title: "Unit 6: Business & Work",
    description: "Succeed in the workplace",
    progress: 0,
    icon: "briefcase",
    lessons: [
      { id: "l29", title: "Meetings", status: "locked", position: 0, iconType: "listening" },
      { id: "l30", title: "Emails", status: "locked", position: 1, iconType: "writing" },
      { id: "l31", title: "Negotiations", status: "locked", position: -1, iconType: "reading" },
      { id: "l32", title: "Presentations", status: "locked", position: 0, iconType: "puzzle" },
    ]
  },
  {
    id: 7,
    title: "Unit 7: Social & Hobbies",
    description: "Connect with others",
    progress: 0,
    icon: "music",
    lessons: [
      { id: "l33", title: "Music", status: "locked", position: 0, iconType: "listening" },
      { id: "l34", title: "Sports", status: "locked", position: 1, iconType: "reading" },
      { id: "l35", title: "Art", status: "locked", position: -1, iconType: "writing" },
      { id: "l36", title: "Movies", status: "locked", position: 0, iconType: "quiz" },
    ]
  }
] as const

export function LearningPath() {
  const { setActiveTheme } = useActiveUnit()
  // Constants for layout
  const NODE_HEIGHT = 80
  const NODE_MARGIN_BOTTOM = 48
  const VERTICAL_SPACING = NODE_HEIGHT + NODE_MARGIN_BOTTOM
  const HORIZONTAL_OFFSET_STEP = 60
  const CONTAINER_WIDTH = 320 // Increased width for better spacing
  const CENTER_X = CONTAINER_WIDTH / 2

  // Helper to calculate node coordinates
  const getNodeCoordinates = (lessonIndex: number, position: number) => {
    const x = CENTER_X + (position * HORIZONTAL_OFFSET_STEP)
    const y = lessonIndex * VERTICAL_SPACING + NODE_HEIGHT / 2
    return { x, y }
  }
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

        const unitHeight = lessonsWithPositions.length * VERTICAL_SPACING
        
        // Generate the full continuous path string
        let fullPathD = ""
        lessonsWithPositions.forEach((lesson, index) => {
          if (index === lessonsWithPositions.length - 1) return
          
          const nextLesson = lessonsWithPositions[index + 1]
          const start = getNodeCoordinates(index, lesson.position)
          const end = getNodeCoordinates(index + 1, nextLesson.position)
          
          const cp1 = { x: start.x, y: start.y + (VERTICAL_SPACING * 0.5) }
          const cp2 = { x: end.x, y: end.y - (VERTICAL_SPACING * 0.5) }
          
          if (index === 0) {
            fullPathD += `M ${start.x} ${start.y}`
          }
          fullPathD += ` C ${cp1.x} ${cp1.y}, ${cp2.x} ${cp2.y}, ${end.x} ${end.y}`
        })

        // Find the index of the current lesson to determine active path
        const currentLessonIndex = lessonsWithPositions.findIndex(l => l.status === "current")
        const lastCompletedIndex = lessonsWithPositions.findLastIndex(l => l.status === "completed")
        const activeEndIndex = currentLessonIndex !== -1 ? currentLessonIndex : lastCompletedIndex
        
        // Check if the unit is fully completed (all lessons completed)
        const isUnitCompleted = unit.lessons.every(l => l.status === "completed")

        let activePathD = ""
        if (activeEndIndex > 0) {
           lessonsWithPositions.slice(0, activeEndIndex + 1).forEach((lesson, index) => {
            if (index >= activeEndIndex) return
            
            const nextLesson = lessonsWithPositions[index + 1]
            const start = getNodeCoordinates(index, lesson.position)
            const end = getNodeCoordinates(index + 1, nextLesson.position)
            
            const cp1 = { x: start.x, y: start.y + (VERTICAL_SPACING * 0.5) }
            const cp2 = { x: end.x, y: end.y - (VERTICAL_SPACING * 0.5) }
            
            if (index === 0) {
              activePathD += `M ${start.x} ${start.y}`
            }
            activePathD += ` C ${cp1.x} ${cp1.y}, ${cp2.x} ${cp2.y}, ${end.x} ${end.y}`
          })
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
