
import ItemListContainer from './Components/ItemListContainer/indes.jsx';
import NavBar from './Components/NavBar/index.jsx';


const App = () => {
  return (
    <main>
      <NavBar />
      <ItemListContainer greeting={'Aqui va a aparecer la lista de productos'} />
    </main>
);
}

export default App;