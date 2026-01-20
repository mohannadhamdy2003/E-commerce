import Header from "@/components/Dashboard/Header";
import Sidebar from "@/components/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="min-h-screen ">
      <div className="min-h-screen flex">
        {/* side bar */}
        <aside className="hidden md:block w-64 border-r bg-white">
          <Sidebar/>
        </aside>

        {/* header && content */}
        <main className="flex-1 flex flex-col">
          <header className="h-16 border-b bg-white flex items-center justify-center px-6">
            {/* <UserMenu /> */}
            <Header />
          </header>
          {/* content */}
          <section className="flex-1 p-4  md:p-6 lg:p-8">
            {/*<Users/> */}
            <Outlet/>
          </section>
        </main>
      </div>
    </div>
  );
};
export default AdminLayout;
