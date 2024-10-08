//@ts-nocheck
import React from 'react'
import { Badge } from '@/components/new-york/ui/badge'
import { Card, CardContent } from '@/components/new-york/ui/card'
import { Progress } from '@/components/new-york/ui/progress'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/new-york/ui/table'
import { Label } from '@/components/new-york/ui/label'
import { Textarea } from '@/components/new-york/ui/textarea'
import { Input } from '@/components/new-york/ui/input'
import { Select } from '@/components/new-york/ui/select'
import { Button } from '@/components/new-york/ui/button'
const Support = () => {
  return (
    <div>
         <div className="grid gap-4">
            <div className="grid gap-1">
              <h2 className="text-2xl font-bold">Support</h2>
              <p className="text-muted-foreground">
                Get help and support for your account.
              </p>
            </div>
            <Card className='p-4'>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="ticket-title">Ticket Title</Label>
                      <Input
                        id="ticket-title"
                        placeholder="Enter ticket title"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="ticket-priority">Priority</Label>
                      <Select id="ticket-priority">
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                      </Select>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="ticket-description">Description</Label>
                    <Textarea
                      id="ticket-description"
                      placeholder="Enter ticket description"
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button className="ml-auto">Submit Ticket</Button>
                </div>
              </CardContent>
            </Card>
          </div>
    </div>
  )
}

export default Support
