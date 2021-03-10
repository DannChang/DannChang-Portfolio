import Head from 'next/head'
import Image from 'next/image'
import ArticleList from '../components/ArticleList'
import Layout from '../components/Layout'


export default function Home({ articles }) {
  return (
    <Layout>
      <Head>
        <title>Dan Chang Portfolio</title>
        <meta name='keywords' content='Creative Developer, UX Engineer, front end developer, user experience developer'/>
      </Head>

      {/* <ArticleList articles={articles}/> */}
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}