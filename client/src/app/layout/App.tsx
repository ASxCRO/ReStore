import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme(
    {
      palette: {
        mode: darkMode ? 'dark' : 'light',
        background: {
          default: darkMode === false ? '#eaeaea' : '#121212'
        }
      }
    }
  )

  function setMode() {
    setDarkMode(!darkMode);
  }


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} setMode={setMode} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
