import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="moon" />
        <meta name="description" content="site moon" />
      </Head>
      <div className={styles.home}>
        <h2>Home Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sit asperiores earum, rerum ducimus totam! Obcaecati est suscipit nostrum repudiandae tenetur eius, consequatur inventore quidem animi accusamus modi voluptates magnam? Excepturi minima dolorum rerum ipsam cum, aliquam ab, inventore, eos error corrupti doloribus dolor totam consectetur. Consequuntur assumenda facere aspernatur?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium corporis, explicabo nam pariatur enim ut, et numquam asperiores vitae tempore delectus recusandae maxime dolore expedita earum dicta fuga. Saepe nihil eos voluptas voluptatibus laborum eum nesciunt atque optio adipisci repudiandae ratione nam ea, cupiditate distinctio magni quasi hic, ipsa in!</p>
        <button className={styles.btn_go}>
          <Link href="/ninja">go to ninja list</Link>
        </button>

      </div>
    </>
  )
}
