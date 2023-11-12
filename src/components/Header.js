import {Link} from "react-router-dom";
import Logo from '../img/logo.jpg'

export default function Header() {
    return (
        <nav className="flex items-center flex-wrap bg-main p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img src={Logo} className="fill-current h-24 w-24 mr-2" width="256" height="256" alt="Logo"/>
            </div>
            <div className="flex items-center flex-shrink-0 text-white mr-6 justify-between">
                <MenuButton path = "/" text="Homepage"/>
                <MenuButton path = "About" text="About"/>
            </div>
        </nav>

    );
}

export function MenuButton(props){
    return(
        <div>
            <Link to={props.path} className="flex items-center px-3 py-2 text-white hover:text-secondary">
                {props.text}
            </Link>
        </div>
    );
}