"use client";

import { useMemo, useRef } from "react";
import Business from "./components/Business";
import { GlassElement } from "./components/Button";
import Goals from "./components/Goals";
import Modal from "./components/Modal";
import Statistic from "./components/Statistic";
import StatisticChart from "./components/StatisticChart";
import Transaction from "./components/Transaction";
import UserCard from "./components/UserCard";

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const width = useMemo(() => {
    if (!containerRef.current) return 0;
    return containerRef.current.getBoundingClientRect().width;
  }, [containerRef.current]);

  return (
    <div className="flex space-x-10">
      <div className="w-5/8">
        <h1 className="text-4xl font-semibold mb-8 mt-4 text-white">
          My Dashboard
        </h1>
        <Statistic />
        <StatisticChart />
        <div className="flex space-x-10 justify-between mt-10">
          <Goals />
          <Business />
        </div>
      </div>
      <div className="w-3/8" ref={containerRef}>
        <UserCard />
        <Transaction />

        <GlassElement
          className="mt-6"
          width={width}
          height={50}
          radius={50}
          depth={10}
          blur={1}
          chromaticAberration={1}
        >
          <div className="absolute top-1/2 z-1 -translate-y-1/2 font-medium left-1/2 -translate-x-1/2 h-[calc(100%-8px)] w-[calc(100%-8px)] bg-white/80 backdrop-blur rounded-full flex items-center justify-center">
            See All Transaction
          </div>
        </GlassElement>
      </div>

      <Modal />
    </div>
  );
};

export default Page;
