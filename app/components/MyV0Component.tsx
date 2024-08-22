/**
 * v0 by Vercel.
 * @see https://v0.dev/t/M8xxU6uDhxO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useEffect } from "react"
import { Toggle } from "@/components/ui/toggle"

export default function Component() {
  const [time, setTime] = useState(new Date())
  const [is24Hour, setIs24Hour] = useState(false)
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  const formattedTime = is24Hour
    ? time.toLocaleTimeString("en-US", { hour12: false })
    : time.toLocaleTimeString("en-US")
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <div className="bg-card rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-card-foreground">{formattedTime}</div>
          <Toggle size="lg" aria-label="Toggle 24-hour time" checked={is24Hour} onCheckedChange={setIs24Hour}>
            <ClockIcon className="h-6 w-6 text-card-foreground" />
          </Toggle>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-lg text-muted-foreground">
            {time.toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div className="flex items-center gap-2 text-lg text-muted-foreground">
            <ThermometerIcon className="h-6 w-6" />
            <span>72°F</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function ThermometerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </svg>
  )
}
