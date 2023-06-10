import React from "react";
import "./DonationCard.css";
import { VscVerifiedFilled } from "react-icons/vsc";
import { DonationContext } from "../../context/Donation";
import { useContext } from "react";
import { allowance } from "../../utils/contract";
import { TbCoins } from "react-icons/tb";
import { SiTwitter } from "react-icons/si";
import bear from '../assets/bear.svg';
import logo from "../../assets/logopiltri.svg";
import emprear from "../../assets/emprear.svg"

export const DonationCard = () => {
  const {
    getIncreaseAllowance,
    getTransferFrom,
    allowanceData,
    checkAllowance,
    donationAmount,
    setDonationAmount,
    checkBalance,
    balance,
    txConfirmed,
    txHash,
    txInit,
  } = useContext(DonationContext);

  const handleChange = (e) => {
    const inputData = e.target.value
    console.log(inputData)
    setDonationAmount(inputData);
  };
  const project = {
    image: emprear,
    projectName: "Emprear",
    address: "0x885aF893004B4405Dc18af1A4147DCDCBbA62b50",
    projectBriefDescription: "Somos una ONG sin ﬁnes de lucro que, desde el año 2002, promueve el desarrollo de emprendedores y agentes de cambio en todas sus fases.Los detectamos, entrenamos y acompañamos para potenciar su capacidad creadora de valor económico y social para el país a través de programas de formación, vinculación tecnológica y gestión de oportunidades para que logren construir organizaciones más innovadoras.",


  }

  return (
    <div className="donation-container m-5">
      <div className="flex donation-card">
        <div className="w-1/2 bg-don-card donation-card-1">
          
          <div className="h-2/4">
            <img
              src={project.image}
              alt={project.projectName}
              className="charity-img"
            />
          </div>
          <div className="h-1/4 p-10 pt-5">
            <div className="flex verified">
              <VscVerifiedFilled className="text-lg"/>
              <span className="mr-1 ml-1">verified</span>
            </div>
            <div>
              <span className="text-sm"> {project.address} </span>
            </div>
            <div className="mt-2">
              <p className="font-black">{project.projectName}</p>
            </div>
          </div>
          <div className="h-1/4 p-10 pt-5">
            <p className="text-xs text-slate-400">
              {project.projectBriefDescription}
            </p>
            <p className="text-xs mt-2">{project.raisedAmount}</p>
          </div>
        </div>
        {!txConfirmed
          ?  
           <div className="w-1/2 p-10 donation-card-2  ">
          <div className="h-3/6">
            <p className="donate-with mb-6">Donate with </p>
            <div className="flex">
              <select
                id="tokens"
                className=" text-gray-900 text-sm focus:ring-gray-500 focus:border-gray-700 block w-full p-2.5 "
              >
                <option selected>Choose a token</option>
                <option value="USDC">USDC</option>
                
              </select>
              <input type="number" placeholder="Amount" onChange={(e)=>handleChange(e)} ></input>
            </div>
            <div>
              <p className="text-gray-400 text-xs mt-2">Available: <span className="strong-detail"> {balance} </span>  USDC </p>
            </div>
            <div className="text-gray-600 text-sm mt-2">
              Donating to <span className="strong-detail"> {project.projectName} </span>
            </div>
          </div>
          <div className="h-2/6">
          <div className="donation-process">
              {!txConfirmed ? (
                !txInit ? (
                  allowanceData > donationAmount ? (
                    <>
                      <button onClick={() => getTransferFrom()} className="donation-card-btn">
                        DONATE
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => getIncreaseAllowance()} className="donation-card-btn">
                        DONATE
                      </button>
                    </>
                  )
                ) : txHash !== undefined ? (
                  <>
                    {/* remember to remove the rinkeby from the link when deploying to production */}
                    <p>
                      Claim transaction is being processed. You can view your
                      transaction
                      <a
                        href={"https://goerli.etherscan.io/tx/" + txHash}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 decoration-lime-500 decoration-solid font-bold"
                      >
                        here
                      </a>
                    </p>
                  </>
                ) : (
                  <>
                    <p>Confirm transaction in your wallet to proceed.</p>
                  </>
                )
              ) : (
                <>
                  <p>Congratulations.</p>
                </>
              )}
            </div>
            </div>
          <div className="h-1/6">
           
          <div>
            <a href="https://ctt.ac/hL_VK" target="_blank">
              <span>
                Can't donate? Don't worry, sharing is caring! Help us spread the word <SiTwitter className="inline-block text-sky-400" />
              </span>
              </a>
            </div>
          </div>
         
        </div>
        :  <div className="w-1/2 bg-slate-200 p-10 donation-card-2">
            <h1 className="font-black text-center text-2xl mt-6">Thank you for your support! </h1>
            <p className="mt-10 font-medium mb-4">Your donation was successfully transfered to: <span className="font-semibold text-gray-500">{project.address} </span> </p>
            <img src={logo} className="ty-img"></img>
            
            <p className="mt-8 font-semibold text-center text-lg">Together, we can make a difference!</p>
            <a href="https://ctt.ac/Dlc21" target="_blank"> 
            <p className="mt-2 font-bold text-center text-lg">Share your donation on Twitter and show your support for our cause. <SiTwitter className="inline-block text-sky-400" /></p>
            </a>
       </div>

        }
       
      
      </div>
    </div>
  );
};
