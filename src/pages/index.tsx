import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { FaDiscord, FaTiktok, FaTwitch, FaYoutube } from "react-icons/fa";
import { SiOnlyfans } from "react-icons/si";
import background from "/public/bg.gif";
import Image from "next/image";
import { useState } from "react";
import Throne from "/public/Thone.png";
import Bust from "/public/Bust.png";
import Smug from "/public/smug.png";

const Home: NextPage = () => {
  const [isVerificationScreenOpen, setIsVerificationScreenOpen] =
    useState(false);

  const VerificationContainer = () => {
    const ctx = trpc.useContext();
    const { mutate } = trpc.useMutation("example.addBaited", {
      onSuccess: () => {
        ctx.invalidateQueries("example.data");
      },
    });

    function handleMutate() {
      mutate({ ipAddress: "Ip Address" });
    }

    return (
      <div
        className={
          isVerificationScreenOpen
            ? "z-10 absolute w-screen h-screen flex items-center justify-center"
            : "hidden"
        }
      >
        <div
          className="w-screen h-screen bg-black opacity-75 absolute"
          onClick={() => {
            setIsVerificationScreenOpen(false);
          }}
        />
        <div className="absolute z-20 md:w-[420px] w-[320px] h-44 bg-[#141414] rounded-2xl flex flex-col justify-center items-center border-2 border-gray-500 overflow-hidden">
          <div className="absolute top-0 md:-left-12 -left-20 md:w-[200px] md:h-[200px] w-[180px] h-[180px]">
            <Image src={Smug} alt="smug face emoji" layout="fill" />
          </div>
          <h1 className="text-white text-2xl">18+ Content</h1>
          <a
            className="bg-[#8c50c97d] hover:bg-[#9462c67d] mt-4 py-3 px-6 rounded-lg transition-all duration-200"
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
            onClick={() => handleMutate()}
          >
            <h1 className="text-white text-xl">Enter</h1>
          </a>
        </div>
      </div>
    );
  };

  const SilentChatter = () => {
    return (
      <div className="absolute bottom-0 left-0 z-10 w-[200px] h-[280px] md:flex hidden">
        <Image src={Bust} alt="Bust of Silent DestroyerZ"></Image>
        <div className="absolute text-white bottom-8 left-[120px] text-6xl font-Sedgwick flex flex-col">
          <span className="">
            <h1 className="absolute text-[#7192ff] bottom-12 scale-105">
              Silent
            </h1>
            <h1 className="absolute text-[#ff3ed5] bottom-12">Silent</h1>
          </span>
          <span className="">
            <h1 className="absolute text-[#7192ff] bottom-0 scale-105 flex">
              Destroyer <span className="text-[#5471fe]">Z</span>
            </h1>
            <h1 className="absolute text-[#c933ff] bottom-0 flex">
              Destroyer <span className="text-[#ff16e4]">Z</span>
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

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4 font-Sedgwick">
        <SilentChatter></SilentChatter>
        <VerificationContainer />
        <div className="grid gap-3 pt-3 mt-12 text-center md:grid-cols-2 lg:w-2/3">
          <LinkContainer link="https://google.com">
            <span className="text-[#6441a5] text-5xl pr-5">
              <FaTwitch />
            </span>
            <h2 className="text-[#6441a5] font-bold text-5xl">Twitch</h2>
          </LinkContainer>
          <LinkContainer link="https://google.com">
            <span className="text-[#5865F2] text-5xl pr-5">
              <FaDiscord />
            </span>
            <h2 className="text-[#5865F2] font-bold text-5xl">Discord</h2>
          </LinkContainer>
          <LinkContainer link="https://google.com">
            <span className="text-white text-5xl pr-5">
              <FaTiktok />
            </span>
            <h2 className="text-white font-bold text-5xl">TikTok</h2>
          </LinkContainer>
          <LinkContainer link="https://google.com">
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
          <LinkContainer link="https://google.com">
            <Image
              src={Throne}
              alt="throne logo"
              height={25}
              width={65}
            ></Image>
            <h2 className="text-white font-bold text-5xl ml-5">Wishlist</h2>
          </LinkContainer>
        </div>
        <div className="w-screen h-screen absolute -z-10">
          <Image src={background} alt="background" layout="fill"></Image>
        </div>
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
    <a className="btn" href={link}>
      {children}
    </a>
  );
};

const TopRigthAnalysis = () => {
  const { data } = trpc.useQuery(["example.data"]);

  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};
