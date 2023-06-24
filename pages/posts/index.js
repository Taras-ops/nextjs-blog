import React from 'react'
import { AllPosts } from '../../components'
import { getAllPosts } from '../../lib/posts-util'
import Head from 'next/head'

const Posts = ({posts}) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta  name="description" content="A list of all programming-related tutorials and posts!"/>
      </Head>
      <AllPosts posts={posts}/>
    </>
  )
}

export function getStaticProps() {
  const allPosts = getAllPosts()

  return {
    props: {
      posts: allPosts
    },
    revalidate: 60
  }
}

export default Posts