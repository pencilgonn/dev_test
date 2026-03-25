const Business = () => {
  return (
    <div className="w-1/2 flex flex-col">
      <h2 className="text-2xl text-white font-medium shrink">Business</h2>
      <div className="mt-3 grow bg-white/10 backdrop-blur-lg rounded-xl px-4 py-3">
        <div className="flex justify-between">
          <p className="text-xl font-medium text-white">Target Savings</p>
          <p className="text-primary p-[5px] border rounded-md border-white/50">
            $1,000,000.00
          </p>
        </div>
        <div className="flex space-x-10 mt-3">
          <div className="w-1/2">
            <p className="text-lg text-white">Toal Savings</p>
            <p className="text-white">
              <span className="text-primary">$</span>
              1,000,000.00
            </p>
            <div className="mt-2 relative mb-3 rounded-full w-full h-3 bg-black/80">
              <span className="absolute top-0 left-0 bottom-0 w-[89%] bg-primary rounded-full"></span>
            </div>
          </div>
          <div className="size-25 bg-white relative rounded-full flex progress__circle">
            <svg className="-rotate-90">
              <circle cx="45" cy="45" r="45"></circle>
              <circle cx="45" cy="45" r="45"></circle>
            </svg>
            <span className="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 font-medium">
              65%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
