import Router from "./Router";
import { GlobalStyles } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext)
  // console.log("Theme", theme);

  const mode = (theme === "light" ? lightTheme : darkTheme)
  return (
    <ThemeProvider theme={mode}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
