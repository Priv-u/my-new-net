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
  

const App = () => {
  return (
    <div className="App">
        <Header/>
        <Navbar/>
        
    </div>
  );
}

export default App;
