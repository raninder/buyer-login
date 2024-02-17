import React from "react";

export default function NormalTitle ({name}) {
    return (
        <span className="normal-title" style={{fontSize:"1.2rem", fontWeight: 700, color: "#000"}} >
            {name}
        </span>
    )
}