import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../organisms/Header";

export function Layout() {
    return (
        <>
            <Header />

            <Outlet />
        </>
    );
}