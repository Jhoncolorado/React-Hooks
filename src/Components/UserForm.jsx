import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    usuario: '',
    correo: '',
    telefono: '',
    id: ''
  });

  const [users, setUsers] = useState([]);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userExists = users.some(
      (user) => user.id === formData.id || user.correo === formData.correo
    );

    if (userExists) {
      alert('Este usuario ya está registrado.');
    } else {
      setUsers([...users, formData]);
      alert('Usuario registrado exitosamente.');
      setFormData({ nombre: '', usuario: '', correo: '', telefono: '', id: '' });
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Registro de Usuario</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Usuario</label>
          <input
            type="text"
            name="usuario"
            value={formData.usuario}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Correo</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Teléfono</label>
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">ID</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Registrar Usuario
        </button>
      </form>
    </div>
  );
};

export default UserForm;
