import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  
  return (
    <>
      <Head>
        <title>Bored?</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-2.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Activity Generator</h1>
        <div className='activity'>
          <h2> 
            <Activity />
          </h2>
        </div>
      </main>
    </>
  )
}

function Activity() {
  const [activity, setActivity] = useState('Press button to get activity');

  const getActivity = async () => {
    const response = await fetch('http://www.boredapi.com/api/activity/');
    const data = await response.json();
    setActivity(data.activity);
  };
  
  return (
    <div className='generator'>
      <div className='display'>
        <h3>{activity}</h3>
      </div>
      <div>
        <button onClick={getActivity}>Get Activity</button>
      </div>
    </div>
  );
}