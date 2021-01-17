import {useState,useEffect} from 'react';
import { useRouter } from "next/router";
import MainLayout from "../../components/mainLayout";
import Router from 'next/router';

function Post({post:serverPost}) {
    const [post,setPost] = useState(serverPost)
    const router = useRouter();
    useEffect(()=>{
        async function load(){
            const res = await fetch(`http://localhost:4200/posts/${router.query.id}`);
            const data = await res.json(); 
            setPost(data);
        }
        if(!serverPost){
            load()
        }
    },[])
    if (!post){
        return(
            <MainLayout>
                <p>
                    Loading...
                </p>
            </MainLayout>
        )
    }
    const linkHandlerClick =()=>{
        Router.push("/posts");

    }
  return (
    <MainLayout>
      <h3>{post.title}</h3>
      <hr/>
      <p>{post.body}</p>
      <button onClick={linkHandlerClick}>Back to all posts</button>
    </MainLayout>
  );
}

export default Post;

Post.getInitialProps = async (query,req) =>{
    if(!req){
        return {post:null}
    }
    const res = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await res.json();
  return {
    post,
  };
}