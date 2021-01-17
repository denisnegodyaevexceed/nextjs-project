import  Router  from "next/router";
import React from "react";
import MainLayout from "../../components/mainLayout";
function About() {
  const linkClickHandler = () => {
    Router.push("/");
  };
  return (
    <MainLayout title={'About Page'}>
      <h1>About page</h1>
      <button onClick={linkClickHandler}>Go to home</button>
      <button onClick={()=>Router.push('post')}>Go to posts</button>
    </MainLayout>
  );
}

export default About;
