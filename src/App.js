import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Trending from './components/Trending';

function App() {
  return (
    <div>
      <div className="body">
        <Header />
        <Banner />
        <Trending />
      </div>
    </div>
  );
}

export default App;
