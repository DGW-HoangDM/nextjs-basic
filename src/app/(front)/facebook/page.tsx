'use client'
import { useRouter } from 'next/navigation';
import style from "../../styles/style.module.scss";
import Button from 'react-bootstrap/Button';

const FacebookPage = () => {
  const router = useRouter()

  return (
    <>
      <h1 className={style.red}>Facebook page</h1>
      <Button as="a" variant="primary" onClick={() => router.push('/')}>To home</Button>
    </>
  )
}

export default FacebookPage;