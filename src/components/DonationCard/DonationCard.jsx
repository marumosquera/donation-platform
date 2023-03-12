import React from "react";
import './DonationCard.css';
import {VscVerifiedFilled} from 'react-icons/vsc'
import { DonationContext } from "../../context/Donation";
import { useContext } from "react";
import { allowance } from "../../utils/contract";
import {TbCoins} from 'react-icons/tb';

export const DonationCard = () => {

  const {getIncreaseAllowance, getTransferFrom, allowanceData, checkAllowance, donationAmount, setDonationAmount, checkBalance, balance, txConfirmed, txHash, txInit} = useContext(DonationContext)


  return (
   
    <div className="donation-container">
   <div className="flex donation-card">
      <div className="w-1/2 h-full bg-don-card p-10 donation-card-1">
        <div className="h-2/4">
          <img src="./assets/charity.avif" alt="" className="charity-img"/>
        </div>
        <div className="h-1/4">
          <div className="flex verified">
            <VscVerifiedFilled/>
            <span>verified</span>
          </div>
          <div>
              <span className="text-sm"> 0x885Af893004B4405Dc18af1A4147DCDCBdA62b50 </span>
          </div>
          <div>
            <p className="font-black">PiltriAid Charity</p>
            <p className="font-bold">piltri team & co</p>
          </div>
        </div>
        <div className="h-1/4">
          <p className="text-xs text-slate-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <p className="text-xs mt-2">Raised: $20,000</p>
        </div>
      </div>
      <div className="w-1/2 bg-slate-200 p-10 donation-card-2">
        <div className="h-1/3 m-5">
          <p className="donate-with mb-10">Donate with: <span>USDC</span> </p>
          <p className="flex icon">
            <span className="mr-4">
            Your balance is:
            </span>
             <TbCoins/> {balance}
            </p>
        </div>
        <div className="h-1/3">
          <div className="flex allowance">
            <p>Allowance:</p>
            <p className="flex icon"> <TbCoins/> {allowanceData}</p>
          </div>
          <div>
            <p className="font-medium"> DONATE: </p>
            <div className="flex">
              <p onClick={()=>setDonationAmount(100)} className={donationAmount==100 ? `active-money` : `inactive-money`}>$100</p>
              <p onClick={()=>setDonationAmount(500)} className={donationAmount==500 ? `active-money` : `inactive-money`}>$500</p>
              <p onClick={()=>setDonationAmount(1000)} className={donationAmount==1000 ? `active-money` : `inactive-money`}>$1000</p>
              <p onClick={()=>setDonationAmount(5000)} className={donationAmount==5000 ? `active-money` : `inactive-money`}>$5000</p>
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
            <div className="flex mt-5">
              <div>
             
                <p className={!txInit ? `active` : `inactive`}>Select donation amount</p>
              </div>
              <div>
             
                <p className={txInit ? `active` : `inactive`}>Approve in metamask</p>
              </div>
              <div>
          
                <p className={txHash ? `active` : `inactive`}>Await transaction</p>
              </div>
              <div>
        
                <p className={txConfirmed ? `active` : `inactive`}>Successful transaction</p>
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
                            <a href={"https://goerli.etherscan.io/tx/" + txHash} target="_blank" rel="noopener noreferrer" className="mr-2">here</a>
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
