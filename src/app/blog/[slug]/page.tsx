"use client"

import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const BlogDetailPage = ({ params }: { params: { slug: string | number } }) => {
  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/blogs/${params.slug}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );

  if (isLoading) return <div>chargement...</div>

  return (
    <>
      <h1>blog detail page {params.slug}</h1>
      <Card>
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.content}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{data.author}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Link className='card-link' href="/">Card Link</Link>
        </Card.Body>
      </Card>

    </>
  )
}

export default BlogDetailPage;