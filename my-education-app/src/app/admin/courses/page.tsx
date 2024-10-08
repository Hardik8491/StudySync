//@ts-nocheck
"use client"
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/new-york/ui/dropdown-menu";
import { Button } from "@/components/new-york/ui/button";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/new-york/ui/avatar";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/new-york/ui/table";
import { Badge } from "@/components/new-york/ui/badge";
import { useState } from "react";

export default function Component() {
  const [courseInfo, setCourseInfo] = useState({
    name: "",
    description: "",
    price: "",
    estimatePrice: "",
    tag: "",
    level: "",
    demoUrl: "",
    thumbnail: "",
  });
  const [benefits, setBenefits] = useState({ title: "" });
  const [prerequisites, setPrerequisites] = useState({ title: "" });
  const [courseContentData, setCourseContentData] = useState({
    videoUrl: "",
    title: "",
    description: "",
    videoSection: "Untitled Section",
    links: [{ title: "", url: "" }],
    suggestion: "",
  });
  const [courseData, setCourseData] = useState({});
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <div className="flex flex-1">
        <main className="flex-1 p-4 md:p-6">
          <div className="grid gap-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Courses Management</h1>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Add New Course
              </Link>
            </div>
            <div className="border shadow-sm rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course</TableHead>
                    <TableHead>Instructor</TableHead>
                    <TableHead>Enrollment</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <img
                          src="/placeholder.svg"
                          alt="Course Image"
                          width={64}
                          height={64}
                          className="rounded-md"
                          style={{ aspectRatio: "64/64", objectFit: "cover" }}
                        />
                        <div>
                          <div className="font-medium">
                            Introduction to Web Development
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Learn the fundamentals of web development.
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>125</TableCell>
                    <TableCell>
                      <Badge variant="success">Active</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Link
                          href="#"
                          className="inline-flex items-center justify-center rounded-md bg-primary px-2 py-1 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                          prefetch={false}
                        >
                          Edit
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <img
                          src="/placeholder.svg"
                          alt="Course Image"
                          width={64}
                          height={64}
                          className="rounded-md"
                          style={{ aspectRatio: "64/64", objectFit: "cover" }}
                        />
                        <div>
                          <div className="font-medium">Advanced JavaScript</div>
                          <div className="text-sm text-muted-foreground">
                            Dive deep into the world of JavaScript.
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>89</TableCell>
                    <TableCell>
                      <Badge variant="success">Active</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Link
                          href="#"
                          className="inline-flex items-center justify-center rounded-md bg-primary px-2 py-1 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                          prefetch={false}
                        >
                          Edit
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <img
                          src="/placeholder.svg"
                          alt="Course Image"
                          width={64}
                          height={64}
                          className="rounded-md"
                          style={{ aspectRatio: "64/64", objectFit: "cover" }}
                        />
                        <div>
                          <div className="font-medium">
                            Data Structures and Algorithms
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Mastering the foundations of computer science.
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>Michael Johnson</TableCell>
                    <TableCell>67</TableCell>
                    <TableCell>
                      <Badge variant="success">Active</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Link
                          href="#"
                          className="inline-flex items-center justify-center rounded-md bg-primary px-2 py-1 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                          prefetch={false}
                        >
                          Edit
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <img
                          src="/placeholder.svg"
                          alt="Course Image"
                          width={64}
                          height={64}
                          className="rounded-md"
                          style={{ aspectRatio: "64/64", objectFit: "cover" }}
                        />
                        <div>
                          <div className="font-medium">
                            Introduction to Machine Learning
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Explore the fundamentals of machine learning.
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>Sarah Lee</TableCell>
                    <TableCell>45</TableCell>
                    <TableCell>
                      <Badge variant="success">Active</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Link
                          href="#"
                          className="inline-flex items-center justify-center rounded-md bg-primary px-2 py-1 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                          prefetch={false}
                        >
                          Edit
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function BarChartIcon(props) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function BookIcon(props) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function ClipboardIcon(props) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function FolderIcon(props) {
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
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>
  );
}

function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MessageCircleIcon(props) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
