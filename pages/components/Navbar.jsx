import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <>
      <nav className={styles.mainNav}>
        <ul>
          <li>
            <Link href="/">
              <p>Home</p>
            </Link>
          </li>

          <li>
            <Link href="/About">
              <p>About</p>
            </Link>
          </li>

          <li>
            <Link href="/Blog">
              <p>Blogs</p>
            </Link>
          </li>

          <li>
            <Link href="/Contact">
              <p>Contact</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar