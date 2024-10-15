"use client"
import { useState, useMemo } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/new-york/ui/avatar"
import { Button } from "@/components/new-york/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/new-york/ui/card"
import { Input } from "@/components/new-york/ui/input"
import { ScrollArea } from "@/components/new-york/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/new-york/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/new-york/ui/dialog"

import { BarChart, Bell, BookOpen, GraduationCap, LayoutDashboard, LogOut, Moon, Search, Settings, Sun, Users } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/new-york/ui/table"
const studentsData = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", course: "Computer Science", gpa: 3.8, enrollmentDate: "2021-09-01", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", course: "Mathematics", gpa: 3.5, enrollmentDate: "2020-09-01", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", course: "Physics", gpa: 3.9, enrollmentDate: "2022-09-01", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 4, name: "Diana Ross", email: "diana@example.com", course: "Chemistry", gpa: 3.7, enrollmentDate: "2021-09-01", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 5, name: "Ethan Hunt", email: "ethan@example.com", course: "Biology", gpa: 3.6, enrollmentDate: "2020-09-01", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 6, name: "Fiona Apple", email: "fiona@example.com", course: "Music", gpa: 3.9, enrollmentDate: "2022-09-01", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 7, name: "George Orwell", email: "george@example.com", course: "Literature", gpa: 3.8, enrollmentDate: "2021-09-01", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 8, name: "Hannah Montana", email: "hannah@example.com", course: "Performing Arts", gpa: 3.5, enrollmentDate: "2020-09-01", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 9, name: "Ian McKellen", email: "ian@example.com", course: "Drama", gpa: 3.9, enrollmentDate: "2022-09-01", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 10, name: "Julia Roberts", email: "julia@example.com", course: "Film Studies", gpa: 3.7, enrollmentDate: "2021-09-01", avatar: "/placeholder.svg?height=40&width=40" },
]
const Students = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [sortBy, setSortBy] = useState("name")
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedStudent, setSelectedStudent] = useState(null)
    const [isDarkMode, setIsDarkMode] = useState(false)

    const itemsPerPage = 6

    const filteredAndSortedStudents = useMemo(() => {
        return studentsData
            .filter(student =>
                student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                student.course.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .sort((a, b) => {
                if (sortBy === "name") return a.name.localeCompare(b.name)
                if (sortBy === "gpa") return b.gpa - a.gpa
                if (sortBy === "enrollmentDate") return new Date(b.enrollmentDate) - new Date(a.enrollmentDate)
                return 0
            })
    }, [searchTerm, sortBy])

    const paginatedStudents = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage
        return filteredAndSortedStudents.slice(startIndex, startIndex + itemsPerPage)
    }, [filteredAndSortedStudents, currentPage])

    const totalPages = Math.ceil(filteredAndSortedStudents.length / itemsPerPage)

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
        document.documentElement.classList.toggle("dark")
    }
    return (

        <>
            {/* Student list */}
            <main className="flex-1 overflow-y-auto p-4">
            <h2 className="text-2xl py-4 font-bold">Students List</h2>
                <ScrollArea className="h-full">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {paginatedStudents.map((student) => (
                            <Card key={student.id}>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">{student.name}</CardTitle>
                                    <Avatar className="h-9 w-9">
                                        <AvatarImage alt={`${student.name}'s avatar`} src={student.avatar} />
                                        <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-xs text-muted-foreground">{student.email}</div>
                                    <div className="text-sm font-semibold mt-1">{student.course}</div>
                                    <div className="text-xs mt-1">GPA: {student.gpa}</div>
                                    <div className="text-xs mt-1">Enrolled: {new Date(student.enrollmentDate).toLocaleDateString()}</div>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button className="w-full mt-2" variant="outline" onClick={() => setSelectedStudent(student)}>
                                                View Details
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>{selectedStudent?.name}</DialogTitle>
                                            </DialogHeader>
                                            <div className="grid gap-4 py-4">
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Avatar className="h-20 w-20 col-span-1">
                                                        <AvatarImage alt={`${selectedStudent?.name}'s avatar`} src={selectedStudent?.avatar} />
                                                        <AvatarFallback>{selectedStudent?.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                                    </Avatar>
                                                    <div className="col-span-3">
                                                        <p><strong>Email:</strong> {selectedStudent?.email}</p>
                                                        <p><strong>Course:</strong> {selectedStudent?.course}</p>
                                                        <p><strong>GPA:</strong> {selectedStudent?.gpa}</p>
                                                        <p><strong>Enrolled:</strong> {new Date(selectedStudent?.enrollmentDate).toLocaleDateString()}</p>
                                                    </div>
                                                </div>
                                                <Table>
                                                    <TableHeader>
                                                        <TableRow>
                                                            <TableHead>Subject</TableHead>
                                                            <TableHead>Grade</TableHead>
                                                        </TableRow>
                                                    </TableHeader>
                                                    <TableBody>
                                                        <TableRow>
                                                            <TableCell>Mathematics</TableCell>
                                                            <TableCell>A</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>Science</TableCell>
                                                            <TableCell>B+</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>History</TableCell>
                                                            <TableCell>A-</TableCell>
                                                        </TableRow>
                                                    </TableBody>
                                                </Table>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </ScrollArea>
            </main>

            {/* Pagination */}
            <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 border-t">
                <div>
                    Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredAndSortedStudents.length)} of {filteredAndSortedStudents.length} students
                </div>
                <div className="flex space-x-2">
                    <Button
                        variant="outline"
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </Button>
                </div>
            </div>

        </>)
}

export default Students