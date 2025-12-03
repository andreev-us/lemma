import { UnitIconType } from "@/components/icons"

export const units: {
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
