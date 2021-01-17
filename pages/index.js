import Link from "next/link";
import Head from "next/head";
import MainLayout from "../components/mainLayout";

function Index() {
  return (
    <MainLayout title={'Home Page'}>
      
      <h1>Hello</h1>
      <p>
        <Link href="/about">About</Link>
      </p>
      <p>
        <Link href="/posts">Posts</Link>
      </p>
    </MainLayout>
  );
}

export default Index;
