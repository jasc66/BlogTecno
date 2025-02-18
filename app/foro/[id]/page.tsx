"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface Reply {
  id: number
  author: string
  content: string
  date: string
}

interface Discussion {
  id: number
  title: string
  author: string
  content: string
  date: string
  replies: Reply[]
}

// Esta es una simulación de datos. En una aplicación real, estos datos vendrían de una base de datos.
const discussionData: Discussion = {
  id: 1,
  title: "¿Cuál es el futuro de la ganadería sostenible?",
  author: "María López",
  content:
    "La ganadería sostenible está evolucionando rápidamente. ¿Cuáles creen que serán las prácticas más importantes en los próximos años?",
  date: "2024-02-16",
  replies: [
    {
      id: 1,
      author: "Carlos Ruiz",
      content:
        "Los sistemas silvopastoriles serán fundamentales. La integración de árboles y pasturas no solo mejora el bienestar animal sino también la productividad del suelo.",
      date: "2024-02-16",
    },
    {
      id: 2,
      author: "Ana García",
      content:
        "Coincido con Carlos. Además, creo que veremos un mayor énfasis en la medición y reducción de la huella de carbono en la ganadería.",
      date: "2024-02-16",
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
        author: "Usuario Actual",
        content: newReply,
        date: new Date().toISOString().split("T")[0],
      }
      setReplies([...replies, reply])
      setNewReply("")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-dark-900 dark:text-light-100">{discussionData.title}</h1>
      <div className="mb-6">
        <p className="text-dark-600 dark:text-light-400">
          Iniciado por {discussionData.author} el {discussionData.date}
        </p>
        <p className="mt-4 text-dark-900 dark:text-light-100">{discussionData.content}</p>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-dark-900 dark:text-light-100">Respuestas</h2>
      <div className="space-y-4">
        {replies.map((reply) => (
          <div key={reply.id} className="bg-white dark:bg-dark-800 p-4 rounded-lg">
            <p className="text-dark-600 dark:text-light-400 mb-2">
              {reply.author} - {reply.date}
            </p>
            <p className="text-dark-900 dark:text-light-100">{reply.content}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2 text-dark-900 dark:text-light-100">Añadir respuesta</h3>
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

