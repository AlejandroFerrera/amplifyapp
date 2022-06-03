import React from "react";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import "@aws-amplify/ui-react/styles.css";

export function Login() {
    const { route } = useAuthenticator((context) => [context.route])
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state && location.state.from ? location.state.from.pathname : '/';

    useEffect(() => {
        if (route === "authenticated") {
            navigate(from, { replace: true }); 
        }
    }, [route, navigate, from]);

    return (
        <div className="auth-wrapper">
            <Authenticator></Authenticator>
        </div>
    )
}