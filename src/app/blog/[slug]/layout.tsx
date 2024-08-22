import React from 'react';

import type { Metadata } from 'next'
type Props = {
  params: { slug: number };
};

export const generateMetadata = async (
  props: Props
): Promise<Metadata> => {
  const { params } = props;
  // fetch data
  const product = await fetch(`http://localhost:8000/blogs/${params.slug}`).then((res) => res.json())
  return {
    title: product.title,
  };
};

const DetailBlogDetailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  )
}

export default DetailBlogDetailLayout;