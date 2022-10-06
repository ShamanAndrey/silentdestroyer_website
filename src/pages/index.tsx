import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { FaDiscord, FaTiktok, FaTwitch, FaYoutube } from "react-icons/fa";
import { SiOnlyfans } from "react-icons/si";
import background from "/public/Rooom.png";
import Image from "next/image";
import { useState } from "react";
import Throne from "/public/Thone.png";
import Bust from "/public/Bust.png";
import Smug from "/public/smug.png";
import Heart from "/public/heart.png";
import type { NextApiRequest } from "next";
import { motion, AnimatePresence } from "framer-motion";

interface props {
  ip: string;
}

const Home: NextPage<props> = (props) => {
  const ip = props.ip;
  const [isVerificationScreenOpen, setIsVerificationScreenOpen] =
    useState(false);

  const VerificationContainer = () => {
    const ctx = trpc.useContext();
    const { mutate } = trpc.useMutation("example.upsertBaited", {
      onSuccess: () => {
        ctx.invalidateQueries("example.getCount");
      },
    });
    function handleMutate() {
      mutate({ ip: ip });
    }
    const variants = {
      open: { opacity: 1, y: "0px" },
      closed: { opacity: 0, y: "200px" },
    };
    return (
      <div className="absolute w-screen h-screen flex justify-center items-center">
        <motion.div
          className="w-screen h-screen bg-black opacity-75 absolute top-0 left-0 z-20"
          onClick={() => {
            setIsVerificationScreenOpen(false);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
        />

        <motion.div
          className="absolute z-20 md:w-[420px] w-[320px] h-44 bg-[#141414] rounded-2xl flex flex-col justify-center items-center border-2 border-gray-500 overflow-hidden"
          initial={{ opacity: 0, y: "200px" }}
          animate={isVerificationScreenOpen ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 md:-left-12 -left-20 md:w-[200px] md:h-[200px] w-[180px] h-[180px]">
            <Image src={Smug} alt="smug face emoji" layout="fill" />
          </div>
          <div className="absolute top-0 md:-right-12 -right-20 md:w-[200px] md:h-[200px] w-[180px] h-[180px]">
            <Image src={Heart} alt="smug face emoji" layout="fill" />
          </div>
          <h1 className="text-white text-2xl">18+ Content</h1>
          <a
            className="bg-[#8c50c97d] hover:bg-[#9462c67d] mt-4 py-3 px-6 rounded-lg transition-all duration-200"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            target="_blank"
            rel="noreferrer"
            onClick={() => handleMutate()}
          >
            <h1 className="text-white text-xl">Enter</h1>
          </a>
        </motion.div>
      </div>
    );
  };

  const SilentChatter = () => {
    return (
      <div className="absolute bottom-0 left-0 z-10 w-[200px] h-[280px] md:flex hidden">
        <Image src={Bust} alt="Bust of Silent DestroyerZ"></Image>
        <div className="absolute text-white bottom-8 left-[120px] text-6xl font-Sedgwick flex flex-col">
          <span>
            <h1 className="absolute text-[#fc5bff] bottom-12 scale-105">
              Silent
            </h1>
            <h1 className="absolute text-[#ffffff] bottom-12">Silent</h1>
          </span>
          <span>
            <h1 className="absolute text-[#fc5bff] bottom-0 scale-105 flex">
              Destroyer <span className="text-[#fc5bff]">Z</span>
            </h1>
            <h1 className="absolute text-[#ffffff] bottom-0 flex">
              Destroyer <span className="text-[#ffffff]">Z</span>
            </h1>
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Silent DestroyerZ</title>
        <meta
          name="description"
          content="Silent DestroyerZ Social Media Pages"
        />
        <link rel="icon" href="/heart.png" />
      </Head>

      <main className=" container mx-auto flex flex-col items-center justify-center min-h-screen p-4 font-Sedgwick bg-black">
        <AnimatePresence>
          <TopRigthAnalysis />
          <SilentChatter />
          {isVerificationScreenOpen ? <VerificationContainer /> : null}
          <div className="grid gap-3 pt-3 md:mt-12 text-center md:grid-cols-2 lg:w-2/3 z-10">
            <LinkContainer link="https://www.twitch.tv/silentdestroyerz">
              <span className="text-[#6441a5] text-5xl pr-5">
                <FaTwitch />
              </span>
              <h2 className="text-[#6441a5] font-bold text-5xl">Twitch</h2>
            </LinkContainer>
            <LinkContainer link="https://discord.com/invite/qRs74jU4mN">
              <span className="text-[#5865F2] text-5xl pr-5">
                <FaDiscord />
              </span>
              <h2 className="text-[#5865F2] font-bold text-5xl">Discord</h2>
            </LinkContainer>
            <LinkContainer link="https://www.tiktok.com/@silentdestroyerz_ttv">
              <span className="text-white text-5xl pr-5">
                <FaTiktok />
              </span>
              <h2 className="text-white font-bold text-5xl">TikTok</h2>
            </LinkContainer>
            <LinkContainer link="https://www.youtube.com/channel/UCx5pgI2XWXsUvjjA9TO9X6w">
              <span className="text-red-500 text-5xl pr-5">
                <FaYoutube />
              </span>
              <h2 className="text-white font-bold text-5xl">
                You<span className="">Tube</span>
              </h2>
            </LinkContainer>
            <div
              className="btn"
              onClick={() => setIsVerificationScreenOpen(true)}
            >
              <span className="text-blue-400 text-5xl pr-5">
                <SiOnlyfans />
              </span>
              <h2 className="text-white font-bold text-5xl">
                <span className="text-blue-500">Only</span>
                <span className="text-blue-600">Fans</span>
              </h2>
            </div>
            <LinkContainer link="https://throne.me/u/silentdestroyerz">
              <Image
                src={Throne}
                alt="throne logo"
                height={25}
                width={65}
              ></Image>
              <h2 className="text-white font-bold text-5xl ml-5">Wishlist</h2>
            </LinkContainer>
          </div>
          <div className="w-screen h-screen absolute ">
            <Image
              src={background}
              alt="background"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </AnimatePresence>
      </main>
    </>
  );
};

export default Home;

type Props = {
  link: string;
  children: React.ReactNode;
};

const LinkContainer: React.FC<Props> = ({ link, children }) => {
  return (
    <a className="btn" href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

const TopRigthAnalysis = () => {
  const { data } = trpc.useQuery(["example.getCount"]);
  const { data: unique } = trpc.useQuery(["example.getUniqueCount"]);
  return (
    <div className="absolute top-0 right-0 flex flex-col z-10">
      <h1 className="text-white">Unique : {unique}</h1>
      <h1 className="text-white">
        Baited : {data?._sum.count ? data?._sum.count : 0}
      </h1>
    </div>
  );
};

export async function getServerSideProps(context: { req: NextApiRequest }) {
  let ip;

  const { req } = context;

  if (req.headers["x-forwarded-for"]) {
    ip = req.headers["x-forwarded-for"].toString().split(",")[0];
  } else if (req.headers["x-real-ip"]) {
    ip = req.connection.remoteAddress;
  } else {
    ip = req.connection.remoteAddress;
  }

  console.log(ip);
  return {
    props: {
      ip,
    },
  };
}
