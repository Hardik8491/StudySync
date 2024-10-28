'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Upload, DollarSign, Tag, Link as LinkIcon } from 'lucide-react'
import Image from 'next/image'

export default function ResponsiveCourseCreationForm() {
  const [courseInfo, setCourseInfo] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    level: '',
    tag: '',
    demoUrl: '',
    thumbnail: null,
  })

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target
    setCourseInfo(prev => ({
      ...prev,
      [name]: type === 'file' ? URL.createObjectURL(files[0]) : value
    }))
  }

  const handleLevelChange = (value) => {
    setCourseInfo(prev => ({ ...prev, level: value }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl font-bold text-center">Create New Course</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">Course Name</Label>
              <Input
                id="name"
                name="name"
                value={courseInfo.name}
                onChange={handleInputChange}
                placeholder="Enter course name"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category" className="text-sm font-medium">Course Category</Label>
              <Input
                id="category"
                name="category"
                value={courseInfo.category}
                onChange={handleInputChange}
                placeholder="Enter course category"
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">Course Description</Label>
            <Textarea
              id="description"
              name="description"
              value={courseInfo.description}
              onChange={handleInputChange}
              placeholder="Enter course description"
              className="min-h-[100px] w-full"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="price" className="text-sm font-medium">Price</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="price"
                  name="price"
                  value={courseInfo.price}
                  onChange={handleInputChange}
                  placeholder="Enter course price"
                  type="number"
                  className="pl-10 w-full"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="level" className="text-sm font-medium">Course Level</Label>
              <Select onValueChange={handleLevelChange} value={courseInfo.level}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select course level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="tag" className="text-sm font-medium">Course Tag</Label>
              <div className="relative">
                <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="tag"
                  name="tag"
                  value={courseInfo.tag}
                  onChange={handleInputChange}
                  placeholder="Add tags (e.g., programming, design)"
                  className="pl-10 w-full"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="demoUrl" className="text-sm font-medium">Demo URL</Label>
              <div className="relative">
                <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="demoUrl"
                  name="demoUrl"
                  value={courseInfo.demoUrl}
                  onChange={handleInputChange}
                  placeholder="Enter demo URL"
                  className="pl-10 w-full"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Label htmlFor="thumbnail" className="text-sm font-medium">Course Thumbnail</Label>
            <Card>
              <CardContent className="p-4">
                {courseInfo.thumbnail ? (
                  <Image
                    src={courseInfo.thumbnail}
                    alt="Course thumbnail preview"
                    width={300}
                    height={200}
                    className="w-full h-[150px] sm:h-[200px] object-cover rounded-md"
                  />
                ) : (
                  <div className="w-full h-[150px] sm:h-[200px] bg-muted flex items-center justify-center rounded-md">
                    <Upload className="w-8 h-8 sm:w-12 sm:h-12 text-muted-foreground" />
                  </div>
                )}
              </CardContent>
            </Card>
            <Input
              id="thumbnail"
              name="thumbnail"
              type="file"
              onChange={handleInputChange}
              accept="image/*"
              className="w-full cursor-pointer"
            />
            <p className="text-xs sm:text-sm text-muted-foreground">
              Upload a thumbnail image for your course. Recommended size: 300x200 pixels.
            </p>
          </div>

          <Button className="w-full">Create Course</Button>
        </CardContent>
      </Card>
    </div>
  )
}