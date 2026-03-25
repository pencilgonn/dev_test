import Sidebar from "./Sidebar";

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grow flex space-x-15 overflow-hidden">
      <div className="shrink flex items-center">
        <Sidebar />
      </div>
      <div className="grow p-10 overflow-y-hidden flex flex-col border-2 rounded-2xl border-white/50 backdrop-blur-lg bg-[#fac665]/10">
        <div className="grow overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
