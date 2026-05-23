export interface QuickAction {

    title: string,
    description: string,
    gradient: string,
    href: string,

}
export const quickActions: QuickAction[] = [
    {
        title: "Mafia Boss Speech",
        description: "Generate powerful underworld dialogue scenes",
        gradient: "from-red-500 to-red-100",
        href: "/text-to-speech?text=You think loyalty is a word? No. Loyalty is what keeps a man alive in this city. Tonight, every family in New Verona will choose a side. And if they choose against us... they won't live to regret it.",
    },
    {
        title: "Police Interrogation",
        description: "Create tense crime-thriller conversations",
        gradient: "from-blue-500 to-blue-100",
        href: "/text-to-speech?text=Listen carefully, Daniel. Your fingerprints were found at the warehouse, the security cameras caught your car leaving the scene, and your partner already confessed. This is your last chance to tell us what really happened that night.",
    },
    {
        title: "Bank Heist Escape",
        description: "Build high-stakes action storytelling moments",
        gradient: "from-orange-500 to-orange-100",
        href: "/text-to-speech?text=We have exactly three minutes before the entire building goes into lockdown. Grab the cash, avoid the west corridor, and whatever happens, do not stop moving. The helicopters are already on their way.",
    },
    {
        title: "Courtroom Verdict",
        description: "Deliver dramatic legal thriller narration",
        gradient: "from-purple-500 to-purple-100",
        href: "/text-to-speech?text=After reviewing all evidence presented before this court, the jury has reached a unanimous decision. On the charge of conspiracy and organized crime, we find the defendant... guilty.",
    },
    {
        title: "Prison Break Plan",
        description: "Generate suspenseful escape mission dialogue",
        gradient: "from-gray-600 to-gray-200",
        href: "/text-to-speech?text=The guards change shifts at exactly 2:15 AM. That's our window. Once the lights go out, we move through the maintenance tunnel beneath Cell Block C. If anyone gets caught, the rest keep running.",
    },
    {
        title: "Detective Mystery",
        description: "Create dark noir investigation scenes",
        gradient: "from-cyan-400 to-cyan-50",
        href: "/text-to-speech?text=The rain washed blood into the streets of East Hollow while Detective Carter studied the photograph one more time. Every victim had the same symbol carved into their wrist. And tonight, another body had just been found.",
    },
];