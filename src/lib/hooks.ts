import { useMemo } from "react"

interface Point {
    x: number
    y: number
}

interface UsePathGeneratorProps {
    lessons: { position: number }[]
    nodeHeight: number
    nodeMarginBottom: number
    horizontalOffsetStep: number
    containerWidth: number
}

export function usePathGenerator({
    lessons,
    nodeHeight,
    nodeMarginBottom,
    horizontalOffsetStep,
    containerWidth,
}: UsePathGeneratorProps) {
    const verticalSpacing = nodeHeight + nodeMarginBottom
    const centerX = containerWidth / 2

    const getNodeCoordinates = (lessonIndex: number, position: number): Point => {
        const x = centerX + position * horizontalOffsetStep
        const y = lessonIndex * verticalSpacing + nodeHeight / 2
        return { x, y }
    }

    const generatePath = (startIndex: number, endIndex: number): string => {
        let pathD = ""

        // We iterate up to endIndex - 1 because each step draws to the next node
        for (let i = startIndex; i < endIndex; i++) {
            const currentLesson = lessons[i]
            const nextLesson = lessons[i + 1]

            if (!nextLesson) break

            const start = getNodeCoordinates(i, currentLesson.position)
            const end = getNodeCoordinates(i + 1, nextLesson.position)

            const cp1 = { x: start.x, y: start.y + verticalSpacing * 0.5 }
            const cp2 = { x: end.x, y: end.y - verticalSpacing * 0.5 }

            if (i === startIndex) {
                pathD += `M ${start.x} ${start.y}`
            }
            pathD += ` C ${cp1.x} ${cp1.y}, ${cp2.x} ${cp2.y}, ${end.x} ${end.y}`
        }

        return pathD
    }

    return {
        getNodeCoordinates,
        generatePath,
        verticalSpacing,
    }
}
