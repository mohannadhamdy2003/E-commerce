const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-400">
      <div className="min-h-screen flex">
        {/* side bar */}
        <aside className="hidden md:block w-64 border-r bg-white"></aside>

        {/* header && content */}
        <main className="flex-1 flex flex-col">
          <header className="h-16 border-b bg-white flex items-center px-6">
            {/* <UserMenu /> */}
          </header>
          {/* content */}
          <section className="flex-1 p-4  md:p-6 lg:p-8"></section>
        </main>
      </div>
    </div>
  );
};
export default AdminLayout;
