"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { ModeToggle } from "@/components/mode-toggle"
import { useState } from "react"

export function SettingsTab() {
  const [dailyGoal, setDailyGoal] = useState([20])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Manage your public profile and contact info.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Display Name</Label>
            <Input id="name" defaultValue="John Doe" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="john@example.com" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Learning Goals</CardTitle>
          <CardDescription>Customize your learning experience.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Daily Goal</Label>
              <span className="text-sm text-muted-foreground">{dailyGoal} mins/day</span>
            </div>
            <Slider 
              value={dailyGoal} 
              onValueChange={setDailyGoal} 
              max={60} 
              min={5} 
              step={5} 
            />
          </div>
          
          <div className="grid gap-2">
            <Label>Difficulty Level</Label>
            <Select defaultValue="intermediate">
              <SelectTrigger>
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner (A1-A2)</SelectItem>
                <SelectItem value="intermediate">Intermediate (B1-B2)</SelectItem>
                <SelectItem value="advanced">Advanced (C1-C2)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Manage how we communicate with you.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="daily-reminders" className="flex flex-col space-y-1">
              <span>Daily Reminders</span>
              <span className="font-normal text-xs text-muted-foreground">Receive a notification to study every day.</span>
            </Label>
            <Switch id="daily-reminders" defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="weekly-report" className="flex flex-col space-y-1">
              <span>Weekly Progress Report</span>
              <span className="font-normal text-xs text-muted-foreground">Get a summary of your weekly activity.</span>
            </Label>
            <Switch id="weekly-report" defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>Customize how the app looks on your device.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="theme-toggle" className="flex flex-col space-y-1">
              <span>Theme</span>
              <span className="font-normal text-xs text-muted-foreground">Select your preferred theme.</span>
            </Label>
            <div id="theme-toggle">
              <ModeToggle />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle className="text-destructive">Danger Zone</CardTitle>
          <CardDescription>Irreversible actions.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="destructive" className="w-full sm:w-auto">Delete Account</Button>
        </CardContent>
      </Card>
    </div>
  )
}
