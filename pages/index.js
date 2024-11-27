import { getPostData } from '../lib/posts';
import Head from 'next/head';

export async function getStaticProps(){
  const postData= await getPostData();
  return{
    props:{
      postData,
    },
  };
}
export default function Home({postData}){
  const { data, content}=postData;
  return(
    <>
    <Head>
      <title>My Static Site</title>
      <meta name = "description" content="This is a sample static site."/>
      <meta property = "og:title" content="My Static Site"/>
      <meta property = "og:description" content="This is a sample static site using Next.js"/>
    </Head>
    <div>
      <h1>{postData.data.title}</h1>
      <h1>{postData.data.data}</h1>
      <h1>{postData.data.content}</h1>
      <div dangerouslySetInnerHTML={{__html: content}}/>
    </div>
    </>
  )
}
