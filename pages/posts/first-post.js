import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import img from '../../public/images/profile.jpg'
export default function firstPost() {
    return (
        <>
            <Head>
                <title>My first Post</title>
            </Head>
            <h1>First Post</h1>

            <h2>
                <Link href='/'>Back to home</Link>
            </h2>
            
           <Image 
                src={img}
                width={300}
                height={300}
                alt={'User profile image'}
                placeholder={'blur'}
                blurDataURL=''
           />
        
        </>
    )
}