"use client";

import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";

const chartData = [
  { month: "January", desktop: 120, mobile: 150 },
  { month: "February", desktop: 150, mobile: 100 },
  { month: "March", desktop: 150, mobile: 140 },
  { month: "April", desktop: 120, mobile: 180 },
  { month: "May", desktop: 209, mobile: 190 },
  { month: "June", desktop: 200, mobile: 170 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const StatisticChart = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("all");

  const selects = [
    {
      label: "All Transaction",
      value: "all",
    },
    {
      label: "Income",
      value: "income",
    },
    {
      label: "Expense",
      value: "expense",
    },
  ];

  const selected = useMemo(() => {
    return selects.find((s) => s.value === active)?.label || "All Transaction";
  }, [active]);

  const onSelect = (value: string) => {
    setActive(value);
    setOpen(false);
  };

  return (
    <div className="mt-10">
      <div className="flex items-end justify-between">
        <h2 className="text-3xl text-white font-medium">Statistic</h2>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <div className="flex items-center space-x-2 p-2 rounded-full border border-white text-white">
              <span>{selected}</span>
              <ChevronDown />
            </div>
          </PopoverTrigger>
          <PopoverContent align="end" className="bg-white/10 backdrop-blur-lg">
            <PopoverHeader hidden>
              <PopoverTitle></PopoverTitle>
              <PopoverDescription></PopoverDescription>
            </PopoverHeader>
            <div className="flex flex-col space-y-2">
              {selects.map((s) => (
                <div
                  key={s.value}
                  onClick={() => onSelect(s.value)}
                  className=" text-white py-2 px-3 rounded-md transition-colors hover:bg-white/20"
                >
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Chart */}
      <div
        className={cn(
          "bg-white/2 rounded-xl p-10 pt-6 mt-10 backdrop-blur-lg [box-shadow:0_0px_10px_0_rgba(0,0,0,0.2)]",
          "after:content-[' '] after:absolute after:inset-0 after:-top-2 after:bg-white/5 after:rounded-xl after:backdrop-blur-lg after:z-[-1]",
        )}
      >
        <div className="flex justify-between">
          <div>
            <p className="text-xl font-medium text-white mt-2">
              Top Contributor
            </p>
            <p className="text-white/70 text-lg mt-3">
              Top half-year Earning and Expreses souce
            </p>
          </div>
          <div className="text-white flex flex-col items-end">
            <div className="flex items-center space-x-2">
              <p>Graceries</p>
              <span className="size-3 rounded-full bg-sky-300 inline-block"></span>
            </div>
            <div className="flex items-center space-x-2">
              <p>Invest Corparate</p>
              <span className="size-3 rounded-full bg-green-300 inline-block"></span>
            </div>
            <div className="flex items-center space-x-2">
              <p>Hobbies</p>
              <span className="size-3 rounded-full bg-primary inline-block"></span>
            </div>
          </div>
        </div>
        <div>
          <ChartContainer
            config={chartConfig}
            style={{ height: 250 }}
            className="w-full"
          >
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
                top: 20,
              }}
            >
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tick={{ fill: "#fff", fontSize: 16 }}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="desktop"
                type="natural"
                stroke="#fb8233"
                strokeWidth={3}
                dot={false}
              />
              <Line
                dataKey="mobile"
                type="natural"
                stroke="#fff"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
};

export default StatisticChart;
