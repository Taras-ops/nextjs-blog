import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classes from './post-item.module.css'

const PostItem = ({title, slug, image, excerpt, date}) => {


    const ImagePath = `/images/posts/${image}`

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })


  return (
    <li className={classes.post}>
        <Link href={`/posts/${slug}`}>
            <a>
                <div className={classes.image}>
                    <Image src={ImagePath} width={500} height={300} alt={title} layout='responsive'/>
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p>{excerpt}</p>
                </div>
            </a>
        </Link>
    </li>
  )
}

export default PostItem