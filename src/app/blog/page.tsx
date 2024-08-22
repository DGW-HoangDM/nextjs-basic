"use client"

import ComponentTable from "@/components/ComponentTable";
import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const BlogPage = () => {
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );

  if (isLoading) return <div>chargement...</div>
  
  return(
    <>
      <ComponentTable blogs={data?.sort((a: any, b: any) => b.id - a.id)} />
    </>
  )
}

export default BlogPage;