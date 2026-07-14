'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Hero } from '@/components/hero'
import { MessageSquare, Plus, ArrowRight } from 'lucide-react'

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
    title: '¿Cuál es el futuro de la tecnología en la industria?',
    author: 'María López',
    replies: 15,
    lastActivity: '2024-02-16',
  },
  {
    id: 2,
    title: 'Debate: IA vs. automatización tradicional',
    author: 'Juan Pérez',
    replies: 23,
    lastActivity: '2024-02-15',
  },
  {
    id: 3,
    title: 'El impacto de la computación cuántica',
    author: 'Ana García',
    replies: 8,
    lastActivity: '2024-02-14',
  },
]

export default function ForumPage() {
  const [discussions, setDiscussions] = useState(initialDiscussions)
  const [newDiscussionTitle, setNewDiscussionTitle] = useState('')
  const [isCreatingDiscussion, setIsCreatingDiscussion] = useState(false)

  const handleCreateDiscussion = () => {
    if (newDiscussionTitle.trim() !== '') {
      setDiscussions([
        {
          id: discussions.length + 1,
          title: newDiscussionTitle,
          author: 'Usuario Actual',
          replies: 0,
          lastActivity: new Date().toISOString().split('T')[0],
        },
        ...discussions,
      ])
      setNewDiscussionTitle('')
      setIsCreatingDiscussion(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Hero
        title="Foro de Discusión"
        description="Únete a las conversaciones sobre tecnología y comparte tus experiencias."
        badge="Comunidad"
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            {!isCreatingDiscussion ? (
              <Button onClick={() => setIsCreatingDiscussion(true)} className="gap-2">
                <Plus size={18} />
                Iniciar nueva discusión
              </Button>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3 p-6 bg-card rounded-xl border border-border">
                <Input
                  type="text"
                  placeholder="Título de la discusión"
                  value={newDiscussionTitle}
                  onChange={e => setNewDiscussionTitle(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleCreateDiscussion}>Crear</Button>
                <Button variant="outline" onClick={() => setIsCreatingDiscussion(false)}>
                  Cancelar
                </Button>
              </div>
            )}
          </div>

          <div className="space-y-4">
            {discussions.map(discussion => (
              <Link
                key={discussion.id}
                href={`/foro/${discussion.id}`}
                className="block p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                      {discussion.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span>Por {discussion.author}</span>
                      <span>{discussion.replies} respuestas</span>
                      <span>{discussion.lastActivity}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
