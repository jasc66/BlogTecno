"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

// Esta es una simulación de datos. En una aplicación real, estos datos vendrían de una base de datos.
const discussionData = {
  id: 1,
  title: "¿Cuál es el futuro de la realidad virtual?",
  author: "María López",
  content:
    "La realidad virtual está avanzando rápidamente. ¿Cuáles creen que serán sus aplicaciones más importantes en los próximos años?",
  date: "2023-06-14",
  replies: [
    {
      id: 1,
      author: "Carlos Ruiz",
      content:
        "Creo que la educación será uno de los campos más beneficiados. Imaginen poder 'visitar' cualquier lugar o época histórica desde el aula.",
      date: "2023-06-14",
    },
    {
      id: 2,
      author: "Ana García",
      content:
        "Estoy de acuerdo con Carlos. Además, creo que tendrá un gran impacto en la medicina, especialmente formación cirujanos.",
      date: "2023-06-15",
    },
  ],
}

export default function DiscussionPage({ params }: { params: { id: string } }) {
  const [replies, setReplies] = useState(discussionData.replies)
  const [newReply, setNewReply] = useState("")

  const handleSubmitReply = () => {
    if (newReply.trim() !== "") {
      const reply = {
        id: replies.length + 1,
        author: "Usuario Actual", // Esto debería ser reemplazado por el nombre del usuario autenticado
        content: newReply,
        date: new Date().toISOString().split("T")[0],
      }
      setReplies([...replies, reply])
      setNewReply("")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{discussionData.title}</h1>
      <div className="mb-6">
        <p className="text-gray-400">
          Iniciado por {discussionData.author} el {discussionData.date}
        </p>
        <p className="mt-4">{discussionData.content}</p>
      </div>
      <h2 className="text-2xl font-bold mb-4">Respuestas</h2>
      <div className="space-y-4">
        {replies.map((reply) => (
          <div key={reply.id} className="bg-dark-800 p-4 rounded-lg">
            <p className="text-gray-400 mb-2">
              {reply.author} - {reply.date}
            </p>
            <p>{reply.content}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Añadir respuesta</h3>
        <Textarea
          value={newReply}
          onChange={(e) => setNewReply(e.target.value)}
          placeholder="Escribe tu respuesta aquí"
          className="mb-2"
        />
        <Button onClick={handleSubmitReply}>Enviar respuesta</Button>
      </div>
    </div>
  )
}

