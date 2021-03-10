import Head from 'next/head'
import Link from 'next/link'

const about = () => {
    return (
        <div>
            <Head>
                <title>About Me</title>
            </Head>
           <h1>About Me</h1>
           <p>
               Passionate about merging Music and Technology together.
           </p> 
           <Link href={`https://github.com/dannchang`}><a>Github</a></Link>
        </div>
    )
}

export default about
