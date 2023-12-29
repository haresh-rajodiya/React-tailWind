"use client";
import React from "react";
import Banner from "./Banner";
import Feature from "./Feature";
import About from "./About";
import Pricing from "./Pricing";
import { image } from '../../helper'

const Home = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2x1 mx-auto mt-20">
      <Banner
        title={"Develop your skills without diligence"}
        subtitle={`A good example of a paragraph contains a topic sentence, details,
        and a conclusion. There are many different kinds of animals that
        live in China.`}
        btn1title={"Get Started"}
        btn2title={"Discount"}
        btn1press={() => {}}
        btn2press={() => {}}
        imageSrc={image.bannergirl}
      />
      <Feature />
      <About />
      <Pricing />
      <Banner
        imageSrc={image.girlsWithBallon}
        title={"Each student an share their discount code for friends"}
        subtitle={
          "A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”"
        }
        btn1title={"I have a code"}
        btn1press={() => {}}
      />
    </div>
  );
};

export default Home;
