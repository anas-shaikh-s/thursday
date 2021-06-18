import "./App.css";
import Home from "./Pages/Home";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
const theme = createMuiTheme({
  typography: {
    fontFamily: "PT Mono",
    fontWeightRegular: 400,
    h3:{
      fontFamily:'Ubuntu'
    },
    h4:{
      fontFamily:'Ubuntu'
    }
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
