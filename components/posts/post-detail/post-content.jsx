import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import classes from './post-content.module.css'
import PostHeader from './post-header'


const PostContent = ({ post }) => {
  const ImagePath = `/images/posts/${post?.image}`

  const customComponents = {
    img(image) {
      return (
        <Image
          src={`/images/posts/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      )
    },
    code(code) {
      const { className, children } = code
      const language = className.split('-')[1]
      return (
        <SyntaxHighlighter
          language={language}
        >{children}</SyntaxHighlighter>
      )
    },
  }

  return (
    <article className={classes.content}>
      <PostHeader title={post?.title} image={ImagePath} />
      <ReactMarkdown components={customComponents}>{post.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent