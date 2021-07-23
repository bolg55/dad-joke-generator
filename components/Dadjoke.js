import Image from "next/image"
import { useRouter } from "next/router"
import styles from "../styles/Home.module.css"

const Dadjoke = ({ data }) => {
  const router = useRouter()
  const handleClick = () => {
    router.replace(router.asPath)
  }
  return (
    <div className={styles.container}>
      <div className={styles.jokeBox}>
        <div className={styles.jokeContainer}>
          <h1>Dad Joke Generator</h1>
          <div>
            <h2>{data.joke}</h2>
          </div>
          <div className={styles.jokeBtn}>
            <button className={styles.btn} onClick={handleClick}>
              New Joke
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dadjoke
