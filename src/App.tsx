import { ThemeProvider } from "styled-components";

import theme from "./const/theme";
import GlobalStyles from "./components/styles/Globalstyles";
import Table from "./components/table/Table";
import Container from "./components/styles/Container.styled";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Navbar />
        <Table />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
