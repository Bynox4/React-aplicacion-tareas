import freecodecamp from './imagenes/freecodecamp-logo.png';
import ListaDeTareas from './componentes/ListaDeTareas';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
      <img 
        src={freecodecamp}
        alt='logo-freecodecamp'
        className='freecodecamp-logo'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
