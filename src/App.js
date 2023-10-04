import './App.css';

import Articles from "./components/articles";
import Header from "./components/header";
import Footer from "./components/footer";


function App() {
  return (
    <div className="App">
      	
        <header>
          <Header />
        </header>  
      
        <Articles />
      
        <footer>
          <Footer />
        </footer>
      
    </div>
  );
}

export default App;
