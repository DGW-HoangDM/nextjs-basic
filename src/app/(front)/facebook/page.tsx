'use client'
import { useRouter } from 'next/navigation';

const FacebookPage = () => {
  const router = useRouter()

  return (
    <>
      <h1>Facebook page</h1>
      <button type="button" onClick={() => router.push('/')}>
        Dashboard
      </button>
    </>
  )
}

export default FacebookPage;