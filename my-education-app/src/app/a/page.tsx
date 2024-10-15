"use client"
import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux-toolkit/store';
import { addItem } from '@/redux-toolkit/features/cart/cartSlice';
import { Button } from '@/components/new-york/ui/button';


interface Course {
  id: number;
  title: string;
  instructor: string;
  price: number;
  image: string;
}

const course={ id: 1, title: "Introduction to React", instructor: "John Doe", price: 49.99, image: "/placeholder.svg?height=100&width=100" };
const CourseCard= ()=> {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    console.log("is work",course)
    // Dispatch the addItem action with the course details and a default quantity of 1
    dispatch(addItem({course }));
  };

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded" />
      <h3 className="text-xl font-semibold mt-2">{course.title}</h3>
      <p className="text-gray-600">{course.instructor}</p>
      <p className="text-lg font-bold mt-2">${course.price.toFixed(2)}</p>
      <Button className="mt-4 w-full" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default CourseCard;
