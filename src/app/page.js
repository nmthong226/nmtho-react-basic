import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Hello World. Nmthong's getting started with Web!</h1>
      </div>
    </main>
  )
}