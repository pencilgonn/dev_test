"use client";

import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ArrowDownToLine,
  Bell,
  Blocks,
  EllipsisVertical,
  PictureInPicture,
  ReceiptText,
} from "lucide-react";
import { showModal } from "./Modal";

const UserCard = () => {
  const actions = [
    {
      label: "Transfer",
      icon: <Blocks size={30} />,
      action: () => showModal(),
    },
    {
      label: "Receive",
      icon: <ArrowDownToLine size={30} />,
      action: () => showModal(),
    },
    {
      label: "Bill",
      icon: <ReceiptText size={30} />,
      action: () => showModal(),
    },
    {
      label: "Topup",
      icon: <PictureInPicture size={30} />,
      action: () => showModal(),
    },
  ];
  return (
    <div className="bg-white/10 relative backdrop-blur-sm rounded-xl pb-14 px-8 pt-10 flex flex-col items-center space-y-8">
      {/* Notify */}
      <Popover>
        <PopoverTrigger asChild>
          <div className="text-white p-1 absolute top-6 left-6 cursor-pointer">
            <Bell />
            <span className="absolute size-2 rounded-full bg-red-500 top-1 right-1"></span>
          </div>
        </PopoverTrigger>
        <PopoverContent align="start" className="bg-white/10 backdrop-blur-lg">
          <PopoverHeader hidden>
            <PopoverTitle></PopoverTitle>
            <PopoverDescription></PopoverDescription>
          </PopoverHeader>
          <div className="flex flex-col space-y-2 text-white">Notify</div>
        </PopoverContent>
      </Popover>

      {/* Menu */}
      <Popover>
        <PopoverTrigger asChild>
          <div className="text-white p-1 absolute top-6 right-6 cursor-pointer">
            <EllipsisVertical />
          </div>
        </PopoverTrigger>
        <PopoverContent align="end" className="bg-white/10 backdrop-blur-lg">
          <PopoverHeader hidden>
            <PopoverTitle></PopoverTitle>
            <PopoverDescription></PopoverDescription>
          </PopoverHeader>
          <div className="flex flex-col space-y-2 text-white">Menu</div>
        </PopoverContent>
      </Popover>

      <div className="relative">
        <Image
          src="/images/avatar.jpg"
          alt="user"
          width={90}
          height={90}
          className="aspect-square object-cover rounded-full"
        />
        <span className="text-white bg-black/50 p-2 rounded-lg absolute text-sm left-1/2 -translate-x-1/2 whitespace-nowrap -bottom-6">
          Exclusive Card
        </span>
      </div>

      <h2 className="text-white text-3xl">Pencilgon</h2>

      <div className="flex justify-between items-center w-full">
        {actions.map((action) => (
          <div
            key={action.label}
            className="flex flex-col items-center"
            onClick={action.action}
          >
            <div className="size-17 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors cursor-pointer">
              {action.icon}
            </div>
            <span className="text-white mt-2">{action.label}</span>
          </div>
        ))}
      </div>

      <div className="w-full relative">
        <Image
          src="/images/card.png"
          alt="card"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-cover rounded-xl relative z-10"
        />
        <span className="absolute inset-0 bg-[#748894] scale-95 -bottom-4 -z-10 rounded-xl"></span>
        <span className="absolute inset-0 bg-[#98909b] scale-90 -bottom-8 -z-20 rounded-xl"></span>
        <span className="absolute inset-0 bg-[#665663] scale-85 -bottom-12 -z-30 rounded-xl"></span>
      </div>
    </div>
  );
};

export default UserCard;
