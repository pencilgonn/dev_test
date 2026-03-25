import { HandCoins } from "lucide-react";
import Image from "next/image";

const Transaction = () => {
  return (
    <div className="mt-10 relative">
      <h2 className="text-3xl text-white">Month Transaction</h2>
      <div className="bg-white/10 p-4 rounded-xl mt-4">
        <HandCoins
          size={100}
          strokeWidth={1}
          className="absolute top-[65%] -translate-y-1/2 left-1/2 -translate-x-1/2 text-white/10"
        />

        <div className="flex items-center justify-between relative">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/avatar.jpg"
              alt="avatar"
              width={50}
              height={50}
              className="rounded-full aspect-square object-cover"
            />
            <p className="text-xl font-medium text-white">pencilgonn</p>
          </div>
          <span className="text-white">January Salary</span>
        </div>
        <div className="mt-4 flex items-center justify-between relative">
          <p className="text-white">15.01.2026 13:30AM</p>
          <span className="text-white inline-block bg-primary rounded-full px-4 py-1.5 shadow font-medium">
            $1.200.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
