const Goals = () => {
  return (
    <div className="w-1/2 flex flex-col">
      <h2 className="text-2xl text-white font-medium shrink">My Goals</h2>
      <div className="mt-3 grow bg-white/15 backdrop-blur-lg rounded-xl px-3 py-5 flex space-x-4">
        <div className="flex w-1/2 flex-col items-center justify-between p-3 backdrop-blur-sm rounded-lg">
          <p className="text-3xl text-white font-medium">60%</p>
          <div className="mt-2 relative mb-3 rounded-full w-full h-3 bg-black/80">
            <span className="absolute top-0 left-0 bottom-0 w-[60%] bg-primary rounded-full"></span>
          </div>
          <p className="text-sm text-white/70">Travel Abroad</p>
        </div>
        <div className="flex w-1/2 flex-col items-center justify-between p-3 backdrop-blur-sm rounded-lg">
          <p className="text-3xl text-white font-medium">89%</p>
          <div className="mt-2 relative mb-3 rounded-full w-full h-3 bg-black/80">
            <span className="absolute top-0 left-0 bottom-0 w-[89%] bg-primary rounded-full"></span>
          </div>
          <p className="text-sm text-white/70">Real Estate</p>
        </div>
      </div>
    </div>
  );
};

export default Goals;
