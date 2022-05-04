import logo from './logo.svg';
import './App.css';


const Header = () => {
  return(
    <div>
      Заголовок
    </div>
  )
}

const Navbar = () => {
return(
  <div>
    Новый текст из нового блока
  </div>
)
}
  
const Profile = () => {
  return(
    <div>
      Основной профиль
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
        <Header/>
        <Navbar/>
        <Profile/>
        
    </div>
  );
}

export default App;
