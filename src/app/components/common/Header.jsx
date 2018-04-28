import React from 'react';
import {Link} from 'react-router';

function Header() {
  return (<header>
            <div className="container">
            <div id ="logo">
              <img src="static/imgs/logo.png" />
            </div>
            {/* <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </nav> */}
          </div>
          </header>
          )
}

export default Header;
