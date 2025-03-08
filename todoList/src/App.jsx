import React, { useState } from 'react'
import "./App.css"
import CreateTodoModal from './CreateTodoModal'

export default function App() {
  const [createModal , setCreateModal] = useState (false)
  const [editModal , setEditModal] = useState (false)

  const [selectedTodo , setSelectedTodo] = useState (null)

}
