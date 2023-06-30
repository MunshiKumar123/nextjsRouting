'use client'
import Link from 'next/link'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
export default function Home() {

  const router = useRouter();
  const navigate = (name) => {
    router.push(name)
  }
  return (
    <main>
      <ul>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
      <h1>Manish Kumar</h1>
      <button onClick={() => navigate("/login")}> go to page Login </button>
      <button onClick={() => navigate("/about")}> go to page About </button>
    </main>
  )
}
