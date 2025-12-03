import React from "react"
import { Star, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

export type UnitIconType = "star" | "airplane" | "chef" | "book" | "laptop" | "briefcase" | "music" | "listening" | "reading" | "writing" | "puzzle" | "quiz"

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const StarIcon = ({ className, ...props }: IconProps) => (
  <Star className={className} {...props} />
)

export const AirplaneIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
  </svg>
)

export const ChefHatIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M16.5 6c-.9 0-1.7.4-2.3 1-.6-1.3-1.9-2.2-3.4-2.2-1.5 0-2.8.9-3.4 2.2-.6-.6-1.4-1-2.3-1-2.2 0-4 1.8-4 4 0 2.1 1.6 3.8 3.6 4l-.5 3c-.1.6.3 1 .9 1h11c.6 0 1-.4.9-1l-.5-3c2-.2 3.6-1.9 3.6-4 0-2.2-1.8-4-4-4z"/>
  </svg>
)

export const BookIcon = ({ className, ...props }: IconProps) => (
  <BookOpen className={className} {...props} />
)

export const LaptopIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
  </svg>
)

export const BriefcaseIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-10-2h4v2h-4V4z"/>
  </svg>
)

export const MusicNoteIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
  </svg>
)

export const ListeningIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M12 3a9 9 0 0 0-9 9v7c0 1.1.9 2 2 2h3v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-3v8h3c1.1 0 2-.9 2-2v-7a9 9 0 0 0-9-9z"/>
  </svg>
)

export const ReadingIcon = ({ className, ...props }: IconProps) => (
  <BookOpen className={className} {...props} />
)

export const WritingIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
  </svg>
)

export const PuzzleIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5H2v4c0 1.1.9 2 2 2h4v-1.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5V22h4c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/>
  </svg>
)

export const QuizIcon = ({ className, ...props }: IconProps) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="4" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className} 
    style={{ fill: "none" }}
    {...props}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export const UnitIcon = ({ name, variant = "filled", className, ...props }: { name: UnitIconType, variant?: "outline" | "filled" } & IconProps) => {
  switch (name) {
    case "star":
      return <StarIcon className={className} fill={variant === "filled" ? "currentColor" : "none"} {...props} />
    case "airplane":
      return <AirplaneIcon className={className} {...props} />
    case "chef":
      return <ChefHatIcon className={className} {...props} />
    case "book":
      return <BookIcon className={className} fill={variant === "filled" ? "currentColor" : "none"} fillOpacity={variant === "filled" ? 0.2 : undefined} {...props} />
    case "laptop":
      return <LaptopIcon className={className} {...props} />
    case "briefcase":
      return <BriefcaseIcon className={className} {...props} />
    case "music":
      return <MusicNoteIcon className={className} {...props} />
    case "listening":
      return <ListeningIcon className={className} {...props} />
    case "reading":
      return <ReadingIcon className={className} fill={variant === "filled" ? "currentColor" : "none"} fillOpacity={variant === "filled" ? 0.2 : undefined} {...props} />
    case "writing":
      return <WritingIcon className={className} {...props} />
    case "puzzle":
      return <PuzzleIcon className={className} {...props} />
    case "quiz":
      return <QuizIcon className={className} {...props} />
    default:
      return <StarIcon className={className} {...props} />
  }
}
