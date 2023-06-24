import React from 'react'
import classes from './style.module.css'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className={classes.hero}>
        <div className={classes.images}>
            <Image width={300} height={300} src="/images/site/hero-avatar.jpg" alt='Photo shows Taras'/>
        </div>
        <h1>Hi, I&apos;m Taras</h1>
        <p>My blog about web development - especially frontend frameworks like React</p>
    </section>
  )
}

export default Hero