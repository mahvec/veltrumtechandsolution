import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function BaseLayout() {
  return (
    <section className='selection:bg-black selection:text-white'>
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}
