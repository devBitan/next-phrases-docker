'use client';

// Importa useState para manejar el estado del componente.
import { useState } from "react";

export default function Home() {
  // Estado para almacenar la frase obtenida de la API.
  const [sentence, setSentence] = useState("");

  // Función para obtener una frase de la API.
  const fetchSentence = async () => {
    try {
      // Realiza una solicitud a la API.
      const response = await fetch('/api/data');
      if (!response.ok) {
        throw new Error("Failed to fetch sentence"); // Manejo de error si la solicitud falla.
      }
      const data = await response.json(); // Convierte la respuesta en JSON.
      setSentence(data.completeSentence); // Actualiza el estado con la frase recibida.
    } catch (error) {
      console.error("Error fetching sentence:", error); // Log de errores en caso de fallo.
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      {/* Tarjeta principal con el título y botón */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          ¡ Random Phrases !
        </h1>
        <button
          className="text-lg bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={fetchSentence}
        >
          Click me
        </button>
      </div>

      {/* Tarjeta para mostrar la frase */}
      <div className="bg-white shadow-lg rounded-lg p-8 mt-6 max-w-xl w-full">
        <p className="text-xl text-gray-700">
          {sentence || "No sentence yet. Click the button!"} {/* Muestra la frase o un mensaje predeterminado */}
        </p>
      </div>
    </div>
  );
}
