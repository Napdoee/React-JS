import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

const Layout = () => (
  <section className="pt-24 pb-16 h-screen bg-base-100">
    <div className="container mx-auto">
      <h1 className="text-3xl text-slate-100 text-border font-bold text-center mb-5 drop-shadow-lg">
        Welcome to My API Playground
      </h1>
      <Outlet />
      {/*<Navbar />*/}
    </div>
  </section>
);

export default Layout;