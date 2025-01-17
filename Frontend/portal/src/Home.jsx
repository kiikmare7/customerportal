import { Button } from "flowbite-react";
import Img from "./components/Img";
import imageSource from "./assets/Background.png"
import illustration from './assets/Teaching-pana (1).svg'
import logo from './assets/logo4.png'
import image1 from './assets/User flow-pana.png'
import image2 from './assets/Background1.png'
import image3 from './assets/Background2.png'
import image4 from './assets/Online article-cuate.svg'
import ClientStats from "./components/ClientStats";
import { FooterComponent } from "./components/FooterComponent";
import { useState } from 'react';
import Login from "./components/login";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  //<a href="https://storyset.com/education">Education illustrations by Storyset</a>
  return (
    <div className="bg-[#F1F1F1] h-screen overflow-y-auto overflow-x-hidden">
    <div className="h-screen">
      <header className="relative z-10 flex flex-row items-center justify-between px-5 m-0">
        <div className="flex flex-row items-center justify-center gap-1">
          <img className="md:w-[60px] w-[50px] h-auto" src={logo} />
          <h1 className="text-[#5e469c] text-[20px] md:text-[30px] xl:text-[45px] font-bold font-['Inter']">
            Spectrum Engineering wifi system
          </h1>
        </div>
        <button onClick={()=> setIsOpen(true)} className="p-2 px-4 bg-[#5e469c] hover:bg-black rounded-lg text-neutral-100 md:text-xl font-normal font-['Inter']">
            SIGN IN
        </button>
        <Login open={isOpen} onClose={()=> setIsOpen(false)}/>
      </header>
        <div id="hero" className="relative flex justify-center items-center">
          {/* Background Image */}
          <img
            src= {imageSource}
            alt="background image"
            className="absolute top-[-25%] bottom-0 right-[-6%] w-[50%] object-contain z-0"
          />
          
          {/* Content */}
          <div className="relative z-10 flex  flex-col-reverse xl:flex-row justify-between items-center rounded-lg gap-10 p-2">
            <div id="hero-text" className="">
              <p className="text-[#5e469c] text-[27px] md:text-[35px] xl:text-[40px] font-bold font-['Inter']">
                Revolutionize Your Internet
              </p>
              <p id="hero-explanation" className="text-black text-[20px] md:text-2xl xl:text-3xl font-normal font-['Inter']">
                Effortlessly high speed wifi network for your office and home.
              </p>
              <button className="px-4 bg-[#5e469c] hover:bg-black rounded-lg border border-[#8b5eff] text-neutral-100 my-3 text-[25px] md:text-[32px] font-normal font-['Inter']">
                Start Now!
              </button>
            </div>
            <img src={illustration} alt="illustration" className=" md:w-[70%] xl:w-[50%] h-auto" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center  z-10 mb-5">
        <div id="features" className="bg-[#E9F0CD] md:w-[73%] mx-2 my-4 md:m-0 p-6 flex flex-row z-10 items-top justify-center relative shadow-md">
          <img
            src= {image2}
            alt="background image"
            className="absolute bottom-0 left-0 w-[50%] object-contain z-0"
          />
          <img src={image1} alt="features illusteration" className="w-[30%] h-a z-10"/>
          <div className="p-5 z-10">
            <h2 className="text-2xl md:text-4xl xl:text-5xl font-semibold mb-4 text-[#5e469c]">Key Features</h2>
            <ol className="list-disc pl-5 xl:ml-32 md:text-2xl xl:text-3xl">
              <li className="my-4">On-demand Support resolution</li>
              <li className="my-4">high speed</li>
              <li className="my-4">Relaible</li>
            </ol>
          </div>
        </div>

        <div id="features" className="bg-[#E9F0CD] md:w-[73%] mx-2 my-4 md:my-5 p-6 flex flex-row z-10 items-top justify-center relative shadow-md overflow-hidden">
          <img
            src= {image3}
            alt="background image"
            className="absolute top-[-5%] right-[-5%] w-[42%] object-contain z-0"
          />
          <div className="p-5 z-10">
            <h2 className="text-2xl md:text-4xl xl:text-5xl font-semibold mb-4 text-[#5e469c]">Benefits</h2>
            <ol className="list-disc pl-5 xl:ml-32 md:text-2xl xl:text-3xl">
              <li className="my-4">Save time and resources</li>
              <li className="my-4">relaxing and having fun</li>
              <li className="my-4">Enhance customer satisfaction</li>
              <li className="my-4">Reduce Support</li>
            </ol>
          </div>
          <img src={image4} alt="features illusteration" className="w-[40%] h-a z-10 scale-x-[-1]"/>
        </div>
        <ClientStats/>
      </div>
      <FooterComponent/>
    </div>
  );
};

export default Home;
