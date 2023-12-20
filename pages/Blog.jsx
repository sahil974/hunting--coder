import React, { useEffect, useState } from 'react'
import styles from '@/styles/blog.module.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

// step 1:  collect all the file from the directory      done
// step 2:  iterate through them and display them        done


const inter = Inter({ subsets: ['latin'] })
const Blog = (props) => {

    const [blogs, setBlogs] = useState(props.blogs);

    return (
        <>
            <main className={`${styles.main} ${inter.className}`}>
                <div className={styles.container}>

                    <h2>Popular Blogs</h2>

                    {blogs && blogs.map((blog, index) => (
                        <div key={index} className={styles.blogItem}>
                            <Link href={`/blogpost/${blog.slug}`}>
                                <h3>{blog.title}</h3>
                            </Link>
                            <p>{blog.content.substr(0, 40)} ...</p>
                        </div>
                    ))}




                </div>
            </main>
        </>
    )
}

// server side rendering

export async function getServerSideProps(context) {
    let blogs
    try {
        const res = await fetch('/api/blogs')
        // const res = await fetch('http://localhost:3000/api/blogs')

        if (res.ok) {
            blogs = await res.json();
        } else {
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }


    return {
        props: { blogs }
    }
}


// static site generation
// import * as fs from 'fs'

// export async function getStaticProps(context) {
//     let blogs = []

//     try {
//         let data = await fs.promises.readdir("blogdata", "utf-8");

//         for (const fileName of data) {
//             let content = await fs.promises.readFile("blogdata/" + fileName, "utf-8");
//             blogs.push(JSON.parse(content));
//         }

//     } catch (error) {
//         console.error("Error:", error);

//     }

//     return {
//         props: { blogs }
//     }

// }

export default Blog