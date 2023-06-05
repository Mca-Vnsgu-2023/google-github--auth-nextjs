import Image from 'next/image'
import styles from './page.module.css'
import Login from './Login'

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{ width: "500px", margin: "0 auto", paddingTop: "30px" }}>
        <div className="card">
          <div className="card-body ">
            <Login />
          </div>
        </div>
      </div>

    </main>
  )
}
