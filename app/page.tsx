import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to Custom Pages Demo</h1>
      <div style={{marginTop: '30px'}}>
        <Link href="/user" style={{border: '1px solid black', padding: '5px'}}>UserProfile</Link>
      </div>
      <div style={{marginTop: '30px'}}>
        <Link href="/user-reordered" style={{border: '1px solid black', padding: '5px'}}>UserProfile Reordered</Link>
      </div>
      <div style={{marginTop: '30px'}}>
        <Link href="/user-hash" style={{border: '1px solid black', padding: '5px'}}>UserProfile with Hash Router</Link>
      </div>
    </main>
  )
}
