//import Image from 'next/image'
//import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>This page Top</h1>
      <ul>
        <li>
          <Link href="/youtobe">Youtobe</Link>
        </li>
        <li>
          <Link href="/facebook">Facebook</Link>
        </li>
        <li>
          <Link href="/tiktok">Tiktok</Link>
        </li>
      </ul>
    </>
  )
}
