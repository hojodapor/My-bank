import Copy from "@/components/Copy";
import Image from "next/image";
import React from "react";

const CryptocurrencyWallet = () => {
  return (
    <div className="flex items-center justify-center h-screen gap-10 bg-gray-100">
      <div>
        <img
          src="/icons/usdt.png"
          alt="Cryptocurrency 1"
          className="mx-4 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
        />
        <Copy title={"USDT wallet address"} />
      </div>

      <div>
        <img
          src="/icons/bitcoin.png"
          alt="Cryptocurrency 2"
          className="mx-4 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
        />
        <Copy title={"BTC wallet address"} />
      </div>

      <div>
        <img
          src="/icons/ethereum.svg"
          alt="Cryptocurrency 3"
          className="mx-4 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
        />
        <Copy title={"ETH wallet address"} />
      </div>

      <div>
        <img
          src="/icons/solana.png"
          alt="Cryptocurrency 4"
          className="mx-4 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
        />
        <Copy title={"SOL wallet address"} />
      </div>
    </div>
  );
};

export default CryptocurrencyWallet;
