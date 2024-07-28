import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DoughnutChart";
import Image from "next/image";

export default function TotalBalanceBox({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) {
  return (
    <section className="total-balance relative p-8 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="total-balance-chart mb-4">
        <DoughnutChart accounts={accounts} />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2 text-2xl font-bold">
          Bank Accounts: {totalBanks}
        </h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label text-lg text-gray-600">
            Total Current Balance
          </p>
          <div className="total-balance-amount flex items-center gap-2">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 flex items-center gap-2">
        <p className="text-sm md:text-base text-gray-700 italic">
          Your trusted finance partner
        </p>
        <Image
          src="/icons/logo.svg"
          width={34}
          height={34}
          alt="Horizon logo"
          className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
        />
      </div>
    </section>
  );
}
