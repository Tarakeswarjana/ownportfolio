"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
const profilePic = require("../../public/IMG_20220514_165208.jpg")
const closeIcon = require('../../public/close.png')
const lindinIcon = require('../../public/message.png')
const github = require('../../public/github.png')
// const resumepdf = import('../../public/')

const HeroContent = () => {
  const [showmore, setshowmore] = useState(false)
  console.log(showmore, "kko")

  return (<>
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            FullStack(MERN) Developer Portfolio
          </h1>

        </motion.div>


        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project exprience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a FullStack Software Developer with experience in Website Development
          . Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          onClick={() => {
            setshowmore(!showmore);

          }}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
      {showmore ? <motion.div
        className="fixed w-[53rem] h-[32rem] rounded-2xl m-auto top-0 bottom-0 left-0 right-0 bg-blue-900 opacity-90 z-[999]"
        initial={{ opacity: 0, scale: 0.5, y: -100 }}
        animate={{ opacity: 0.9, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.5, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        <div className="float-right m-5 cursor-pointer">   <Image
          onClick={() => {
            setshowmore(false);

          }}
          src={closeIcon}
          alt="work icons"
          height={20}
          width={20}
        /></div>
        <div className="flex m-8">


          <div className="flex gap-4 justify-center items-center relative bottom-[-225px]">
            <div className="flex gap-8">
              <a href="https://www.linkedin.com/in/tarakeswar-jana-5a3513233/" target="_blank">
                <Image
                  src={lindinIcon}
                  alt="work icons"
                  height={50}
                  width={50}
                />
              </a>
              <a href="https://github.com/Tarakeswarjana" target="_blank">
                <Image
                  src={github}
                  alt="work icons"
                  height={50}
                  width={50}
                />
              </a>
            </div>

            <Link href="/Resume-Tarakeswar Jana (7).pdf" passHref target="_blank">

              <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Download Resume
              </button>
            </Link>
          </div>
          <Image
            className="object-contain rounded-2xl"
            src={profilePic}
            alt="work icons"
            height={350}
            width={350}
          />
        </div>

      </motion.div> : null}

    </motion.div>
  </>
  );
};

export default HeroContent;
