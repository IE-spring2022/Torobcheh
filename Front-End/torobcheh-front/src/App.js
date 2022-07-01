import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import ProductBriefCard from './components/ProductBriefCard';
import ProductBriefCard_container from './components/ProductBriefCard_container';
import ProductsListPage from './components/ProductsListPage';

import './index.css'
import './components/styles/Header.css'
import './components/styles/MainPage.css'
import './components/styles/LoginPage.css'
import './components/styles/ProductBriefCard.css'
import './components/styles/ProductBriefCard_container.css'
import './components/styles/ProductsListPage.css'

function App() {
  return (
    <div className="App">
      {/* <MainPage /> */}
      {/* <LoginPage /> */}
      {/* <ProductBriefCard_container id={'ProductsPage_ProductBriefCard_container'} /> */}
      <ProductsListPage />
    </div>
  );
}

export default App;
