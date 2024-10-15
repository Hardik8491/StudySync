import React from 'react'
import { Button } from "@/components/new-york/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/new-york/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/new-york/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/new-york/ui/avatar"
import { Progress } from "@/components/new-york/ui/progress"
import { Star, MessageSquare } from 'lucide-react'

export default function CoursePage() {
  // Mock data
  const course = {
    title: "Advanced React Development",
    progress: 35,
    chapters: [
      { id: 1, title: "Introduction to Advanced React Concepts" },
      { id: 2, title: "State Management with Redux" },
      { id: 3, title: "React Hooks in Depth" },
      { id: 4, title: "Performance Optimization" },
      { id: 5, title: "Server-Side Rendering" },
    ],
    currentChapter: {
      title: "State Management with Redux",
      topics: ["Redux Basics", "Actions and Reducers", "Redux Middleware", "Redux Toolkit"],
      keyPoints: [
        "Understand the Redux flow",
        "Implement actions and reducers",
        "Use middleware for side effects",
        "Simplify Redux with Redux Toolkit",
      ],
    },
    reviews: [
      { id: 1, user: "Alice", rating: 5, comment: "Excellent course! Very in-depth." },
      { id: 2, user: "Bob", rating: 4, comment: "Great content, but could use more examples." },
    ],
    comments: [
      { id: 1, user: "Charlie", comment: "How does this compare to MobX?" },
      { id: 2, user: "David", comment: "The Redux section was particularly helpful!" },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <Button>Enroll Now</Button>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="mb-8">
            <CardContent className="p-0">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="Course video placeholder"
                className="w-full h-[400px] object-cover"
              />
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{course.currentChapter.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="topics">
                <TabsList>
                  <TabsTrigger value="topics">Topics</TabsTrigger>
                  <TabsTrigger value="keyPoints">Key Points</TabsTrigger>
                </TabsList>
                <TabsContent value="topics">
                  <ul className="list-disc pl-5">
                    {course.currentChapter.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="keyPoints">
                  <ul className="list-disc pl-5">
                    {course.currentChapter.keyPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Continue Learning</Button>
            </CardFooter>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              {course.reviews.map((review) => (
                <div key={review.id} className="mb-4">
                  <div className="flex items-center mb-2">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarFallback>{review.user[0]}</AvatarFallback>
                    </Avatar>
                    <span className="font-semibold">{review.user}</span>
                    <div className="ml-auto flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p>{review.comment}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Comments</CardTitle>
            </CardHeader>
            <CardContent>
              {course.comments.map((comment) => (
                <div key={comment.id} className="mb-4">
                  <div className="flex items-center mb-2">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarFallback>{comment.user[0]}</AvatarFallback>
                    </Avatar>
                    <span className="font-semibold">{comment.user}</span>
                  </div>
                  <p>{comment.comment}</p>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <div className="flex w-full items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>Y</AvatarFallback>
                </Avatar>
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button size="icon">
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Course Progress</CardTitle>
              <CardDescription>{course.progress}% Complete</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={course.progress} className="w-full" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Chapters</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {course.chapters.map((chapter) => (
                  <li key={chapter.id} className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                      {chapter.id}
                    </div>
                    <span>{chapter.title}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}