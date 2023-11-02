import { useState } from "react"
import Card from "../Card"
import { ErrorMessage } from './ErrorMessage'
import { validateFieldLengthThree, validateFieldLengthSix } from "../js/validation"

export const FormCar = () => {

    const [values, setValues] = useState({
        marca: "",
        modelo: "",
        color: ""
    })
    const [dataCar, setDataCar] = useState("")
    const [error, setError] = useState(false)
    const [showError, setShowError] = useState(false)


    const handleData = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        }
        )
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (validateFieldLengthThree(values.marca) && validateFieldLengthSix(values.modelo)) {
            setError(true)
            setDataCar({ ...values })
            setValues({
                marca: "",
                modelo: "",
                color: ""
            })
            setShowError(false)
        }
        else {
            setShowError(true)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="bg-[#DDDDDD] p-4 flex flex-col gap-y-4 rounded-[.5rem]">
                <div >
                    <div>
                        <label
                            htmlFor="marca"
                            className="">
                            Ingrese marca
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="marca"
                            id="marca"
                            placeholder="Marca..."
                            onChange={handleData}
                            value={values.marca}
                            className="w-[15rem] h-[2rem] px-2" />
                    </div>
                </div>
                <div>
                    <div>
                        <label
                            htmlFor="modelo">
                            Ingrese modelo
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="modelo"
                            id="modelo"
                            placeholder="Modelo..."
                            onChange={handleData}
                            value={values.modelo}
                            className="w-[15rem] h-[2rem] px-2" />
                    </div>
                </div>
                <div>
                    <div>
                        <label
                            htmlFor="color">
                            Ingrese color
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="color"
                            id="color"
                            placeholder="Color..."
                            onChange={handleData}
                            value={values.color}
                            className="w-[15rem] h-[2rem] px-2" />
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 p-2 mt-4 text-white">
                    Guardar</button>
            </form>
            <div>
                {
                    showError && <ErrorMessage />
                }
            </div>
            <div>
                {
                    error && !showError && <Card data={dataCar} />
                }
            </div>
        </>
    )
}
