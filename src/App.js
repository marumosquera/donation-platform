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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Projects } from "./pages/Projects";
import { UserProfile } from "./pages/UserProfile";
import { Donate } from "./pages/Donate";
import { GrEmergency } from "react-icons/gr";

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
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/my-profile" element={<UserProfile />} />
              <Route path="/donate/:projectAddress" element={<Donate />} />
            </Routes>
      
            <Footer />
          </BrowserRouter>
        </DonationProvider>
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient}  themeVariables={{
    '--w3m-font-family': 'Open Sans, sans-serif',
    '--w3m-accent-color': '#6A23E7',
  }}/>
    </>
  );
}

export default App;
