import {Router} from "express";
const router = Router();

import {createTodo} from "../controllers/todos";

router.post('/',createTodo)
router.get('/')
router.patch('/:id')
router.delete('/:id')

export default router