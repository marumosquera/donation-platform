import React from "react";
import "./DonationCard.css";
import { VscVerifiedFilled } from "react-icons/vsc";
import { DonationContext } from "../../context/Donation";
import { useContext } from "react";
import { allowance } from "../../utils/contract";
import { TbCoins } from "react-icons/tb";
import { SiTwitter } from "react-icons/si";

export const DonationCard = ({ project }) => {
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

  return (
    <div className="donation-container">
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
              <p className="font-bold text-gray-500 text-md">{project.projectOwner}</p>
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
           <div className="w-1/2 bg-slate-100 p-10 donation-card-2  ">
          <div className="h-3/6">
            <p className="donate-with mb-6">Donate with </p>
            <div className="flex">
              <select
                id="tokens"
                className=" text-gray-900 text-sm focus:ring-gray-500 focus:border-gray-700 block w-full p-2.5 "
              >
                <option selected>Choose a token</option>
                <option value="USDC">USDC</option>
                <option value="USDT">USDT</option>
                <option value="DAI">DAI</option>
                <option value="ETH">ETH</option>
              </select>
              <input type="number" placeholder="Amount"></input>
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
                        className="mr-2"
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
              <span>
                Can't donate? Don't worry, sharing is caring! Help us spread the word <SiTwitter className="inline-block text-sky-400" />
              </span>
            </div>
          </div>
         
        </div>
        :  <div className="w-1/2 bg-slate-200 p-10 donation-card-2">
            <p>Together, we can make a difference. Share your donation on Twitter and show your support for our cause.</p>
        </div>

        }
       
      
      </div>
    </div>
  );
};
