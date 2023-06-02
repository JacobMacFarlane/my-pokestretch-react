import React from "react";
import { Link } from "react-router-dom";

export const ErrorComp: React.FC = () => {
    return (
        <div>
            <h2>This isnt our page</h2>
            <Link to="/">
                <h3 className="go-back">Click here to catch em all!</h3>
                {/* make this the same font we have in header */}
            </Link>
        </div>
    )
}
