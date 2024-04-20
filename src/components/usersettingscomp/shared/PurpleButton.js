import React from "react";
import { Button } from "@mui/material";
import "./purpleButton.css"

<<<<<<< HEAD
export default function PurpleButton({ text, style, fontSize, width, height, ...rest }) {
=======
export default function PurpleButton({ text, style, fontSize, width, height }) {
>>>>>>> 3afa2417c934e9a1b90de23bf33910d40927d2bb
  return (
    <Button
      variant="contained"
      className="purple-button"
      sx={{
        padding: "0.6em 1em 0.6em 1em",
        textTransform: "none",
        backgroundColor: "#7731E4",
        height: height ? height : "auto",
        width: width ? width : "100%",
        fontSize: fontSize ? fontSize : "1.1rem",
        fontFamily: "sans-serif",
        fontWeight: "700",
        borderRadius: "10px",
        "&:hover": {
          backgroundColor: "#9c6ee1",
        },
        ...style,
<<<<<<< HEAD
        ...rest
=======
>>>>>>> 3afa2417c934e9a1b90de23bf33910d40927d2bb
      }}
    >
      {text}
    </Button>
  );
}
