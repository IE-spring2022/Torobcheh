import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import ProductBriefCard from './components/ProductBriefCard';

import './index.css'
import './components/styles/Header.css'
import './components/styles/MainPage.css'
import './components/styles/LoginPage.css'
import './components/styles/ProductBriefCard.css'

function App() {
  return (
    <div className="App">
      {/* <MainPage /> */}
      {/* <LoginPage /> */}
      <ProductBriefCard />
    </div>
  );
}

export default App;
