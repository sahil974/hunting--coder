import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/blogs')

        if (res.ok) {
          const data = await res.json()
          setBlogs(data)
        } else {
          throw new Error('Failed to fetch data');
        }
      }
      catch (err) {
        console.error('Error fetching data:', error);
      }

    }

    fetchdata()

  }, [])


  return (
    <>
      <style jsx>
        {
          `
          
          `
        }
      </style>
      <Head>
        <title>Hunting Coders</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <main className={`${styles.main} ${inter.className}`}>

        <h1 className='back'> <span className='mySpan'> Hunting Coders !</span>  </h1>

        <div className={styles.divContainer}>

          <div className={styles.imageWrap}>
            {/* <Image className={styles.myImg} src="/homeimg.avif" alt="opps" height={237} width={355.5} /> */}
            <img className={styles.myImg} src="/homeimg.avif" alt="opps" height={237} width={355.5} />
          </div>


          <div className={`${styles.description} ${styles.contentBox}`}>
            <p>
              The Blog by the hunting coder to the hunting coder.
            </p>

          </div>

        </div>

        <div className={styles.blogs}>

          <h2>Popular blogs</h2>

          {blogs && blogs.map((blog) => {
            return (
              <div className={styles.blogItem} key={blog.slug}>
                <Link href={`/blogpost/${blog.slug}`}>
                  <h3>{blog.title}</h3>
                </Link>
                <p>{blog.content.substr(0, 40)} ...</p>
              </div>

            )
          })}




        </div>

      </main>
    </>
  )
}
