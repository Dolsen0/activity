import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
//import Button from './api/components/Button'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const  [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
    console.log(count)
  }
  return (
    <>
      <Head>
        <title>Bored?</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-2.ico" />
       
      </Head>
      <main className={styles.main}>
        <div>
          <h1>          Looking For something to do?
          </h1>
          </div>
          <div className='activity'>
            <h2> 
              <Activity />
            </h2>
          </div>
      </main>
    </>
  )
}


function Activity(){
  const [activity, setActivity] = useState('')

  const getActivity = async () => {
    const response = await fetch('http://www.boredapi.com/api/activity/')
    const data = await response.json()
    setActivity(data.activity)
  }
  return (
    <div>
      <h3>{activity}</h3>
      <button onClick={getActivity}>Get Activity</button>
    </div>
  )
}
