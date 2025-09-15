import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function HomePage() {
  const docsIndex = '/intro'
  const router = useRouter()

  useEffect(() => {
    router.replace(docsIndex)
  }, [router])

  return null
}
