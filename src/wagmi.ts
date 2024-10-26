import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
  bsc,
  bscTestnet,
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: '5a45996220b26f2f2dfd76b10942d347',
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    bsc, // BSC mainnet
    bscTestnet, // BSC testnet
    base,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: true,
});