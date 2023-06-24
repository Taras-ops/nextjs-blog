import React from 'react'
import { ContactForm } from '../components'
import Head from 'next/head'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content='Send me your message.'/>
      </Head>
      <ContactForm />
    </>
  )
}

export default Contact