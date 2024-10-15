'use client'

import { useState } from 'react'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Label } from '@/components/new-york/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/new-york/ui/radio-group'
import { Input } from '@/components/new-york/ui/input'
import { CardTitle, CardFooter } from '@/components/new-york/ui/card'
import { Textarea } from '@/components/new-york/ui/textarea'
import { Card, CardHeader, CardContent } from '@/components/new-york/ui/card'
import { Button } from '@/components/new-york/ui/button'
import { Checkbox } from '@/components/new-york/ui/checkbox'

export default function Component() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    level: '',
    price: '',
    duration: '',
    isLive: false,
    hasCertificate: false,
    content: '',
  })

  const steps = ['Course Information', 'Course Options', 'Course Content', 'Course Preview']

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string) => {
    setFormData(prev => ({ ...prev, [name]: !prev[name as keyof typeof prev] }))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Course Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter course title"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Course Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter course description"
                />
              </div>
            </div>
          </>
        )
      case 1:
        return (
          <>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Course Category</Label>
                <RadioGroup
                  onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                  value={formData.category}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="programming" id="programming" />
                    <Label htmlFor="programming">Programming</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="design" id="design" />
                    <Label htmlFor="design">Design</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="business" id="business" />
                    <Label htmlFor="business">Business</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label>Course Level</Label>
                <RadioGroup
                  onValueChange={(value) => setFormData(prev => ({ ...prev, level: value }))}
                  value={formData.level}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="beginner" id="beginner" />
                    <Label htmlFor="beginner">Beginner</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="intermediate" id="intermediate" />
                    <Label htmlFor="intermediate">Intermediate</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="advanced" id="advanced" />
                    <Label htmlFor="advanced">Advanced</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Course Price</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="Enter course price"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Course Duration (in hours)</Label>
                <Input
                  id="duration"
                  name="duration"
                  type="number"
                  value={formData.duration}
                  onChange={handleInputChange}
                  placeholder="Enter course duration"
                />
              </div>
            </div>
          </>
        )
      case 2:
        return (
          <>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="content">Course Content</Label>
                <Textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  placeholder="Enter course content or syllabus"
                  className="h-40"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="isLive"
                  checked={formData.isLive}
                  onCheckedChange={() => handleCheckboxChange('isLive')}
                />
                <Label htmlFor="isLive">This is a live course</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="hasCertificate"
                  checked={formData.hasCertificate}
                  onCheckedChange={() => handleCheckboxChange('hasCertificate')}
                />
                <Label htmlFor="hasCertificate">This course offers a certificate</Label>
              </div>
            </div>
          </>
        )
      case 3:
        return (
          <>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Course Preview</h3>
              <div>
                <p><strong>Title:</strong> {formData.title}</p>
                <p><strong>Description:</strong> {formData.description}</p>
                <p><strong>Category:</strong> {formData.category}</p>
                <p><strong>Level:</strong> {formData.level}</p>
                <p><strong>Price:</strong> ${formData.price}</p>
                <p><strong>Duration:</strong> {formData.duration} hours</p>
                <p><strong>Live Course:</strong> {formData.isLive ? 'Yes' : 'No'}</p>
                <p><strong>Certificate Offered:</strong> {formData.hasCertificate ? 'Yes' : 'No'}</p>
                <p><strong>Content:</strong> {formData.content}</p>
              </div>
            </div>
          </>
        )
      default:
        return null
    }
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Create a New Course</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {steps.map((step, index) => (
              <div
                key={step}
                className={`flex-1 text-center ${
                  index <= currentStep ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                <div className="relative">
                  <div
                    className={`w-6 h-6 mx-auto rounded-full ${
                      index <= currentStep ? 'bg-primary' : 'bg-muted'
                    } flex items-center justify-center text-white text-sm`}
                  >
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`absolute top-3 left-1/2 w-full h-0.5 ${
                        index < currentStep ? 'bg-primary' : 'bg-muted'
                      }`}
                    ></div>
                  )}
                </div>
                <div className="mt-2 text-xs sm:text-sm">{step}</div>
              </div>
            ))}
          </div>
        </div>
        {renderStepContent()}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 0}
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
        >
          {currentStep === steps.length - 1 ? 'Submit' : 'Next'} <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}