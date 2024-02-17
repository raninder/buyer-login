import React from "react";
import { Button } from "@mui/material";

export default function PurpleButton({ text, style, fontSize, width, height }) {
  return (
    <Button
      variant="contained"
      sx={{
        padding: "0.6em 1em 0.6em 1em",
        textTransform: "none",
        backgroundColor: "#7731E4",
        height: height ? height : "auto",
        width: width ? width : "auto",
        fontSize: fontSize ? fontSize : "1.1rem",
        fontFamily: "sans-serif",
        fontWeight: "700",
        borderRadius: "10px",
        "&:hover": {
          backgroundColor: "#9c6ee1",
        },
        ...style,
      }}
    >
      {text}
    </Button>
  );
}
