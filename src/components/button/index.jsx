import React from "react";
import { clsx } from "clsx";

function Button({ children, variant = "ghost", className, ...props }) {

  const buttonGlobal = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontWeight: "500",
  };

  let buttonStyles;

  switch (variant) {
    case "primary":
      buttonStyles = {
        backgroundColor: "hsl(200, 80%, 50%)",
        color: "hsl(0, 0%, 100%)",
        padding: "8px 16px",
        borderRadius: "4px",
        textTransform: "uppercase",
        transition: "opacity 200ms",
      };
      break;
    case "ghost":
      buttonStyles = {
        color: "hsl(200, 80%, 50%)",
        backgroundColor: "transparent",
      };
      break;
    case "warn":
      buttonStyles = {
        color: "hsl(358, 79%, 66%)",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
      };
      break;
    default:
      buttonStyles = {};
  }

  return (
    <button
      {...props}
      className={clsx(buttonGlobal, className)}
      style={buttonStyles}
    >
      {children}
    </button>
  );
}

export { Button };