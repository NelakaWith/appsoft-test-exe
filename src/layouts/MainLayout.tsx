const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12 text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
