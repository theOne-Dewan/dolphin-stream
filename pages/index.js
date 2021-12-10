import Head from 'next/head'
import CategoryNavbar from '../components/category-navbar'
import Header from '../components/header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dolphin Stream</title>
        <meta name="description" content="Watch the latest TV Shows, Movies and Live Sports on the fastest and most aesthetic video streaming WebApp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <CategoryNavbar/>

    </div>
  )
}
