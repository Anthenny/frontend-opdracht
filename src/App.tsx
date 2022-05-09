import { ThemeProvider } from "styled-components";

import theme from "./const/theme";
import GlobalStyles from "./components/styles/Globalstyles";
import Container from "./components/styles/Container.styled";
import Form from "./components/form/Form";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <h1> Upload uw csv file!</h1>
        <Form />
      </Container>
    </ThemeProvider>
  );
}

export default App;
