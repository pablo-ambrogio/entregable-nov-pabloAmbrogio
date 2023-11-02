import { FormCar } from "./components/FormCar";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs

  return (
    <div className="App w-full h-screen flex place-content-center flex-col place-items-center">
      <h1 className="text-2xl mb-4">Crea tu auto favorito</h1>
      <FormCar />
    </div>
  );
}

export default App;
