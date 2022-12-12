import React from "react";
import { useState } from "react";
import { ToolHeader, Tooltip, TooltipInfo } from './tool1';

function tool2() {
  const tools = [
    
    {
        "ENTITY": "ING",
        "TOOL-NAME": "TESTAR by OUNL, UPV, ING and Marviq",
        "FOCUS": "WP3 - ML-DRIVEN TESTING FOR COMPLEX SYSTEMS",
        "DESCRIPTION": "New and enhanced features for testing mobile applications, parallel testing of web, distributed state model inference with shared database, change detection, TESTAR action selection, reporting and test oracles based on image recognition. ",
        "REQUIREMENTS": "TESTAR",
        "RESTRICTIONS": "THE ARTIFACT IS LIMITED TO A SPECIFIC ENVIRONMENT OR OS",
        "LICENSE": "IS OPEN SOURCE",
        "INTEGRATION ": "THIS IS A FRAMEWORK, NOT DESIGNED TO BE INTEGRATED IN A TOOLCHAIN "
    },
    {
        "ENTITY": "SALABS",
        "TOOL-NAME": "TestArchiver, ChangeEngine by Siili SALabs",
        "FOCUS": "WP3 - ML-DRIVEN TESTING FOR COMPLEX SYSTEMS",
        "DESCRIPTION": "Changes-failures-based test prioritization tool.",
        "REQUIREMENTS": "SQLITE orPOSTGRESQL, PYTHON",
        "RESTRICTIONS": "NO RESTRICTIONS",
        "LICENSE": "IS OPEN SOURCE",
        "INTEGRATION ": "CAN BE USED, DEPLOYED AND/OR INTEGRATED IN ANY TOOLCHAIN.  "
    },
    {
        "ENTITY": "F-SECURE, HU",
        "TOOL-NAME": "pytest-rts  by HU and F-Secure",
        "FOCUS": "WP3 - ML-DRIVEN TESTING FOR COMPLEX SYSTEMS",
        "DESCRIPTION": "Coverage-basedÂ testÂ prioritizationÂ tool for Python.",
        "REQUIREMENTS": "PYTHON, PYTEST",
        "RESTRICTIONS": "THE ARTIFACT IS LIMITED TO A SPECIFIC ENVIRONMENT OR OS",
        "LICENSE": "IS OPEN SOURCE",
        "INTEGRATION ": "CAN BE USED, DEPLOYED AND/OR INTEGRATED IN ANY TOOLCHAIN.  "
    },
    {
        "ENTITY": "F-SECURE, HU",
        "TOOL-NAME": "flaky-tests-analysis by HU and F-Secure",
        "FOCUS": "WP3 - TESTING WITH UNCERTAINTIES FOR COMPLEX SYSTEMS",
        "DESCRIPTION": "Visualize tests whose state changes most often, by processing historical xunit test results and checks which tests changes state most often.",
        "REQUIREMENTS": "PYTHON, XUIT",
        "RESTRICTIONS": "THE ARTIFACT IS LIMITED TO A SPECIFIC ENVIRONMENT OR OS",
        "LICENSE": "IS OPEN SOURCE",
        "INTEGRATION ": "THE ARTIFACT CAN BE INTEGRATED IN ANY TOOLCHAIN ENABLING COMMAND LINE PROGRAMS "
    },
    {
        "ENTITY": "F-SECURE, HU",
        "TOOL-NAME": "failures-analysis by HU and F-Secure",
        "FOCUS": "WP3 - ML-DRIVEN TESTING FOR COMPLEX SYSTEMS",
        "DESCRIPTION": "It provides fast and reliable way to find and group similar failures in your CI/CD pipeline.Visualise whichÂ testsÂ contains similar failures. ",
        "REQUIREMENTS": "PYTHON, XUIT",
        "RESTRICTIONS": "THE ARTIFACT IS LIMITED TO A SPECIFIC ENVIRONMENT OR OS",
        "LICENSE": "IS OPEN SOURCE",
        "INTEGRATION ": "THE ARTIFACT CAN BE INTEGRATED IN ANY TOOLCHAIN ENABLING COMMAND LINE PROGRAMS "
    },
    {
        "ENTITY": "F-SECURE",
        "TOOL-NAME": "Change-Analyzer by F-Secure",
        "FOCUS": "WP3 - ML-DRIVEN TESTING FOR COMPLEX SYSTEMS",
        "DESCRIPTION": null,
        "REQUIREMENTS": null,
        "RESTRICTIONS": null,
        "LICENSE": null,
        "INTEGRATION ": " "
    },
    {
        "ENTITY": "SOGETI",
        "TOOL-NAME": "CodeAssist",
        "FOCUS": "WP3 - ML-DRIVEN TESTING FOR COMPLEX SYSTEMS",
        "DESCRIPTION": "Quality tool that analyses python GIT repositories andÂ  incoming code changes",
        "REQUIREMENTS": "PYTHON, GITHUB, GITLAB",
        "RESTRICTIONS": "THE ARTIFACT IS LIMITED TO A SPECIFIC ENVIRONMENT OR OS",
        "LICENSE": "IS PRIVATE",
        "INTEGRATION ": "AN API OR ENDPOINT COULD BE DEPLOYED TO COMMUNICATE WITH THE ARTIFACT (LOAD, EXPORT DATA) "
    },
    {
        "ENTITY": "RISE",
        "TOOL-NAME": "RELOAD by RISE",
        "FOCUS": "WP3 - ML-DRIVEN TESTING FOR COMPLEX SYSTEMS",
        "DESCRIPTION": "An adaptive Reinforcement Learning-driven load testing agent which effectively learns how to tune the load of transactions.",
        "REQUIREMENTS": "PYTHON",
        "RESTRICTIONS": "THE ARTIFACT COULD BE USED AS AN ONLINE SERVICE OR ACCESSED VIA ONLINE API",
        "LICENSE": "IS PRIVATE",
        "INTEGRATION ": "CAN BE USED, DEPLOYED AND/OR INTEGRATED IN ANY TOOLCHAIN.  "
    },
    {
        "ENTITY": "PHILIPS-NL",
        "TOOL-NAME": "Operational Profile Driven Test Framework by Philips Netherlands",
        "FOCUS": "WP3 - ML-DRIVEN TESTING FOR COMPLEX SYSTEMS",
        "DESCRIPTION": "A framework to increase V&V coverage and efficiency, closer to customer use. ",
        "REQUIREMENTS": null,
        "RESTRICTIONS": "NO RESTRICTIONS",
        "LICENSE": "IS PRIVATE",
        "INTEGRATION ": "THIS IS A FRAMEWORK, NOT DESIGNED TO BE INTEGRATED IN A TOOLCHAIN "
    },
    {
        "ENTITY": "SIICONCATEL",
        "TOOL-NAME": "Test Prioritization for ESG-investment Evs by SII CONCATEL & NETCHECK",
        "FOCUS": "WP3 - ML-DRIVEN TESTING FOR COMPLEX SYSTEMS",
        "DESCRIPTION": "Prioritize test to better identify credibility and quality of content.",
        "REQUIREMENTS": "PYTHON",
        "RESTRICTIONS": "THE ARTIFACT COULD BE USED AS AN ONLINE SERVICE OR ACCESSED VIA ONLINE API",
        "LICENSE": "IS PRIVATE",
        "INTEGRATION ": "AN API OR ENDPOINT COULD BE DEPLOYED TO COMMUNICATE WITH THE ARTIFACT (LOAD, EXPORT DATA) "
    },
    {
        "ENTITY": "KEYLAND",
        "TOOL-NAME": "Anomaly Detection for Industrial Environments by Keyland",
        "FOCUS": "WP3 - ONLINE TESTING AND MONITORING FOR COMPLEX SYSTEMS",
        "DESCRIPTION": "Anomaly detection in industrial environments, having as SUT log data generated by injection moulding machine for thermoplastics",
        "REQUIREMENTS": "PYTHON",
        "RESTRICTIONS": "NO RESTRICTIONS",
        "LICENSE": "IS PRIVATE",
        "INTEGRATION ": "AN API OR ENDPOINT COULD BE DEPLOYED TO COMMUNICATE WITH THE ARTIFACT (LOAD, EXPORT DATA) "
    }
]

const [selectedTool, setSelected] = useState(tools[0])

  return (
    <>
      {ToolHeader("Complex Evolving Systems")}
      {/* business contianer circle */}

      <div className="relative m-auto">
        <div className="m-auto mt-16 w-[580px] ">
          <div className="relative">
            <img className="w-full" src="/img/tool3.png" alt="" />
          </div>
        </div>
      </div>
      <div className="absolute top-[200px] left-20 w-[300px] space-y-2 flex-wrap">
        {tools.map((tool) => (
          <Tooltip tooltipInfo={tool} setSelected={setSelected} />
          ))}
      </div>
      
      <div className="absolute top-[200px] right-20 w-[300px] space-y-2 flex-wrap">
        <TooltipInfo {...selectedTool} />
      </div>
    </>
  );
}
export default tool2;
