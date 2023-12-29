"use client";
import React, { useState } from "react";
import { icons } from "@/src/helper";
import Image from "next/image";

const Pricing = () => {
  const [isYearly, setYearly] = useState(false);

  const dummydata = [
    {
      name: "Start",
      monthlyPrice: 5,
      yearlyPrice: 50,
      discrption:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      green: icons.greenDot,
    },
    {
      name: "Advance",
      monthlyPrice: 8,
      yearlyPrice: 85,
      discrption:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      green: icons.greenDot,
    },
    {
      name: "Premium",
      monthlyPrice: 9,
      yearlyPrice: 100,
      discrption:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      green: icons.greenDot,
    },
  ];

  return (
    <div className="md:px-14 p-4 mx-auto py-10 flex flex-col items-center">
      <div className="text-center">
        <h2 className="text-primary md:text-5xl text-3xl mb-5">
          Here are all our plans
        </h2>
        <p className=" text-tartiary px-4  font-semibold">
          A simple paragraph is comprised of three major components. The which
          is often a declarative sentence.
        </p>
      </div>

      {/* toggle */}
      <div className="mt-16 mb-10">
        <label
          htmlFor="toggle"
          className="font-semibold inline-flex cursor-pointer text-primary"
        >
          <span className="mr-8 text-2xl">Monthly</span>
          <div className="w-16 h-8 bg-secondary rounded-full p-1 items-center justify-center transition duration-150 ease-in-out">
            <div
              className={`w-7 h-6 rounded-full transition duration-150 ease-in-out ${
                isYearly ? "bg-gray-100 ml-7" : "bg-gray-100"
              } `}
            ></div>
          </div>
          <span className="text-2xl ml-8">Yearly</span>
        </label>
        <input
          type="checkbox"
          id="toggle"
          className="hidden"
          checked={isYearly}
          onChange={() => {
            setYearly(!isYearly);
          }}
        />
      </div>

      {/**/}
      <div className="space-x-6 grid sm:grid-cols-2 lg:grid-cols-3 md:w-11/12 mx-auto ">
        {dummydata?.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[rgba(255, 255, 255, 0.04)] md:my-5 my-10 rounded-full shadow-3xl py-14 px-10 justify-center flex flex-col items-center hover:translate-y-5 transition-all duration-500"
            >
              <h3 className="text-3xl font-bold text-center text-primary">
                {item?.name}
              </h3>
              <p className="text-tartiary text-center my-5">
                {item?.discrption}
              </p>
              <p className="mt-5 text-ellipsis text-secondary text-4xl font-bold">
                {isYearly ? `$${item?.yearlyPrice}` : `$${item?.monthlyPrice}`}
                <span className="text-base text-tartiary font-medium">
                  /{isYearly ? "year" : "month"}
                </span>
              </p>
              <ul className="mt-4 space-y-2 px-4">
                <li className="flex gap-3 items-center">
                  <Image src={item?.green} className="w-5" /> Videos of Lessons
                </li>
                <li className="flex gap-3 items-center">
                  <Image src={item?.green} className="w-5" /> Homework check
                </li>
                <li className="flex gap-3 items-center">
                  <Image src={item?.green} className="w-5" /> Additional
                  practical task
                </li>
                <li className="flex gap-3 items-center">
                  <Image src={item?.green} className="w-5" /> Monthly
                  conferences
                </li>
                <li className="flex gap-3 items-center">
                  <Image src={item?.green} className="w-5" /> Personal advice
                  from teachers
                </li>
              </ul>
              <div className="w-full mx-auto mt-8 flex items-center justify-center">
                <button className="bg-secondary mt-5 font-semibold text-white px-4 py-2 rounded-xl transition-all duration-400 hover:bg-primary">
                  Get Started
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
