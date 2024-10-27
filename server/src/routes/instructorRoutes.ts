// instructorRoutes.ts

import { Router } from 'express';
import { createInstructor, getInstructorById, updateInstructor, deleteInstructor } from '../controllers/instructor.controller';


const InstructorRouter = Router();

// POST /api/instructors - Create a new instructor
InstructorRouter.post('/', createInstructor);

// GET /api/instructors/:id - Get instructor by ID
InstructorRouter.get('/:id', getInstructorById);

// PUT /api/instructors/:id - Update instructor details
InstructorRouter.put('/:id', updateInstructor);

// DELETE /api/instructors/:id - Delete an instructor by ID
InstructorRouter.delete('/:id', deleteInstructor);

export default InstructorRouter;
