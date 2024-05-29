import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

export const SUPPORTED_CHAIN_ID = 4202;

const liskSepolia = {
  chainId: 4202,
  name: "Lisk Sepolia Testnet",
  currency: "ETH",
  explorerUrl: "https://sepolia-blockscout.lisk.com",
  rpcUrl: import.meta.env.VITE_RPC_URL,
};

const metadata = {
  name: "StreamFlow",
  description: "A Token Streaming Application",
  url: "http://localhost:5173/", // origin must match your domain & subdomain
  icons: ["http://localhost:5173/"],
};

export const configWeb3Modal = () =>
  createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [liskSepolia],
    projectId: import.meta.env.VITE_PROJECT_ID,
    enableAnalytics: false, // Optional - defaults to your Cloud configuration
  });
