'use client'
import Link from 'next/link';
import ComponentTable from "../components/ComponentTable";
import { useState, useEffect } from "react";

export default function Home() {
  const [blog, setBlog] = useState(0);
  const fetchData = async () => {
    const url = "http://localhost:8000/blogs";
    const res = await fetch(url);
    const json = await res.json();
    setBlog(json);
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(blog)
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
      <ComponentTable />
    </>
  )
}
