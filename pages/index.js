import axios from "axios"
import Head from "next/head"
import Dadjoke from "../components/Dadjoke"
import styles from "../styles/Home.module.css"

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Dad Joke Generator</title>
        <meta name='description' content='Dad Joke Generator' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Dadjoke data={data} />
    </div>
  )
}

export const getServerSideProps = async () => {
  
    const config = {
      headers: {
        Accept: "application/json",
        "User-Agent": "Dad Joke Generator (https://github.com/bolg55/dad-joke-generator) https://kellenbolger.ca",
      },
    }
    const res = await axios.get("https://icanhazdadjoke.com/", config)
    const data = await res.data

    return {
      props: { data },
    }
  
}
