import { GlobalStyles } from "../src/styles/GlobalStyle";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <main>
        <Card />
      </main>
      <Footer />
    </>
  );
}

export default App;
