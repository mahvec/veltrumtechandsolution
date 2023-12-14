import { NavLink } from "react-router-dom";
import logo from "/veltrumLogo.svg";
export default function Navbar() {
  return (
    <div>
      <nav className="bg-white">
        <div className="w-[95%] mx-auto flex justify-between items-center py-4">
          <NavLink to="/onboarding">
            <img src={logo} alt="logo" className="h-[50px]" />
          </NavLink>
          <div className="flex items-center gap-5">
            <NavLink to="/onboarding" className="">
              Home
            </NavLink>
            <NavLink to="/about" className="">
              About
            </NavLink>
            <NavLink to="/contact" className="">
              Contact
            </NavLink>
            <NavLink to="/services" className="">
              Services
            </NavLink>
            <NavLink to="/projects" className="">
              Projects
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
