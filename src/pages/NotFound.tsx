import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return(
        <div id="notFound" className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-6xl">404 Not Found.</h1>
            <p className="text-xl">
                Go to <Link to="/portfolio" className="underline text-blue-500">Home</Link>
            </p>
        </div>
    );
}