import Head from 'next/head'
import CategoryNavbar from '../components/category-navbar'
import Content from '../components/content'
import Header from '../components/header'
import requests from '../utils/requests'

export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Dolphin Stream</title>
        <meta name="description" content="Watch the latest TV Shows, Movies and Live Sports on the fastest and most aesthetic video streaming WebApp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <CategoryNavbar/>
      <Content results={results}/>

    </div>
  );
};

export async function getServerSideProps(context){
  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url}` || requests.fetchTrending.url
    ).then((res) => res.json());

  return {
    props: {
      results: request.results
    }
  };
};
