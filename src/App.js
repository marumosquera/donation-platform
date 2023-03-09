import logo from "./logo.svg";
import "./App.css";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import { ConnectWallet } from "./components/ConnectWallet/ConnectWallet";
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar/NavBar";
import DonationProvider from "./context/Donation";

const chains = [arbitrum, mainnet, polygon];
const projectId = "41557e3b3f0f43cc44309c3fdef4241e";

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);

function App() {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <DonationProvider>
          <NavBar />
          <Home />
        </DonationProvider>
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}

export default App;
