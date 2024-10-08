
import { Button } from '@/components/new-york/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/new-york/ui/card'
import { Input } from '@/components/new-york/ui/input'
import { Label } from '@/components/new-york/ui/label'
import { Textarea } from '@/components/new-york/ui/textarea'


import React from 'react'

const Account = () => {
  return (
    <div className="mx-auto max-w-4xl">
    <div className="mb-8 flex items-center justify-between">
      <h1 className="text-2xl font-bold">My Account</h1>
      <Button variant="outline">Edit Profile</Button>
    </div>
    <div className="grid gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Jane Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" defaultValue="jane@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" defaultValue="+1 (555) 987-6543" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" defaultValue="San Francisco, CA" />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            id="about"
            defaultValue="I am a lifelong learner with a passion for technology and personal growth. I enjoy taking online courses to expand my knowledge and skills. In my free time, I like to read, travel, and spend time with friends and family."
            className="min-h-[200px]"
          />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Security</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <Button>Update Password</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
  )
}

export default Account
