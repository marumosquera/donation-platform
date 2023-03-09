import React from "react";
import './DonationCard.css';
import {VscVerifiedFilled} from 'react-icons/vsc'
import { DonationContext } from "../../context/Donation";
import { useContext } from "react";
import { allowance } from "../../utils/contract";
export const DonationCard = () => {

  const {getIncreaseAllowance, getTransferFrom, allowanceData, checkAllowance, donationAmount, setDonationAmount, checkBalance, balance, txConfirmed, txHash, txInit} = useContext(DonationContext)


  return (
   
    <div className="p-20">
   <div className="flex donation-card">
      <div className="w-1/2 h-full bg-slate-50 p-10 donation-card-1">
        <div className="h-1/3">
          <img src="./assets/charity.avif" alt="" className="charity-img"/>
        </div>
        <div className="h-1/3">
          <div className="flex">
            <VscVerifiedFilled/>
            <span>verified</span>
          </div>
          <div>
            <span>address:</span>
          </div>
          <div>
            <p>PiltriAid Charity</p>
            <p>piltri team & co</p>
          </div>
        </div>
        <div className="h-1/3">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <p>Raised: $20,000</p>
        </div>
      </div>
      <div className="w-1/2 bg-slate-200 p-10 donation-card-2">
        <div className="h-1/3">
          <p>Donate with:</p>
          <p>USDC</p>
          <p>Your balance is: {balance}</p>
        </div>
        <div className="h-1/3">
          <div className="flex">
            <p>allowance:</p>
            <p> {allowanceData}</p>
          </div>
          <div>
            <p> donate: </p>
            <div className="flex">
              <p className="money m-5" onClick={()=>setDonationAmount(100)}>100</p>
              <p className="money m-5" onClick={()=>setDonationAmount(500)}>500</p>
              <p className="money m-5" onClick={()=>setDonationAmount(1000)}>1000</p>
              <p className="money m-5" onClick={()=>setDonationAmount(5000)}>5000</p>
            </div>
            {(allowanceData >  donationAmount)
              ? <>
                <button onClick={()=> getTransferFrom()} class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">DONATE</button>
              </>
              : <>
               <button onClick={()=> getIncreaseAllowance()} class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">INCREASE ALLOWANCE</button>
              </>
            }
          
          </div>
        </div>
        <div className="h-1/3">
          <div>

          </div>
          <div>
            <div className="flex">
              <div>
                <p>1</p>
                <p>Select donation amount</p>
              </div>
              <div>
                <p>2</p>
                <p>Approve in metamask</p>
              </div>
              <div>
                <p>3</p>
                <p>Await transaction</p>
              </div>
              <div>
                <p>4</p>
                <p>Successful transaction</p>
              </div>
            </div>
            {!txConfirmed
                ?!txInit
                    ?<>
                        <div>
                         
                        </div>
                    </>
                    : txHash !== undefined
                        ?<>
                            {/* remember to remove the rinkeby from the link when deploying to production */}
                            <p>Claim transaction is being processed. You can view your transaction 
                            <a href={"https://goerli.etherscan.io/tx/" + txHash} target="_blank" rel="noopener noreferrer" >here</a>
                            </p>
                        </>
                        :<>
                            <p>Confirm transaction in your wallet to proceed.</p>
                        </>
                :<>
                <p>Congratulations.</p>
                </> 
                
         }
          </div>
        </div>
      </div>
    </div>
 
    </div>
  );
};
