import React from 'react';
import ClipsGiphPage from './src/ClipsGiphPage';
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <ul>
            <li>
              GIPHY Clips Instead? Click <Link to="/">HERE</Link>
            </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout;