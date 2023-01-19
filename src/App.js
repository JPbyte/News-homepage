import Header from './components/header/header';
import GlobalStyle from '../src/style/GlobalStyle';
import Container from './components/Main/main';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container />
      <Footer />
    </>
  )
}

export default App;
