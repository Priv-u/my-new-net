import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

const Profile = () => {
  return (
    <div>
      Основной профиль
    </div>
  )
}

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />

    </div>
  );
}

export default App;
