import React from "react";
import "../components/NavBar.css"

function NavBar(){
    return (
        <div>
            <nav>
                <div className="logo">Parcial DPS</div>
                <ul className="nav-links">
                    <li><a>Home</a></li>
                    <li><a>Admin</a></li>
                    <li><a>Log Out</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default NavBar