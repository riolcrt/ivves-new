import React from "react";
import Link from "next/link";

export const Tool = () => {
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Ivves Tools</h2>
      </div>
      <div className="grid gap-2 lg:grid-cols-3">
        <div className="dark:bg-slate-70 w-full rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 lg:max-w-sm">
          <img
            className="h-48 w-full object-cover"
            src="/img/1.jpg"
             alt="image"
          />
          <div className="p-4">
            <h4 className="text-grey-600 mb-2 text-xl font-semibold">
              Validation Techniques for ML
            </h4>
            <p className="mb-2 leading-normal">
              Here you will find the tools,techniques and solutions that have
              been developed in ivves related to:<br></br>
              .Model Quality<br></br>
              .Training Data Quality<br></br>
              .Testing Techniques for ML<br></br>
            </p>
            <Link href={"/tool1"}>
              <button className="to--500 text-grey mt-3 w-full bg-gradient-to-r from-green-400 py-2 px-4 text-center text-base font-semibold shadow-md transition duration-200 ease-in hover:bg-white focus:outline-none  ">
                Go to tool
              </button>
            </Link>
          </div>
        </div>

        <div className="dark:bg-slate-70 w-full rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 lg:max-w-sm">
          <img
            className="h-48 w-full object-cover"
            src="/img/2.jpg"alt="image"
          />
          <div className="p-4">
            <h4 className="text-grey-600 mb-2 text-xl font-semibold">
              Complex Evolving System
            </h4>
            <p className="mb-2 leading-normal">
              Here you will find the tools,techniques and solutions that have
              been developed in ivves related to:<br></br>
              .ML-driven Testing<br></br>
              .Testing ith Uncertainties<br></br>
              .online Testing & Monitoring
            </p>
            <Link href={"/tool2"}>
              <button className="to--500 text-grey mt-3 w-full bg-gradient-to-r from-green-400 py-2 px-4 text-center text-base font-semibold shadow-md transition duration-200 ease-in hover:bg-white focus:outline-none  ">
                Go to tool 
              </button>
            </Link>
          </div>
        </div>

        <div className="dark:bg-slate-70 w-full rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 lg:max-w-sm">
          <img
            className="h-48 w-full object-cover"
            src="/img/3.png"alt="image"
          />
          <div className="p-4">
            <h4 className="text-grey-600 mb-2 text-xl font-semibold">
              Data-Driven Engineering
            </h4>
            <p className="mb-2 leading-normal">
              Here you will find the tools,techniques and solutions that have
              been developed in ivves related to:<br></br>
              .Data Collection Techniques<br></br>
              .Pattern Recognition<br></br>
              .Data Analytics in Engineering and Operation
            </p>
            <Link href={"/tool3"}>
              <button className="to--500 text-grey mt-3 w-full bg-gradient-to-r from-green-400 py-2 px-4 text-center text-base font-semibold shadow-md transition duration-200 ease-in hover:bg-white focus:outline-none  ">
                Go to tool
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
