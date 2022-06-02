import React from "react";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <>
            <h1>Layout</h1>
            <Outlet />
        </>
    );
}