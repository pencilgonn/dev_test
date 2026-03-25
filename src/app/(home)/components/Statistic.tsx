import { BadgeDollarSign, HandCoins, PiggyBank } from "lucide-react";

const Statistic = () => {
  const statistics = [
    {
      label: "Total Balance",
      number: 12345817,
      icon: <BadgeDollarSign strokeWidth={1} />,
    },
    {
      label: "Earnings",
      number: 12345817,
      icon: <HandCoins strokeWidth={1} />,
    },
    {
      label: "Expenses",
      number: 12345817,
      icon: <PiggyBank strokeWidth={1} />,
    },
  ];

  return (
    <div className="flex items-center justify-between flex-wrap px-5 pt-4 pb-6 rounded-lg bg-linear-[175deg] from-[#9da1a1] to-[#4c4d4f]">
      {statistics.map((statistic) => (
        <div
          key={statistic.label}
          className="text-white flex items-center space-x-4"
        >
          <span className="size-12 rounded-full bg-[#575a61] flex items-center justify-center">
            {statistic.icon}
          </span>
          <div>
            <p>{statistic.label}</p>
            <p className="text-lg font-medium">
              ${statistic.number.toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statistic;
