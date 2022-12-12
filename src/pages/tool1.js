import React from "react";
import {  useState } from "react";
import {  ChevronRightIcon } from "@heroicons/react/20/solid";
import { BiChevronRight, BiSearch } from "react-icons/bi";
import Link from "next/link";

function tool1() {
  const tools = [
    {
      "ENTITY": "HUNI",
      "TOOL-NAME": "Inference simulator by HUNI",
      "FOCUS": "WP2 - MODEL QUALITY",
      "DESCRIPTION": "This tool provides a mechanism to simulate deployment configurations for ML models,  by identifying suitable protocols and HW configuration required for performant applications",
      "REQUIREMENTS": "JUPYTER NOTEBOOK, PYTHON",
      "RESTRICTIONS": "NO RESTRICTIONS",
      "LICENSE": "IS OPEN SOURCE",
      "INTEGRATION ": "CAN BE USED, DEPLOYED AND/OR INTEGRATED IN ANY TOOLCHAIN.  "
  },
  {
      "ENTITY": "KEYLAND",
      "TOOL-NAME": "Monitoring system for plastic injection molding machine.",
      "FOCUS": "WP2 - DATA QUALITY",
      "DESCRIPTION": "Simulate the behaviour, through GAN networks trained to simulate both good and bad data.",
      "REQUIREMENTS": "PYTHON",
      "RESTRICTIONS": "NO RESTRICTIONS",
      "LICENSE": "IS PRIVATE",
      "INTEGRATION ": "AN API OR ENDPOINT COULD BE DEPLOYED TO COMMUNICATE WITH THE ARTIFACT (LOAD, EXPORT DATA) "
  },
  {
      "ENTITY": "VTT",
      "TOOL-NAME": "MACAU by VTT",
      "FOCUS": "WP2 - MODEL QUALITY",
      "DESCRIPTION": "MACAU is a wrapper class for state-of-the-art tree-based LightGBM algorithm which enables adding both aleatoric and epistemic uncertainty via a proxy to LightGBM. MACAU is based on tree-introspection accompanied with proxy models for uncertainty modelling. Additionally, MACAU enables adding additional non-linearities to the model which enables the model to capture smooth non-linearities better than vanilla RF.",
      "REQUIREMENTS": "PYTHON",
      "RESTRICTIONS": "NO RESTRICTIONS",
      "LICENSE": "IS OPEN SOURCE",
      "INTEGRATION ": "THE ARTIFACT CAN BE IMPORTED AS A LIBRARY/PACKAGE IN ANY IDE OR CAN BE WRAPPED TO BE USED  "
  },
  {
      "ENTITY": "PHILIPS, VTT",
      "TOOL-NAME": "Synthetic MRI data by VTT and PHILIPS",
      "FOCUS": "WP2 - DATA QUALITY",
      "DESCRIPTION": "This tool is used to generate synthetic T1-weighted brain MR images. The tool overcomes privacy and availability issues with real data, by generating synthetic data that can be used in its place. ",
      "REQUIREMENTS": "NONE",
      "RESTRICTIONS": "NO RESTRICTIONS",
      "LICENSE": "IS PRIVATE",
      "INTEGRATION ": "THIS IS A FRAMEWORK, NOT DESIGNED TO BE INTEGRATED IN A TOOLCHAIN "
  },
  {
      "ENTITY": "SOGETI",
      "TOOL-NAME": "Data Quality Wrapper by Sogeti",
      "FOCUS": "WP2 - DATA QUALITY",
      "DESCRIPTION": "An app for automated EDA, preprocessing and data quality report generation. Its goal is to automate the preprocessing of data, but also educate aspiring and experienced data scientists about different methods that can be used to improve its quality.",
      "REQUIREMENTS": "STREAMLIT, PYTHON",
      "RESTRICTIONS": "NO RESTRICTIONS",
      "LICENSE": "IS OPEN SOURCE",
      "INTEGRATION ": "CAN BE USED, DEPLOYED AND/OR INTEGRATED IN ANY TOOLCHAIN.  "
  },
  {
      "ENTITY": "SOLITA",
      "TOOL-NAME": "Machine Spraak (Acoustic Analysis: QA of audio Data) by Solita",
      "FOCUS": "WP2 - DATA QUALITY",
      "DESCRIPTION": "A tool for audio experimentation. The tool collects audio data and experiment meta data. It enables further analysis in the cloud.",
      "REQUIREMENTS": "NONE",
      "RESTRICTIONS": "NO RESTRICTIONS",
      "LICENSE": "IS PRIVATE",
      "INTEGRATION ": "THE RESULT OF THE ARTIFACT CAN BE USED AS A REPORT TO PROVIDE INSIGHTS TO OTHER ACTOR IN THE AI LIFECYCLE "
  },
  {
      "ENTITY": "WITHSECURE",
      "TOOL-NAME": "Data Quality OT Simulation Rig by WithSecure",
      "FOCUS": "WP2 - DATA QUALITY",
      "DESCRIPTION": "A flexible platform which allows the simulation of wide variety of different scenarios where OT can be found, this includes but is not limited to industrial facilities, marine vessels and trains.",
      "REQUIREMENTS": "SPECIFIC HARDWARE",
      "RESTRICTIONS": "NO RESTRICTIONS",
      "LICENSE": "IS PRIVATE",
      "INTEGRATION ": "NOT APPLICABLE "
  },
  {
      "ENTITY": "RISE",
      "TOOL-NAME": "Deeper: Simulation Integrated Bio-Inspired Test Generator by RISE",
      "FOCUS": "WP2 - TESTING TECHNIQUES FOR ML",
      "DESCRIPTION": "a simulation-based test generator that uses an evolutionary process (i.e., mainly NSGAII) for generating test cases to test a DNN-based lane keeping system in automotive domain",
      "REQUIREMENTS": "PYTHON",
      "RESTRICTIONS": "THE ARTIFACT COULD BE USED AS AN ONLINE SERVICE OR ACCESSED VIA ONLINE API",
      "LICENSE": "IS PRIVATE",
      "INTEGRATION ": "CAN BE USED, DEPLOYED AND/OR INTEGRATED IN ANY TOOLCHAIN.  "
  },
  {
      "ENTITY": "HUNI",
      "TOOL-NAME": "AutoML Robust Tester by HUNI",
      "FOCUS": "WP2 - TESTING TECHNIQUES FOR ML",
      "DESCRIPTION": "A research on how robust the models generated by different AutoML approaches are.",
      "REQUIREMENTS": "AUTOML",
      "RESTRICTIONS": "THE ARTIFACT IS LIMITED TO A SPECIFIC ENVIRONMENT OR OS",
      "LICENSE": "IS PRIVATE",
      "INTEGRATION ": "THE RESULT OF THE ARTIFACT CAN BE USED AS A REPORT TO PROVIDE INSIGHTS TO OTHER ACTOR IN THE AI LIFECYCLE "
  },
  {
      "ENTITY": "SIICONCATEL",
      "TOOL-NAME": "ESG: FinTech by CCTL/NetCheck",
      "FOCUS": "WP2 - CROSS-TASK ",
      "DESCRIPTION": "A set of services to process news for ESG ivestment, classify news and detect/reject synthetic text",
      "REQUIREMENTS": "NONE",
      "RESTRICTIONS": "NO RESTRICTIONS",
      "LICENSE": "IS PRIVATE",
      "INTEGRATION ": "AN API OR ENDPOINT COULD BE DEPLOYED TO COMMUNICATE WITH THE ARTIFACT (LOAD, EXPORT DATA) "
  },
  {
      "ENTITY": "SOGETI",
      "TOOL-NAME": "QAIF by Sogeti",
      "FOCUS": "WP2 - CROSS-TASK ",
      "DESCRIPTION": " A Cohesive, generic framework that can be tailored to a specific AI solution in a given context covering: project phase, processes, outcomes, governance and people.",
      "REQUIREMENTS": "NONE",
      "RESTRICTIONS": "NO RESTRICTIONS",
      "LICENSE": "IS OPEN SOURCE",
      "INTEGRATION ": "NOT APPLICABLE "
  },
  ]

  const [selectedTool, setSelected] = useState(tools[0])

  return (
    <>
      {ToolHeader("Validation Techniques for ML")}
      {/* business contianer circle */}

      <div className="relative m-auto  w-[340px] sm:w-[480px] md:w-[490px] lg:w-[800px]">
        <div className="m-auto mt-16 mb-16 w-[340px] sm:w-[400px] md:w-[490px] lg:w-[800px]">
          <div className="relative">
            <img className="w-full" src="/img/business.png" alt="" />
          </div>
        </div>
      </div>

      <div className="absolute top-[200px] left-20 w-[300px] h-[600px] space-y-2 flex-wrap">
        {tools.map((tool) => (
          <Tooltip key={tool['TOOL-NAME']} tooltipInfo={tool} setSelected={setSelected} />
          ))}
      </div>
      
      <div className="absolute top-[200px] right-20 w-[300px] h-[600px] space-y-2 flex-wrap">
        <TooltipInfo {...selectedTool} />
      </div>
    </>
  );
}
export default tool1;

export function ToolHeader(title) {
  return <div className="max-w-screen mx-auto px-6 ">
    <div>
      <div className="mt-6 flex items-center justify-between">
        <h2 className="text-xl font-bold">
          {title}
        </h2>
      
      <form className='w-3/12'>
          <label
            htmlFor="default-search"
            className="sr-only mb-2 text-xs font-medium text-gray-900 dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
             <BiSearch />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Search Tools..."
              required
            ></input>
            <button
              type="submit"
              className="absolute right-2.5 bottom-2.5 rounded-lg bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
    </div>
    </div>
  </div>
}


export function Tooltip({tooltipInfo, setSelected}) {
  return (
    <div 
    onClick={() => setSelected(tooltipInfo)}
    className='bg-white cursor-pointer hover:bg-slate-100 flex item-center justify-between text-sm rounded-sm shadow-sm px-4 py-2'>{tooltipInfo? tooltipInfo['TOOL-NAME'] : 'No name  '} <ChevronRightIcon className='w-[18px]'/></div>
  )
}

export function TooltipInfo(selectedTool) {
  
  return (selectedTool && (
 
  <div className="flex w-full flex-col gap-4">
                <div className="flex w-full items-center justify-between rounded-[6px] bg-white py-[6px] px-4 shadow-sm dark:bg-[#131B2D] dark:text-white">
                  <p className=" text-xs md:text-sm lg:text-base">
                    {selectedTool["TOOL-NAME"]}
                  </p>
                  <div>
                    <BiChevronRight className="text-lg" />
                  </div>
                </div>

                <div className="w-full rounded-[6px] bg-white p-4 shadow-sm dark:bg-[#131B2D] dark:text-white">
                  <h4 className="font-semibold sm:text-xs md:text-sm lg:text-base">
                    What is the tool for: <span className="font-normal">
                    {selectedTool["DESCRIPTION"]}
                    </span>
                  </h4>
                  <h4 className="mt-1 text-xs font-semibold md:text-sm lg:text-base">
                    Requirements: <span className="font-normal">
                    {selectedTool["REQUIREMENTS"]}
                    </span>
                  </h4>
                  <div className="mt-2 flex flex-col gap-2">
                    <h4 className="text-xs font-semibold md:text-sm lg:text-base">
                      Restrictions <span className='font-normal'>
                        {selectedTool["RESTRICTIONS"]}                      
                      </span>
                    </h4>
                    <h4 className="text-xs font-semibold md:text-sm lg:text-base">
                      License: <span className='font-normal'>
                        {selectedTool["LICENSE"]}
                      </span>
                    </h4>
                    <h4 className="text-xs font-semibold md:text-sm lg:text-base">
                      How to integrate: <span className='font-normal'>
                        {selectedTool["INTEGRATION "]}
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
  ) || <div></div>)

}

