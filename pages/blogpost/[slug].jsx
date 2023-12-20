import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from "../../styles/blogpost.module.css"
import { Inter } from 'next/font/google'
import * as fs from 'fs'


// step 1: find the file corresponding to the slug
// step 2: populate them inside the page

const inter = Inter({ subsets: ['latin'] })
const slug = (props) => {

    const [blog, setBlog] = useState(props.blog);

    return (
        <>
            {/* console.log(slug) */}
            <main className={`${styles.main} ${inter.className}`}>
                <h1 className={styles.welcome}>Welcome to Hunting Coders !</h1>
                <div>
                    <h2 className={styles.blogTitle}>Title of the Blog : {blog.title}</h2>

                    <p>{blog.content}</p>
                </div>

            </main>

        </>
    )
}

// const router = useRouter()
// const { slug } = router.query

// server side rendering

// export async function getServerSideProps(context) {
//     const { slug } = context.query
//     let blog
//     try {
//         const res = await fetch('http://localhost:3000/api/getblog?slug=' + slug)
//         if (res.ok) {
//             blog = await res.json();
//         } else {
//             throw new Error('Failed to fetch data');
//         }
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }


//     return {
//         props: { blog }
//     }
// }

// getStaticPaths is used to all the paths which will be needed to populate the page 
export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: "how-to-learn-flask" } },
            { params: { slug: "how-to-learn-javascript" } },
            { params: { slug: "how-to-learn-nextjs" } },
        ],
        fallback: true
    }
}

export async function getStaticProps(context) {
    console.log(context)
    const { slug } = context.params

    const data = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8');
    const blog = JSON.parse(data);

    return {
        props: { blog }
    }

}

export default slug