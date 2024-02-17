import React from "react";
import CardTitle from "./CardTitle";

export default function Card({ name, width, heightRatio, children, style, disableTitle }) {
  return (
    <div
      className="user-settings-comp-container"
      style={{
        position: "relative",
        width: width || "60vw",
        minHeight: heightRatio ? `calc(${width} / ${heightRatio})` : 'calc(100% - 2em - 2.5px)',
        border: "1.25px solid #dedede",
        borderRadius: "20px",
        overflow: "hidden",
        marginBottom: "2em",
        background:"#FFF",
        ...style,
      }}
    >
      {!disableTitle && <CardTitle name={name} style={{ marginTop: "0.8em", marginLeft: "1.5em" }} />}
      {children}
    </div>
  );
}