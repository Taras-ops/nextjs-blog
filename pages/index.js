import Head from 'next/head'
import { Hero, FeaturedPosts } from '../components'
import { getFeaturedPosts } from '../lib/posts-util'


export default function Home({posts}) {
  return (
    <>
      <Head>
        <title>Taras&apos; Blog</title>
        <meta name="description" content='I post about programmin and web development.'/>
      </Head>
      <Hero />
      <FeaturedPosts posts={posts}/>
    </>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 60
  }
}