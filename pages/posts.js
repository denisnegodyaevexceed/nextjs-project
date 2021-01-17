import Head from "next/head";
import MainLayout from "../components/mainLayout";
import { useState, useEffect } from "react";
import Link from "next/link";
function Posts({ posts: serverPosts }) {
  const [posts, setPosts] = useState(serverPosts);
  useEffect(() => {
    async function load() {
      const res = await fetch("http://localhost:4200/posts");
      const json = await res.json();
      setPosts(json);
    }
    if (!serverPosts) {
      load();
    }
  }, []);
  return (
    <MainLayout title={"Posts Page"}>
      <div>
        <h1>Posts page</h1>
        <ul>
          {!posts ? (
            <MainLayout>
              <p>Loading...</p>
            </MainLayout>
          ) : (
            posts.map((item) => {
              return (
                <li key={item.id}>
                  <Link href={`/post/[id]`} as={`/post/${item.id}`}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </MainLayout>
  );
}

Posts.getInitialProps = async ({ req }) => {
  if (!req) {
    return { posts: null };
  }
  const res = await fetch("http://localhost:4200/posts");
  const posts = await res.json();
  return {
    posts,
  };
};

export default Posts;
