import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function BaseLayout() {
  return (
    <section>
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}
