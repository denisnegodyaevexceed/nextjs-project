import Link from "next/link";
import Head from 'next/head'


const MainLayout = ({ children, title =  'Next App' }) => {
  return (
    <>
    <Head>
        <title>{title} | First App Next.js</title>
    </Head>
      <nav>
        <Link href='/'><a>Home</a></Link>
        <Link href='/about'><a>About</a></Link>
        <Link href='/posts'><a>Posts</a></Link>
      </nav>
      <main>{children}</main>
      <style jsx global>{`
      nav{
          position:fixed;
          height:60px;
          left:0;
          top:0;
          right:0;
          background:darkblue;
          display:flex;
          justify-content:space-around;
          align-items:center;

      }
      nav a{
          text-decoration:none;
          color:white;
          transition:1s;

      }
      nav a:hover{
          color:yellow;
      }
      main{
          margin-top:60px;
          padding:1rem;
      }
      `}</style>
    </>
  );
};

export default MainLayout;
