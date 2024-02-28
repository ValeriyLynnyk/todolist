"use client"

import React, { useState, useEffect } from "react";
import todos from "../../data/todos.json";
import RemoveTask from "./RemoveTask";

const DisplayTasks = () => {
    const [tasks, setTasks] = useState(todos.tasks);

    useEffect(() => {
        const checkForChanges = () => {
            const updatedTodos = JSON.parse(localStorage.getItem('todos'));
            if (updatedTodos && JSON.stringify(tasks) !== JSON.stringify(updatedTodos.tasks)) {
                setTasks(updatedTodos.tasks);
            }
        };

        checkForChanges();
        //! Esto es basura xd pero funciona, en realidad lo que deberia hacer es que cuando se añada una tarea, se actualice el estado y se muestre en la lista y no estar acutalizando cada segundo
        //* no me acuerdo como hacerlo, pero lo hare en el futuro, se que en vue hay una funcion watch que hace esto, pero en react no me acuerdo
        setInterval(checkForChanges, 1000); 

    }, [tasks]);

    return (
        <ul className="w-1/2 mt-8">
            {tasks.map((task, index) => (
                <li key={index} className="flex justify-between p-2 border-b border-gray-300">
                    <span>{task.description}</span>
                    <span className={`${task.completed ? 'text-green-700 font-bold' : 'text-yellow-200'} justify-self-end`}>
                        {task.completed ? 'Completado' : 'Pendiente'} 
                        <RemoveTask className="m-5"/>
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default DisplayTasks;