"use client"

import React, { useState } from 'react';
import todos from "../../data/todos.json";
// const fs = require('fs');

const AddTask = () => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // pushear objeto con la información del input
    //- todos.tasks.push({
    //   description: task,
    //   completed: false,
    // });
    // console.log(todos.tasks)

    // Limpiar el valor del input
    setTask('');
    //guardar cambios en el archivo todos.json

    // fs.writeFile('../../data/todos.json', JSON.stringify(todos), (err) => {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }
    //   console.log('fasil guardado');
    // });

    //guardar los cambios en el localstorage
    localStorage.setItem('todos', JSON.stringify(todos));
    
  };

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="trabajo trabajo..."
        className="p-2 border border-gray-300 rounded-lg mb-4 text-black"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 px-4 py-2 rounded-lg"
      >
        Añadir tarea
      </button>
    </form>
  );
};

export default AddTask;