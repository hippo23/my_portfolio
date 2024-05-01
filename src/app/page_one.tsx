"use client";
import React, { useEffect, useRef } from "react";
import { Html } from "@react-three/drei";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Camera } from "./models";
import { Stats, OrbitControls } from "@react-three/drei";

const PageOne = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <motion.div
        initial={{
          filter: "blur(5px)",
          transform: "translateY(-50%)",
          opacity: "0",
        }}
        animate={{
          transform: "translateY(0%)",
          filter: "blur(0px)",
          opacity: "1",
        }}
        transition={{
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="h-[50%] max-w-[60%] flex flex-col items-center justify-center"
      >
        <p className="text-white text-3xl">
          Hello there! I&apos;m Simon, a college student from the Philippines. I
          study Computer Science, but can also be considered a hopeless
          creative.
        </p>
        <button className="inline-flex mt-10 self-start w-fit h-fit text-2xl rounded-md bg-blue-200 bg-inherit text-white underline items-center justify-around">
          <svg
            className="mr-2 rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
          Learn More
        </button>
      </motion.div>
    </div>
  );
};

const PageTwo = () => {
  const camera = useRef();
  return (
    <div className="overflow-hidden grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 h-[70vh] bg-white w-full">
      <div className="overflow-hidden bg-inherit w-full h-full col-span-1 row-span-2">
        <Canvas
          shadows
          className="bg-inherit"
          camera={{
            position: [-1, 3, 8.5],
            zoom: 0.8,
          }}
        >
          <Html as="div" position={[-2, 2, 0]} center distanceFactor={10}>
            <motion.div className="lg:hidden visible bg-slate-200 p-5 rounded-md bg-opacity-60">
              <h1 className="w-[400px] font-bold text-3xl pb-3">
                The Drive to <span className="italic">Create</span>
              </h1>
              <p className="text-2xl">
                I specialise in algorithms, but also have a passion for UI
                design that stems back to my artistic roots.
              </p>
            </motion.div>
          </Html>
          <ambientLight color="white" intensity={0.3} />
          <hemisphereLight intensity={0.6} castShadow />
          <directionalLight
            position={[5, 15, 10]}
            intensity={1.2}
            castShadow
            shadow-radius={100}
            shadow-mapSize-height={4096}
            shadow-mapSize-width={4096}
          />
          <Camera scale={0.0005} position-y={-2} />
          <OrbitControls autoRotate />
        </Canvas>
      </div>
      <div className="hidden lg:visible lg:flex justify-center items-center bg-inherit w-full h-full col-span-1 pb-10">
        <motion.div
          initial={{
            transform: "translateX(100%)",
            filter: "blur(5px)",
            opacity: "0",
          }}
          whileInView={{
            transform: "translateX(0%)",
            filter: "blur(0px)",
            opacity: "1",
          }}
          transition={{
            delay: 0.25,
          }}
          className="w-[70%]"
        >
          <h1 className="font-bold text-3xl pb-3">
            The Drive to <span className="italic">Create</span>
          </h1>
          <p className="text-2xl">
            I specialise in algorithms, but also have a passion for UI design
            that stems back to my artistic roots.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const PageThree = () => {
  return (
    <div className="flex items-center justify-center w-full h-[150vh] bg-slate-100">
      <div className="h-[80%] w-[70%] gap-1 grid grid-cols-1 grid-rows-3">
        <div className="m-2 transition-all hover:m-0 hover:ease-in-out group z-10 bg-cover bg-[url('/photography.jpg')] bg-center row-span-1 rounded-md">
          <div className=" p-7 transition-all rounded-md flex flex-col h-full w-full hover:backdrop-blur-sm ease-in-out hover:backdrop-brightness-50">
            <h1 className="invisible transition ease-in-out translate-x-[-100%] group-hover:translate-x-[0%] blur-sm group-hover:blur-none group-hover:visible text-white font-bold text-2xl lg:text-3xl pb-3">
              My <span className="italic">Photography</span>
            </h1>
            <hr className="h-px my-4 lg:my-8 bg-gray-400 border-0 w-0 transition-all ease-in-out hover:ease-in-out group-hover:w-full" />
            <p className="translate-y-[10vh] opacity-0 text-white group-hover:opacity-100 filter blur-[5px] group-hover:translate-y-[0%] group-hover:blur-none transition-all ease-in-out text-md lg:text-xl">
              I do photography part-time, and I&apos;ve taken stills and
              cinematic videos of the various places I have bene lucky enough to
              visit over the years. It&apos;s one of my most valuable outputs,
              and you can see the collection of my works here.
            </p>
            <button className="translate-y-[10vh] opacity-0 filter blur-[5px] transition-all ease-in-out hover:ease-in-out group-hover:opacity-100 group-hover:translate-y-[0%] group-hover:blur-none mt-auto h-[10px] w-[130px] flex items-center justify-center justify-self-end font-bold rounded-md bg-white p-5 text-black text-md">
              Learn More
            </button>
          </div>
        </div>
        <div className="m-2 transition-all hover:m-0 hover:ease-in-out group z-10 bg-cover bg-[url('/photography.jpg')] bg-center row-span-1 rounded-md">
          <div className=" p-7 transition-all rounded-md flex flex-col h-full w-full hover:backdrop-blur-sm ease-in-out hover:backdrop-brightness-50">
            <h1 className="invisible transition ease-in-out translate-x-[-100%] group-hover:translate-x-[0%] blur-sm group-hover:blur-none group-hover:visible text-white font-bold text-2xl lg:text-3xl pb-3">
              My <span className="italic">Projects</span>
            </h1>
            <hr className="h-px my-4 lg:my-8 bg-gray-400 border-0 w-0 transition-all ease-in-out hover:ease-in-out group-hover:w-full" />
            <p className="translate-y-[10vh] opacity-0 text-white group-hover:opacity-100 filter blur-[5px] group-hover:translate-y-[0%] group-hover:blur-none transition-all ease-in-out text-md lg:text-xl">
              Since my senior year in highschool, I&apos;ve made various coding
              projects for both the front-end and back-end, studying algorithms
              for my college curriculum as well as other branches of coding at
              my own leisure.
            </p>
            <button className="translate-y-[10vh] opacity-0 filter blur-[5px] transition-all ease-in-out hover:ease-in-out group-hover:opacity-100 group-hover:translate-y-[0%] group-hover:blur-none mt-auto h-[10px] w-[130px] flex items-center justify-center justify-self-end font-bold rounded-md bg-white p-5 text-black text-md">
              Learn More
            </button>
          </div>
        </div>
        <div className="m-2 transition-all hover:m-0 hover:ease-in-out group z-10 bg-cover bg-[url('/photography.jpg')] bg-center row-span-1 rounded-md">
          <div className=" p-7 transition-all rounded-md flex flex-col h-full w-full hover:backdrop-blur-sm ease-in-out hover:backdrop-brightness-50">
            <h1 className="invisible transition ease-in-out translate-x-[-100%] group-hover:translate-x-[0%] blur-sm group-hover:blur-none group-hover:visible text-white font-bold text-2xl lg:text-3xl pb-3">
              My <span className="italic">Writing</span>
            </h1>
            <hr className="h-px my-4 lg:my-8 bg-gray-400 border-0 w-0 transition-all ease-in-out hover:ease-in-out group-hover:w-full" />
            <p className="translate-y-[10vh] opacity-0 text-white group-hover:opacity-100 filter blur-[5px] group-hover:translate-y-[0%] group-hover:blur-none transition-all ease-in-out text-md lg:text-xl">
              I write recreationally, dabbling in all sorts of literary fiction
              from high-fantasy to low-brow-you-know-what. Here you will find a
              catalogue of the books I have read, am reading, and plan to read,
              as well as my various blogs and blurps about life in all its
              sullen glory.
            </p>
            <button className="translate-y-[10vh] opacity-0 filter blur-[5px] transition-all ease-in-out hover:ease-in-out group-hover:opacity-100 group-hover:translate-y-[0%] group-hover:blur-none mt-auto h-[10px] w-[130px] flex items-center justify-center justify-self-end font-bold rounded-md bg-white p-5 text-black text-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PageOne, PageTwo, PageThree };
