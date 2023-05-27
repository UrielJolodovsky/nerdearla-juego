import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  
   const challenge = async () =>{
    try {
    console.log('Nuevo challenge')
    const res = await fetch('/challenge').then(res => res.json())
    const data = res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={challenge}>Nuevo challenge</button>
    </>
  )
}