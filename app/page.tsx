'use client';

import Link from 'next/link'
import styles from './page.module.css'
import { OrganizationSwitcher } from '@clerk/clerk-react'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to Custom Pages Demo</h1>
      <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', marginTop: '100px'}}>
        <div>
          <h2>UserProfile</h2>
          <div style={{marginTop: '50px'}}>
            <Link href="/user" style={{border: '1px solid black', padding: '5px'}}>UserProfile</Link>
          </div>
          <div style={{marginTop: '30px'}}>
            <Link href="/user-reordered" style={{border: '1px solid black', padding: '5px'}}>UserProfile Reordered</Link>
          </div>
          <div style={{marginTop: '30px'}}>
            <Link href="/user-hash" style={{border: '1px solid black', padding: '5px'}}>UserProfile with Hash Router</Link>
          </div>
          <div style={{marginTop: '30px'}}>
            <Link href="/user-hash-reordered" style={{border: '1px solid black', padding: '5px'}}>UserProfile Reordered with Hash Router</Link>
          </div>
        </div>
        <div style={{textAlign: 'right'}}>
          <h2>OrganizationProfile</h2>
          <div style={{marginTop: '50px'}}>
            <Link href="/organization" style={{border: '1px solid black', padding: '5px'}}>OrganizationProfile</Link>
          </div>
          <div style={{marginTop: '30px'}}>
            <Link href="/organization-reordered" style={{border: '1px solid black', padding: '5px'}}>OrganizationProfile Reordered</Link>
          </div>
          <div style={{marginTop: '30px'}}>
            <Link href="/organization-hash" style={{border: '1px solid black', padding: '5px'}}>OrganizationProfile with Hash Router</Link>
          </div>
          <div style={{marginTop: '30px'}}>
            <Link href="/organization-hash-reordered" style={{border: '1px solid black', padding: '5px'}}>OrganizationProfile Reordered with Hash Router</Link>
          </div>
        </div>
      </div>
      <div style={{marginTop: '100px'}}>
        <div><OrganizationSwitcher /></div>
      </div>
    </main>
  )
}
