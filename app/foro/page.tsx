"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Input } from "../../components/ui/input"
import { Hero } from "../../components/hero"

interface Discussion {
  id: number
  title: string
  author: string
  replies: number
  lastActivity: string
}

const initialDiscussions: Discussion[] = [
  {
    id: 1,
    title: "¿Cuál es el futuro de la ganadería sostenible?",
    author: "María López",
    replies: 15,
    lastActivity: "2024-02-16",
  },
  {
    id: 2,
    title: "Debate: Sistemas silvopastoriles vs. pastoreo tradicional",
    author: "Juan Pérez",
    replies: 23,
    lastActivity: "2024-02-15",
  },
  {
    id: 3,
    title: "Impacto del cambio climático en la ganadería",
    author: "Ana García",
    replies: 8,
    lastActivity: "2024-02-14",
  },
]

export default function ForumPage() {
  const [discussions, setDiscussions] = useState(initialDiscussions)
  const [newDiscussionTitle, setNewDiscussionTitle] = useState("")
  const [isCreatingDiscussion, setIsCreatingDiscussion] = useState(false)

  const handleCreateDiscussion = () => {
    if (newDiscussionTitle.trim() !== "") {
      const newDiscussion = {
        id: discussions.length + 1,
        title: newDiscussionTitle,
        author: "Usuario Actual",
        replies: 0,
        lastActivity: new Date().toISOString().split("T")[0],
      }
      setDiscussions([newDiscussion, ...discussions])
      setNewDiscussionTitle("")
      setIsCreatingDiscussion(false)
    }
  }

  return (
    <div className="bg-light-100 dark:bg-dark-900 min-h-screen">
      <Hero
        title="Foro de Discusión"
        description="Únete a las conversaciones sobre ganadería sostenible y comparte tus experiencias."
        backgroundImage={{
          light:
            "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          dark: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          {!isCreatingDiscussion ? (
            <Button onClick={() => setIsCreatingDiscussion(true)}>Iniciar nueva discusión</Button>
          ) : (
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Título de la discusión"
                value={newDiscussionTitle}
                onChange={(e) => setNewDiscussionTitle(e.target.value)}
              />
              <Button onClick={handleCreateDiscussion}>Crear</Button>
              <Button variant="outline" onClick={() => setIsCreatingDiscussion(false)}>
                Cancelar
              </Button>
            </div>
          )}
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-lg overflow-hidden">
          {discussions.map((discussion, index) => (
            <div
              key={discussion.id}
              className={`p-4 ${index !== discussions.length - 1 ? "border-b border-dark-700" : ""}`}
            >
              <Link
                href={`/foro/${discussion.id}`}
                className="text-xl font-semibold text-dark-900 dark:text-light-100 hover:text-primary dark:hover:text-primary-light"
              >
                {discussion.title}
              </Link>
              <div className="mt-2 flex justify-between text-sm text-dark-600 dark:text-light-400">
                <span>Iniciado por: {discussion.author}</span>
                <span>Respuestas: {discussion.replies}</span>
                <span>Última actividad: {discussion.lastActivity}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

