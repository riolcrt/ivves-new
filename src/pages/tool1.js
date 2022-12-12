import React from "react";
import { Menu, Transition, Listbox } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
function tool1() {
  const people = [
    { name: "Ms Azure AI" },
    { name: "Ms Azure AI" },
    { name: "Ms Azure AI" },
    { name: "Testing with Uncertainties" },
    { name: "Testing with Uncertainties" },
    { name: "Testing with Uncertainties" },
  ];
  const [selected, setSelected] = useState(people[0]);

  const simba = [
    { name: "ayub" },
    { name: "joseph" },
    { name: "Ms Azure AI" },
    { name: "Testing with Uncertainties" },
    { name: "Testing with Uncertainties" },
    { name: "Testing with Uncertainties" },
  ];
  const [ayub, setAyub] = useState(simba[0]);

  const [active, setActive] = useState("");

  return (
    <>
      <div className="max-w-screen mx-auto px-6  sm:px-8">
        <div
          style={{
            backgroundImage: `url("hhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIjCfsuj1lhCUwlDaVckyl-KZ32W2e9PrcSQ&usqp=CAU)`,
          }}
        >
          <div className="mt-6 flex items-center justify-between">
            <h2 className="mt-4 mb-4 text-xl font-bold lg:text-2xl">
              Validation Techniques for ML
            </h2>
          </div>
          <div className="flex items-start justify-end gap-8">
            <div className="mb-3 xl:w-96">
              <form>
                <label
                  htmlFor="default-search"
                  className="sr-only mb-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                >
                  
                </label>
                <div className="relative w-full">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    
                    
                    className="  p-4 pl-10 "
                    
                    
                  ></input>
                  <Link href={"https://ivves-search.vercel.app/"}>
                  <button
                    type="submit"
                    className="absolute w-full p-4 pl-10 right-2.5 bottom-2.5 rounded-lg bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search tools relevant to my Ai cycle
                  </button>
                  </Link>
                </div>
              </form>
            </div>

            
          </div>
        </div>
      </div>
      {/* business contianer circle */}

      <div className="relative m-auto  w-[340px] sm:w-[480px] md:w-[490px] lg:w-[800px]">
        <div className="m-auto mt-16 mb-16 w-[340px] sm:w-[400px] md:w-[490px] lg:w-[800px]">
          <div className="relative">
            <img className="w-full" src="/img/business.png" alt="" />

    
              </div>
            </div>
          </div>
        

        
           
        

      {/* footer */}
    </>
  );
}
export default tool1;
