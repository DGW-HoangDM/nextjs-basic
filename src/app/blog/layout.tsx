import React from 'react';

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Blog page',
  description: 'This is the Blog page',
}

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  )
}

export default BlogLayout;