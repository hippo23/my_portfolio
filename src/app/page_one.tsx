"use client";
import React, { useEffect, useRef } from "react";
import { Html } from "@react-three/drei";
import { motion, useScroll, useInView } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import "@react-three/fiber";
import { Camera } from "./models";
import { Stats, OrbitControls } from "@react-three/drei";
import { easeInOut } from "framer-motion/dom";

const NavBar = () => {
  return (
    <div className="justify-end flex flex-row items-center sticky top-0 w-full h-[7vh] z-10 bg-opacity-0">
      <div className="w-[40%] flex flex-row justify-around items-center">
        <button className="text-white w-[80px] py-2 h-fit bg-black rounded-md hover:bg-slate-700 transition-all ease-in-out hover:ease-in-out">
          <h2>About</h2>
        </button>
        <h2>Works</h2>
        <h2>Contact</h2>
      </div>
    </div>
  );
};

const PageOne = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] w-full">
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
        <p className="text-black text-3xl mb-10 mr-10">
          Hello there! I&apos;m Simon, a college student from the Philippines. I
          study Computer Science, but can also be considered a hopeless
          creative.
        </p>
        <button className="inline-flex mt-10 self-start w-fit h-fit text-2xl rounded-md bg-blue-200 bg-inherit text-black underline items-center justify-around">
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
  return (
    <div className="overflow-hidden grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 h-[50vh] lg:h-[70vh] bg-white w-full">
      <div className="overflow-hidden bg-inherit w-full h-full col-span-1 row-span-2">
        <Canvas
          shadows
          className="bg-inherit"
          camera={{
            position: [-1, 3, 8.5],
          }}
        >
          <Html as="div" position={[-2, 2, 0]} center distanceFactor={10}>
            <motion.div className="lg:hidden visible bg-slate-200 p-5 rounded-md bg-opacity-60">
              <h1 className="w-[400px] font-bold text-6xl pb-3">
                The Drive to <span className="italic text-6xl">Create</span>
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
          <Camera position-y={-2} scale={0.0005} />
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
          viewport={{ once: true }}
          className="w-[70%]"
        >
          <h1 className="font-bold text-8xl pb-3">
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
  const timeline1 = useRef<SVGLineElement>(null);

  return (
    <motion.div
      className="mt-[20vh] mb-[20vh] grid place-items-center grid-rows-3 grid-cols-1 h-[100vh] w-full bg-white pl-20 pr-20"
      transition={{ staggerChildren: 1.5 }}
      initial="hidden"
      whileInView="show"
    >
      <motion.div className="pt-10 h-full w-full grid place-items-center grid-cols-4 grid-rows-1 row-span-1">
        <motion.svg
          className="justify-self-end mr-5"
          height="100%"
          width="3"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.line
            ref={timeline1}
            x1="0"
            y1="0"
            x2="0"
            y2="100%"
            stroke="black"
            strokeWidth="3"
            variants={{
              hidden: {
                pathLength: 0,
              },
              show: {
                pathLength: 1,
                transition: {
                  ease: easeInOut,
                  duration: 1.5,
                },
              },
            }}
          />
        </motion.svg>
        <div className="overflow-hidden justify-self-start bg-inherit w-[90%] h-[100%] col-span-1 row-span-2">
          <h1 className="font-bold mb-5 text-black text-6xl">Growing Up</h1>
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
            amet diam sem. Cras placerat viverra efficitur. Integer mollis ac
            augue vel facilisis. Nam fermentum arcu ac nunc euismod, eget
            accumsan nisi sodales. Mauris at dictum leo, et sodales sem. Integer
            vehicula massa at fringilla bibendum. Pellentesque egestas sem quis
            nunc gravida, non fringilla augue malesuada. Cras ullamcorper mattis
            finibus. Maecenas auctor placerat tortor, sed tincidunt dolor
            volutpat in.{" "}
          </p>
        </div>
      </motion.div>
      <motion.div className="pt-10 h-full w-full grid place-items-center grid-cols-[5%,20%,70%] grid-rows-1 row-span-1">
        <motion.svg
          className="justify-self-end mr-5"
          height="100%"
          width="3"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.line
            ref={timeline1}
            x1="0"
            y1="0"
            x2="0"
            y2="100%"
            stroke="black"
            strokeWidth="3"
            variants={{
              hidden: {
                pathLength: 0,
              },
              show: {
                pathLength: 1,
                transition: {
                  ease: easeInOut,
                  duration: 1.5,
                },
              },
            }}
          />
        </motion.svg>
        <div className="overflow-hidden bg-inherit w-[100%] h-[100%] col-span-1 row-span-2">
          <h1 className="mb-5 text-black font-bold text-6xl">Growing Up</h1>
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
            amet diam sem. Cras placerat viverra efficitur. Integer mollis ac
            augue vel facilisis. Nam fermentum arcu ac nunc euismod, eget
            accumsan nisi sodales. Mauris at dictum leo, et sodales sem. Integer
            vehicula massa at fringilla bibendum. Pellentesque egestas sem quis
            nunc gravida, non fringilla augue malesuada. Cras ullamcorper mattis
            finibus. Maecenas auctor placerat tortor, sed tincidunt dolor
            volutpat in.
          </p>
        </div>
      </motion.div>
      <motion.div className="pt-10 h-full w-full grid place-items-center grid-cols-[5%,42.5%,42.5%] grid-rows-1 row-span-1">
        <div></div>
        <motion.svg
          className="justify-self-end mr-5"
          height="100%"
          width="3"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.line
            ref={timeline1}
            x1="0"
            y1="0"
            x2="0"
            y2="100%"
            stroke="black"
            strokeWidth="3"
            variants={{
              hidden: {
                pathLength: 0,
              },
              show: {
                pathLength: 1,
                transition: {
                  ease: easeInOut,
                  duration: 1.5,
                },
              },
            }}
          />
        </motion.svg>
        <div className="overflow-hidden bg-inherit w-[80%] h-[100%] col-span-1 row-span-2">
          <h1 className="mb-5 text-black text-6xl font-bold">Growing Up</h1>
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
            amet diam sem. Cras placerat viverra efficitur. Integer mollis ac
            augue vel facilisis. Nam fermentum arcu ac nunc euismod, eget
            accumsan nisi sodales. Mauris at dictum leo, et sodales sem. Integer
            vehicula massa at fringilla bibendum. Pellentesque egestas sem quis
            nunc gravida, non fringilla augue malesuada. Cras ullamcorper mattis
            finibus. Maecenas auctor placerat tortor, sed tincidunt dolor
            volutpat in.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const PageFour = () => {
  return (
    <div className="flex items-center justify-center w-full h-[150vh] bg-white">
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
            <button className="translate-y-[10vh] opacity-0 filter blur-[5px] transition-all ease-in-out hover:ease-in-out group-hover:opacity-100 group-hover:translate-y-[0%] group-hover:blur-none mt-auto h-[10px] w-[130px] flex items-center justify-center justify-self-end font-bold rounded-md bg-white p-5 text-black text-md bg-opacity-70 hover:bg-opacity-100">
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
            <button className="translate-y-[10vh] opacity-0 filter blur-[5px] transition-all ease-in-out hover:ease-in-out group-hover:opacity-100 group-hover:translate-y-[0%] group-hover:blur-none mt-auto h-[10px] w-[130px] flex items-center justify-center justify-self-end font-bold rounded-md bg-white p-5 text-black text-md bg-opacity-70 hover:bg-opacity-100">
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
            <button className="translate-y-[10vh] opacity-0 filter blur-[5px] transition-all ease-in-out hover:ease-in-out group-hover:opacity-100 group-hover:translate-y-[0%] group-hover:blur-none mt-auto h-[10px] w-[130px] flex items-center justify-center justify-self-end font-bold rounded-md bg-white p-5 text-black text-md bg-opacity-70 hover:bg-opacity-100">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PageOne, PageTwo, PageThree, PageFour, NavBar };
