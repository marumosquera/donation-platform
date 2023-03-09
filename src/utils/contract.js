
import { ethers } from "ethers";
import { abi } from "./abi.js";

// production
// const address = "";

// test
const address = "0x07865c6E87B9F70255377e024ace6630C1Eaa37F";


const initContracts = () => {
  
  if (!window.ethereum) {
    const infuraKey = "77801396f7c344d398cbdbd0ef97ce0d"
    const url = `https://goerli.infura.io/v3/${infuraKey}`;
    var provider = new ethers.providers.JsonRpcProvider(url);
    const contract = new ethers.Contract(address, abi, provider);
    return { contract };
  } else {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(address, abi, provider.getSigner());
    return { contract };
  }
};

export const balanceOf = async (address) => {
    const { contract } = initContracts();
    const balanceOf = await contract.balanceOf(address)
    return balanceOf;
  };

  export const allowance = async (address) => {
    const { contract } = initContracts();
    const balanceOf = await contract.allowance(address, address)
    return balanceOf;
  };

  export const increaseAllowance = async (address, amount) => {
    const { contract } = initContracts();
    const increaseAllowance = await contract.increaseAllowance(address, amount)
    return increaseAllowance;
  };


  export const transferFrom = async (from, to, amount) => {
    const { contract } = initContracts();
    const transferFrom = await contract.transferFrom(from, to, amount)
    return transferFrom;
  };