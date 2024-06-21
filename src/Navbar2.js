import React from "react";
import { Link } from "react-router-dom";
import './Navbar2.css';

function Navbar2() {
    return (
        <div>
            <nav>
                <ul className="navbar-nav">
                    <li>
                        <Link to={`/`}>
                            Home
                        </Link>
                    </li>
                    <li >
                        <Link to={`/Entertainment`}>
                            Entertainment
                        </Link>
                    </li>
                    <li >
                        <Link to={`/Technology`}>
                            Technology
                        </Link>
                    </li>
                    <li >
                        <Link to={`/Sports`}>
                            Sports
                        </Link>
                    </li>
                    <li >
                        <Link to={`/Business`}>
                            Business
                        </Link>
                    </li>
                    <li >
                        <Link to={`/Health`}>
                            Health
                        </Link>
                    </li>
                    <li >
                        <Link to={`/Science`}>
                            Science
                        </Link>
                    </li>
                </ul>

            </nav>
        </div>
    );
}

export default Navbar2;