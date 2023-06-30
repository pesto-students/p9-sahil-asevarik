import { Link } from "react-router-dom";

const NavBar = (params)=>{
  return (
  <nav class="nav-bar">
    <h1>Shortly</h1>
    <Link to={"/"}>Home</Link>
    <Link to={"/contactUs"}>ContactUs</Link>
    </nav>
  );
}
export default NavBar;
