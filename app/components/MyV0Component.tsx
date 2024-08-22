/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0XoSeZAFHS7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Weekly Schedule</CardTitle>
        <CardDescription>Upcoming events for the week</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-[auto_1fr] items-center gap-4">
          <div className="bg-primary rounded-md p-2 text-primary-foreground">
            <CalendarIcon className="w-5 h-5" />
          </div>
          <div className="grid gap-1">
            <div className="font-medium">Design Team Meeting</div>
            <div className="text-sm text-muted-foreground">Monday, 9:00 AM - 10:00 AM</div>
            <div className="text-sm">Discuss new design proposals and review ongoing projects.</div>
          </div>
        </div>
        <div className="grid grid-cols-[auto_1fr] items-center gap-4">
          <div className="bg-primary rounded-md p-2 text-primary-foreground">
            <CalendarIcon className="w-5 h-5" />
          </div>
          <div className="grid gap-1">
            <div className="font-medium">Engineering Standup</div>
            <div className="text-sm text-muted-foreground">Tuesday, 11:00 AM - 11:30 AM</div>
            <div className="text-sm">Discuss progress, blockers, and upcoming tasks.</div>
          </div>
        </div>
        <div className="grid grid-cols-[auto_1fr] items-center gap-4">
          <div className="bg-primary rounded-md p-2 text-primary-foreground">
            <CalendarIcon className="w-5 h-5" />
          </div>
          <div className="grid gap-1">
            <div className="font-medium">Marketing Strategy Meeting</div>
            <div className="text-sm text-muted-foreground">Wednesday, 2:00 PM - 3:30 PM</div>
            <div className="text-sm">Discuss new marketing initiatives and campaign planning.</div>
          </div>
        </div>
        <div className="grid grid-cols-[auto_1fr] items-center gap-4">
          <div className="bg-primary rounded-md p-2 text-primary-foreground">
            <CalendarIcon className="w-5 h-5" />
          </div>
          <div className="grid gap-1">
            <div className="font-medium">Product Review</div>
            <div className="text-sm text-muted-foreground">Friday, 4:00 PM - 5:00 PM</div>
            <div className="text-sm">Review new product features and provide feedback.</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}
