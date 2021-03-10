import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

const projects = () => {
    return (
        <Layout>
            <Head>
                <title>Projects</title>
            </Head>

            <Link href="https://github.com/DannChang">Github</Link>
        </Layout>
    )
}

export default projects