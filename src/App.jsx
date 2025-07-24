
import './App.css'
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Hero from './components/Hero';
import Albumpage from './pages/Albumpage';

function App() {

  const theme = createTheme({
    palette: {
      typography: {
        fontFamily: "Poppins, sans-serif", // 👈 Important: no extra quotes!
      },
      primary: {
        main: "#34C94B",
      },
      secondary: {
        main: "#121212",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Albumpage />
    </ThemeProvider>
  )
}

export default App