import React from "react";

function CardTitle ({name, style}) {
    return (
        <div className="card-title" style={{fontSize:"1.8rem", fontWeight: 700, lineHeight: "120%", color: "#273653", ...style}} >
            {name}
        </div>
    )
}

export default CardTitle;