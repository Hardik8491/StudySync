// "use client"
// import { useState } from "react"
// import { Minus, Plus, Trash2 } from "lucide-react"
// import { Button } from "@/components/new-york/ui/button"
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/new-york/ui/card"
// import { Separator } from "@/components/new-york/ui/separator"

// import { addItem, removeItem, clearCart } from '@/redux-toolkit/features/cart/cartSlice';
// import { AppDispatch, RootState } from '@/redux-toolkit/store';
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// interface Course {
//     id: number
//     title: string
//     instructor: string
//     price: number
//     image: string
// }

// const Cart: React.FC = () => {
//     const cart = useSelector((state: RootState) => state.cart);
//     console.log(cart);

//     const dispatch = useDispatch<AppDispatch>();
//     const [courses, setCourses] = useState<Course[]>(
//         //     [
//         //     { id: 1, title: "Introduction to React", instructor: "John Doe", price: 49.99, image: "/placeholder.svg?height=100&width=100" },
//         //     { id: 2, title: "Advanced JavaScript", instructor: "Jane Smith", price: 69.99, image: "/placeholder.svg?height=100&width=100" },
//         //     { id: 3, title: "CSS Mastery", instructor: "Bob Johnson", price: 39.99, image: "/placeholder.svg?height=100&width=100" },
//         // ]
//         cart.items
//     )

//     const [quantities, setQuantities] = useState<{ [key: number]: number }>({
//         1: 1,
//         2: 1,
//         3: 1,
//     })

//     const updateQuantity = (id: number, change: number) => {
//         setQuantities(prev => ({
//             ...prev,
//             [id]: Math.max(0, (prev[id] || 0) + change),
//         }))
//     }

//     const removeCourse = (id: number) => {
//         setCourses(courses.filter(course => course.id !== id))
//         setQuantities(prev => {
//             const { [id]: _, ...rest } = prev
//             return rest
//         })
//     }

//     const total = courses.reduce((sum, course) => sum + course.price * (quantities[course.id] || 0), 0)

//     const handleAddItem = (item: { id: string; title: string; price: number }) => {
//         dispatch(addItem(item));
//     };

//     const handleRemoveItem = (id: string) => {
//         dispatch(removeItem(id));
//     };

//     const handleClearCart = () => {
//         dispatch(clearCart());
//     };

//     return (
//         <div className="container mx-auto p-4 md:p-6 lg:p-8">
//             <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                 <div className="lg:col-span-2">
//                     {courses.map(course => (
//                         <Card key={course.id} className="mb-4">
//                             <CardContent className="p-4">
//                                 <div className="flex flex-col sm:flex-row items-center gap-4">
//                                     <img src={course.image} alt={course.title} className="w-24 h-24 object-cover rounded" />
//                                     <div className="flex-grow">
//                                         <h3 className="text-lg font-semibold">{course.title}</h3>
//                                         <p className="text-sm text-gray-600">by {course.instructor}</p>
//                                         <p className="text-lg font-bold mt-2">${course.price.toFixed(2)}</p>
//                                     </div>
//                                     <div className="flex items-center gap-2">
//                                         <Button variant="outline" size="icon" onClick={() => updateQuantity(course.id, -1)}>
//                                             <Minus className="h-4 w-4" />
//                                         </Button>
//                                         <span className="w-8 text-center">{quantities[course.id] || 0}</span>
//                                         <Button variant="outline" size="icon" onClick={() => updateQuantity(course.id, 1)}>
//                                             <Plus className="h-4 w-4" />
//                                         </Button>
//                                     </div>
//                                     <Button variant="destructive" size="icon" onClick={() => removeCourse(course.id)}>
//                                         <Trash2 className="h-4 w-4" />
//                                     </Button>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     ))}
//                 </div>
//                 <div>
//                     <Card>
//                         <CardHeader>
//                             <CardTitle>Order Summary</CardTitle>
//                         </CardHeader>
//                         <CardContent>
//                             <div className="space-y-2">
//                                 {courses.map(course => (
//                                     <div key={course.id} className="flex justify-between">
//                                         <span>{course.title}</span>
//                                         <span>${(course.price * (quantities[course.id] || 0)).toFixed(2)}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                             <Separator className="my-4" />
//                             <div className="flex justify-between font-bold">
//                                 <span>Total</span>
//                                 <span>${total.toFixed(2)}</span>
//                             </div>
//                         </CardContent>
//                         <CardFooter>
//                             <Button className="w-full">Proceed to Checkout</Button>
//                         </CardFooter>
//                     </Card>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Cart;
// src/components/Cart.tsx
// src/components/Cart.tsx
"use client";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux-toolkit/store';
import { addItem, removeItem, clearCart } from '@/redux-toolkit/features/cart/cartSlice';
import { Button } from '@/components/new-york/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/new-york/ui/card';
import { Separator } from '@/components/new-york/ui/separator';
import { Minus, Plus, Trash2 } from "lucide-react";

const Cart: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state:RootState) => state.cart);
console.log(cart);

  const handleAddItem = (id: number) => {
    const item = cart.items.find((item) => item.id === id);
    if (item) {
      // dispatch(addItem({ ...item, quantity: 1 }));
    }
  };

  const handleRemoveItem = (id: number) => {
    // dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    // dispatch(clearCart());
  };

  return (
    // <div className="container mx-auto p-4 md:p-6 lg:p-8">
    //   <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
    //   <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    //     <div className="lg:col-span-2">
    //       {cart.items.length > 0 ? (
    //         cart.items.map((item) => (
    //           <Card key={item.id} className="mb-4">
    //             <CardContent className="p-4">
    //               <div className="flex flex-col sm:flex-row items-center gap-4">
    //                 <img src={`/placeholder.svg?height=100&width=100`} alt={item.title} className="w-24 h-24 object-cover rounded" />
    //                 <div className="flex-grow">
    //                   <h3 className="text-lg font-semibold">{item.title}</h3>
    //                   <p className="text-lg font-bold mt-2">${item.price.toFixed(2)}</p>
    //                 </div>
    //                 <div className="flex items-center gap-2">
    //                   <Button variant="outline" size="icon" onClick={() => handleAddItem(item.id)}>
    //                     <Plus className="h-4 w-4" />
    //                   </Button>
    //                   <span className="w-8 text-center">{item.quantity}</span>
    //                   <Button variant="outline" size="icon" onClick={() => handleRemoveItem(item.id)}>
    //                     <Minus className="h-4 w-4" />
    //                   </Button>
    //                 </div>
    //                 <Button variant="destructive" size="icon" onClick={() => handleRemoveItem(item.id)}>
    //                   <Trash2 className="h-4 w-4" />
    //                 </Button>
    //               </div>
    //             </CardContent>
    //           </Card>
    //         ))
    //       ) : (
    //         <p>Your cart is empty.</p>
    //       )}
    //     </div>
    //     <div>
    //       <Card>
    //         <CardHeader>
    //           <CardTitle>Order Summary</CardTitle>
    //         </CardHeader>
    //         <CardContent>
    //           <div className="space-y-2">
    //             {cart.items.map((item) => (
    //               <div key={item.id} className="flex justify-between">
    //                 <span>{item.title}</span>
    //                 <span>${(item.price * item.quantity).toFixed(2)}</span>
    //               </div>
    //             ))}
    //           </div>
    //           <Separator className="my-4" />
    //           <div className="flex justify-between font-bold">
    //             <span>Total</span>
    //             <span>${cart.totalAmount.toFixed(2)}</span>
    //           </div>
    //         </CardContent>
    //         <CardFooter>
    //           <Button className="w-full" onClick={handleClearCart}>
    //             Clear Cart
    //           </Button>
    //           <Button className="w-full mt-2">Proceed to Checkout</Button>
    //         </CardFooter>
    //       </Card>
    //     </div>
    //   </div>
    // </div>
    <>
    </>
  );
};

export default Cart;
