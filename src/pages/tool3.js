import React from "react";
import { useState } from "react";
import { ToolHeader, Tooltip, TooltipInfo } from './tool1';

function tool3() {
  const tools = [
   
    {
        "ENTITY": "EKKONO",
        "TOOL-NAME": "Sample Application: Fault analysis and anomaly detection",
        "FOCUS": "WP4 - DATA COLLECTION, INSTRUMENTATION AND SMART PROBES",
        "DESCRIPTION": "Enables predictive maintenance at the edge. It is an online tool that does not include probes or instrumentation. Nor does it require any specific infrastructure or store any data.",
        "REQUIREMENTS": "SAMPLE APPLICATION, CONTACT OWNER",
        "RESTRICTIONS": "NO RESTRICTIONS",
        "LICENSE": "IS PRIVATE",
        "INTEGRATION ": "NOT APPLICABLE "
    },
    {
        "ENTITY": "OU-NL",
        "TOOL-NAME": "Sample Application: GUI testing with TESTAR ",
        "FOCUS": "WP4 - DATA COLLECTION, INSTRUMENTATION AND SMART PROBES",
        "DESCRIPTION": "TESTAR to test ING web applications and implementing support for testing ING mobile applications (Android and iOS).",
        "REQUIREMENTS": "SAMPLE APPLICATION, CONTACT OWNER",
        "RESTRICTIONS": "NO RESTRICTIONS",
        "LICENSE": "IS PRIVATE",
        "INTEGRATION ": "NOT APPLICABLE "
    },
    {
        "ENTITY": "PRAEGUS",
        "TOOL-NAME": "Sample Application:  Test duration optimization in the testing phase",
        "FOCUS": "WP4 - DATA COLLECTION, INSTRUMENTATION AND SMART PROBES",
        "DESCRIPTION": "Insight in test performance (duration, failure rates, etc.) and charts, in our Orangebeard Control Room Next to that want to optimize the duration of a testset run depending of e.g. SCM-input, in our Orangebeard Auto Test Pilot.",
        "REQUIREMENTS": "SAMPLE APPLICATION, CONTACT OWNER",
        "RESTRICTIONS": "NO RESTRICTIONS",
        "LICENSE": "IS PRIVATE",
        "INTEGRATION ": "NOT APPLICABLE "
    },
    {
        "ENTITY": "RISE",
        "TOOL-NAME": "Sample Application:  Performance testing with SaFReL/RELOAD",
        "FOCUS": "WP4 - DATA COLLECTION, INSTRUMENTATION AND SMART PROBES",
        "DESCRIPTION": "It is a reinforcement Learning-assisted performance testing framework ",
        "REQUIREMENTS": "SAMPLE APPLICATION, CONTACT OWNER",
        "RESTRICTIONS": "NO RESTRICTIONS",
        "LICENSE": "IS PRIVATE",
        "INTEGRATION ": "NOT APPLICABLE "
    },
    {
        "ENTITY": "SOGETI",
        "TOOL-NAME": "Sample Application:  Software quality in the development phase",
        "FOCUS": "WP4 - DATA ANALYTICS IN ENGINEERING AND OPERATION",
        "DESCRIPTION": "AI-powered DevOps monitoring assistant to accelerate testing and development.",
        "REQUIREMENTS": "TIME SERIES DATABASE, AZURE",
        "RESTRICTIONS": "THE ARTIFACT IS LIMITED TO A SPECIFIC ENVIRONMENT OR OS",
        "LICENSE": "IS PRIVATE",
        "INTEGRATION ": "AN API OR ENDPOINT COULD BE DEPLOYED TO COMMUNICATE WITH THE ARTIFACT (LOAD, EXPORT DATA) "
    },
    {
        "ENTITY": "EKKONO",
        "TOOL-NAME": "Sample Application: Fault analysis and anomaly detection",
        "FOCUS": "WP4 - PATTERN RECOGNITION",
        "DESCRIPTION": "Ekkonoâ€™s tool provides fault analysis and anomaly detection based on their own Change detection algorithm. The analysis is not automated but needs to be tailored for the problem at hand. ",
        "REQUIREMENTS": "SAMPLE APPLICATION, CONTACT OWNER",
        "RESTRICTIONS": "NO RESTRICTIONS",
        "LICENSE": "IS PRIVATE",
        "INTEGRATION ": "NOT APPLICABLE "
    },
    {
        "ENTITY": "OU-NL",
        "TOOL-NAME": "Sample Application: GUI testing with TESTAR ",
        "FOCUS": "WP4 - PATTERN RECOGNITION",
        "DESCRIPTION": "TESTAR has been extended with configuration allowing custom abstraction level for both states and actions for the model inference, and predicting transitions of GUI actions without executing them, based on similar actions from other states of the inferred model.",
        "REQUIREMENTS": "SAMPLE APPLICATION, CONTACT OWNER",
        "RESTRICTIONS": "NO RESTRICTIONS",
        "LICENSE": "IS PRIVATE",
        "INTEGRATION ": "NOT APPLICABLE "
    },
    {
        "ENTITY": "PRAEGUS",
        "TOOL-NAME": "Sample Application:  Test duration optimization in the testing phase",
        "FOCUS": "WP4 - DATA COLLECTION, INSTRUMENTATION AND SMART PROBES",
        "DESCRIPTION": "Extended Orangebeard to provide the module \"Auto Test Pilot\", to be able to perform basic subsetting and prioritization of testcases against the relevant context",
        "REQUIREMENTS": "SAMPLE APPLICATION, CONTACT OWNER",
        "RESTRICTIONS": "NO RESTRICTIONS",
        "LICENSE": "IS PRIVATE",
        "INTEGRATION ": "NOT APPLICABLE "
    },
    {
        "ENTITY": "SOGETI",
        "TOOL-NAME": "Sample Application:  Software quality in the development phase",
        "FOCUS": "WP4 - PATTERN RECOGNITION",
        "DESCRIPTION": " collaboraton with Alstom, validating the integration of data sources and visualize key KPIs, metrics and aforementioned data quality, model quality and code quality results. Provide a holistic software evaluation report.",
        "REQUIREMENTS": "SAMPLE APPLICATION, CONTACT OWNER",
        "RESTRICTIONS": "NO RESTRICTIONS",
        "LICENSE": "IS PRIVATE",
        "INTEGRATION ": "NOT APPLICABLE "
    },
    {
        "ENTITY": "SIICONCATEL",
        "TOOL-NAME": "Sample Application:  V&V for ESG investment system by SII CONCATEL/NC",
        "FOCUS": "WP4 - PATTERN RECOGNITION",
        "DESCRIPTION": "integratioin and orchestration of  all the ML-based components from the SUT, together with the components and tools to be developed for credibility assessment, explainability and test generation and prioritization within a cohesive MLOps workflow",
        "REQUIREMENTS": "SAMPLE APPLICATION, CONTACT OWNER",
        "RESTRICTIONS": "NO RESTRICTIONS",
        "LICENSE": "IS PRIVATE",
        "INTEGRATION ": "NOT APPLICABLE "
    },
    {
        "ENTITY": "EKKONO",
        "TOOL-NAME": "Fault analysis and anomaly detection",
        "FOCUS": "WP4 - DATA ANALYTICS IN ENGINEERING AND OPERATION",
        "DESCRIPTION": "Extended the CRISP-DM framework into a refined version for edge ML applications, with specific steps focused on the deployment phase of ML models (MLOps).",
        "REQUIREMENTS": "SAMPLE APPLICATION, CONTACT OWNER",
        "RESTRICTIONS": "NO RESTRICTIONS",
        "LICENSE": "IS PRIVATE",
        "INTEGRATION ": "NOT APPLICABLE "
    }
]
  const [selectedTool, setSelected] = useState(tools[0])

  return (
    <>
      {ToolHeader("Data-Driven Engineering")}
      

      <div className="relative m-auto  w-[340px] sm:w-[480px] md:w-[490px] lg:w-[800px]">
        <div className="m-auto mt-16 mb-16 w-[340px] sm:w-[400px] md:w-[490px] lg:w-[800px]">
          <div className="relative">
            <img className="w-full" src="/img/tool2.png" alt="" />
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
export default tool3;
