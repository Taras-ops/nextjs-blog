import React from 'react'
import classes from './posts-grid.module.css'
import PostItem from './post-item'

const PostsGrid = ({posts}) => {
  return (
    <ul className={classes.grid}>
      {posts.map((item) => <PostItem key={item.slug} {...item}/>)}
    </ul>
  )
}

export default PostsGrid