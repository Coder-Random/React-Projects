import logo from './logo.svg';
import './App.css';

function App() {
    function handlebtn(e) {
      e.preventDefault();
      console.log('You clicked btn.');
    }

  return (
    <div className="main">
      <div className="bar">
      </div>
      <form onbtn={handlebtn}>
      <button className="home" type="home"></button>
      <button className="btn"type="btn">BOZO</button>
      <button className="btn2"type="btn">Cool</button>
      <button className="btn3"type="btn">React</button>
    </form>
    </div>
  );
}

const [currentPage, setCurrentPage] = React.useState(1);
currentPage = 1;

setCurrentPage = (page) => {
  setCurrentPage(page);
};



export default App;
