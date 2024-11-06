import React, { useState } from 'react';

const TaskManager = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (taskName && taskDescription) {
      const newTask = {
        id: tasks.length + 1,
        name: taskName,
        description: taskDescription,
      };
      setTasks([...tasks, newTask]);
      setTaskName('');
      setTaskDescription('');
    } else {
      alert('Por favor, completar ambos campos.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-lg shadow-2xl mt-10">
      <h2 className="text-4xl font-extrabold text-white text-center mb-8">
        Gestión de Tareas
      </h2>
      
      <div className="space-y-6">
        <div className="flex flex-col">
          <label className="text-white font-medium mb-2">Nombre de la tarea</label>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="px-6 py-4 rounded-lg text-lg border-2 border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300 shadow-lg"
            placeholder="Introducir nombre de la tarea"
          />
        </div>
        
        <div className="flex flex-col">
          <label className="text-white font-medium mb-2">Descripción de la tarea</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="px-6 py-4 rounded-lg text-lg border-2 border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-300 shadow-lg"
            rows="4"
            placeholder="Escribe una descripción detallada"
          ></textarea>
        </div>

        <button
          onClick={handleAddTask}
          className="w-full py-4 text-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-500 rounded-lg hover:bg-gradient-to-l transition-all duration-300 shadow-xl"
        >
          Agregar Tarea
        </button>
      </div>

      <div className="mt-12">
        <h3 className="text-3xl font-semibold text-white mb-6">Lista de Tareas</h3>
        
        {tasks.length > 0 ? (
          <div className="space-y-6">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300"
              >
                <h4 className="text-2xl font-bold text-indigo-700">{task.name}</h4>
                <p className="text-gray-600 mt-2">{task.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white text-lg">No hay tareas registradas.</p>
        )}
      </div>
    </div>
  );
};

export default TaskManager;

