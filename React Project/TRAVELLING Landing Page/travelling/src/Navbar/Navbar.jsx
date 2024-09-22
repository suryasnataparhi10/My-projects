import './Navbar.css'
import { MdCardTravel } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";


export const Navbar = () => {
  return (
    <div className="nav">
        <div className="nav-logo"> Travel<MdCardTravel />
            <ul className="nav-menu">
                <li><a href="https://www.agoda.com/?cid=1914936&tag=0b741b21-55b1-42bf-8a04-ecd5597320fd&msclkid=69e85888fe5b1a3be2e13e6ea64a8980&ds=Vm3QFxdQ1WqZc7Cw">Home</a></li>
                <li><a href="https://www.agoda.com/activities?cid=1914936&tag=0b741b21-55b1-42bf-8a04-ecd5597320fd&msclkid=69e85888fe5b1a3be2e13e6ea64a8980">Service</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Book</a></li>
                <li><a href="#"><CgMenuGridO /></a></li>
            </ul>
        </div>
    </div>
  )
}
