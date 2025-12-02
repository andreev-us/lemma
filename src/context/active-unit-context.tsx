"use client"

import React, { createContext, useContext, useState } from "react"
import { UnitTheme } from "@/lib/utils"

interface ActiveUnitContextType {
  activeTheme: UnitTheme
  setActiveTheme: (theme: UnitTheme) => void
}

const ActiveUnitContext = createContext<ActiveUnitContextType | undefined>(undefined)

export function ActiveUnitProvider({ children }: { children: React.ReactNode }) {
  const [activeTheme, setActiveTheme] = useState<UnitTheme>("indigo")

  return (
    <ActiveUnitContext.Provider value={{ activeTheme, setActiveTheme }}>
      {children}
    </ActiveUnitContext.Provider>
  )
}

export function useActiveUnit() {
  const context = useContext(ActiveUnitContext)
  if (context === undefined) {
    throw new Error("useActiveUnit must be used within a ActiveUnitProvider")
  }
  return context
}
