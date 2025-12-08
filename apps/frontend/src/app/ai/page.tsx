'use client'
import { useRouter } from 'next/navigation.js'
import { useEffect } from 'react'
import { uuidv7 } from 'uuidv7'

/**
 * Base AI route that redirects to a new chat session with a generated UUID.
 * This ensures each chat session has a unique identifier.
 */
export default function AIPage() {
  const router = useRouter()

  useEffect(() => {
    const newId = uuidv7()
    router.replace(`/ai/${newId}`)
  }, [router])

  return (
    <div>
      <p>Redirecting to chat...</p>
    </div>
  )
}
