//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ data }) {

  return (
    <div className="bg-[#CDCCCC] p-4 mt-8 w-full rounded-[.5rem]">
      <h2 className="text-2xl mb-4">Tu auto favorito es:</h2>
      <div className="w-[15rem] flex flex-col gap-y-2">
        <p className="font-semibold">Marca:
          <span className="font-normal pl-2">
            {data.marca}
          </span>
        </p>
        <p className="font-semibold">Modelo:
          <span className="font-normal pl-2">
            {data.modelo}
          </span>
        </p>
        <p className="font-semibold">Color:
          <span className="font-normal pl-2">
            {data.color}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Card;
