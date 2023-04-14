import React from 'react';
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <ul>
            <li>
              GIPHY Clips Instead? Click <Link to="/clipsGiphPage">HERE</Link>
            </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout;