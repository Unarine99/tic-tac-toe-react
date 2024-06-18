import React from "react";
import { ThemeContextProvider } from "./ThemeContext";
import { GameContextProvider } from "./GameContext";

const Provider = ({ children }) => {
  return (
    <div>
      <ThemeContextProvider>
        <GameContextProvider>{children}</GameContextProvider>
      </ThemeContextProvider>
    </div>
  );
};

export default Provider;
