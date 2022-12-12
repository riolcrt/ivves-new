import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, IconButton } from "./Button";
import { Transition } from "@headlessui/react";

const Hero = () => {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <>
      <div className="relative h-[640px] w-full bg-red-500/20 sm:h-[55vh] md:h-[440px]">
        <Image
          src="/img/corporate.jpg"
          alt="corporate"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-neutral-900/70">
          <div className="mx-auto max-w-screen-lg">
            <div className="m-6 min-h-[60px]">
              <HeroInnerBanner
                show={showBanner}
                onClose={() => setShowBanner(false)}
              />
            </div>
            <div className="mx-4 mt-16 flex flex-col items-center text-center">
              <h1 className="text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl">
                ivves
              </h1>
            </div>
          </div>
        </div>
      </div>
      <HeroBottomCard />
    </>
  );
};

export default Hero;

const HeroInnerBanner: React.FC<{ show: boolean; onClose: () => void }> = ({
  show,
  onClose,
}) => {
  return (
    <Transition
      show={show}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="to-gray-10 relative rounded bg-stone-100 bg-gradient-to-r py-3 px-8 text-center text-black shadow-lg md:rounded-full">
        <p>
          Welcome to <span className="font-bold">Ivves</span>.Industrial-grade
          Verification and Validation of Evolving Systems
        </p>
        <span className="absolute top-1 right-1 sm:top-2 sm:right-2">
          <IconButton
            aria-label="close banner"
            variant="ghost"
            size="sm"
            onClick={onClose}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </span>
      </div>
    </Transition>
  );
};

function HeroBottomCard() {
  return (
    <div className="bg-green-700 p-4">
      <span className="block text-center text-lg text-white">
        Explore different tools with{" "}
        <span className="from-white-400 to-white-600 bg-gradient-to-r bg-clip-text align-middle text-2xl font-black tracking-widest ">
          Ivves
        </span>{" "}
        today.
      </span>
    </div>
  );
}
