import { image } from "@/src/helper";
import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2x1 mx-auto mt-20">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className=" lg:w-1/3">
          <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">
            Why we are better than others
          </h3>
          <p className="text-base text-tartiary font-semibold lg:w-1/2 mb-3">
            A simple paragraph is comprised of three major components. The first
            sentence, which is often a declarative sentence, is called the
            “topic sentence.
          </p>
        </div>
        <div className="w-ful lg:w-3/4">
          <div className="grid md:grid-cols-3 sm:grid-cols-1 items-start md:gap-12 gap-8">
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 justify-center flex items-center hover:translate-y-5 transition-all duration-500">
              <div className=""> 
                <Image src={image.manWithBooks} />
                <h5 className="text-2xl font-semibold text-primary text-center px-5 mt-5 cursor-pointer">
                  Conventient study schedule
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 justify-center flex items-center hover:translate-y-5 transition-all duration-500 cursor-pointer md:mt-10">
              <div className="">
                <Image src={image.manWithBooks} />
                <h5 className="text-2xl font-semibold text-primary text-center px-5 mt-5">
                  Conventient study schedule
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 justify-center flex items-center hover:translate-y-5 transition-all duration-500 cursor-pointer">
              <div className="">
                <Image src={image.manWithBooks} />
                <h5 className="text-2xl font-semibold text-primary text-center px-5 mt-5">
                  Conventient study schedule
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feature;
