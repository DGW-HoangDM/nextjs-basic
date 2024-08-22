import Link from 'next/link';
import { useState, useEffect } from "react";

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Home page',
  description: 'This is the homepage',
}

export default function Home() {
  // const [blog, setBlog] = useState(0);
  // const fetchData = async () => {
  //   const url = "http://localhost:8000/blogs";
  //   const res = await fetch(url);
  //   const json = await res.json();
  //   setBlog(json);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <h1>This Home Page</h1>
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
