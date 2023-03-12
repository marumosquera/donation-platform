import { createContext, useEffect, useState } from "react";
import { useAccount, useConnect, useEnsName } from "wagmi";
import { balanceOf, allowance, increaseAllowance, transferFrom } from "../utils/contract";

import { ToastContainer, toast, Zoom, Bounce } from "react-toastify"
const DonationContext = createContext()

const DonationProvider = ({children}) => {
    const [errorMsg, setErrorMsg] = useState("ERROR")
    const { address, isConnected } = useAccount();
    const [balance, setBalance] = useState();
    const [allowanceData, setAllowanceData] = useState();
    const [donationAmount, setDonationAmount] = useState();
    const [txInit, setTxInit] = useState(false)
    const [txHash, setTxHash] = useState(undefined)
    const [txConfirmed, setTxConfirmed] = useState(false)
  
    const checkBalance = async () => {
      balanceOf(address)
        .then((res) => {
          setBalance(res.toNumber());
        })
        .catch((e) => {
          console.log(e);
        });
    };
  
    const checkAllowance = async () => {
      allowance(address)
        .then((res) => {
          setAllowanceData(res.toNumber());
        })
        .catch((e) => {
          console.log(e);
        });
    };
  
    const getIncreaseAllowance = async () => {
        setTxInit(true)
      increaseAllowance(address, donationAmount)
        .then(async (txn) => {
          console.log(txn)
          setTxHash(txn.hash)
          const txnInfo = await txn.wait();
          if (txnInfo.confirmations == 1) {
            setTxConfirmed(true)
        }
        
        })
        .catch((e) => {
          console.log(e);
        });
    };
  
  
    const getTransferFrom = async () => {
        setTxInit(true)
      transferFrom(address, "0x885Af893004B4405Dc18af1A4147DCDCBdA62b50", donationAmount)
        .then(async (txn) => {
          console.log(txn)
          setTxHash(txn.hash)
          const txnInfo = await txn.wait();
          if (txnInfo.confirmations == 1) {
            setTxConfirmed(true)
        }
        
        })
        .catch((e) => {
          console.log(e);
          if (e.error) {
            setErrorMsg(e.error.message);
            toast.error(e.error.message);
        } else {
            setErrorMsg(e.message);
            toast.error(e.message);
            //styles can be added to toast 
            //i.e: toast.error(e.message, { theme: 'dark', position: "bottom-center", autoClose: 5000, closeOnClick: true, pauseOnHover: true, });
        }
        });
    };

    useEffect(()=>{
        checkAllowance()
        checkBalance()
    }, [])


    const data = {
       checkAllowance,
       checkBalance,
       getIncreaseAllowance,
       getTransferFrom,
       donationAmount,
       setDonationAmount,
       allowanceData,
       setAllowanceData,
       balance,
       setBalance,
       txConfirmed,
       txHash,
       txInit,
       errorMsg
    }

    return(
    
        <DonationContext.Provider value={data}>
            {children}
        </DonationContext.Provider>
    )
}

export default DonationProvider

export {DonationContext}