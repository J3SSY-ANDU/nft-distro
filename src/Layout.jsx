import React from "react";
import { Navbar } from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    )
}