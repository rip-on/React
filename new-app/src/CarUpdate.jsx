import React, {useState} from "react";

function CarUpdate() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function AddCars(){
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel};
        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }
    function RemoveCars(index){
        setCars(c => c.filter((__, ind) => ind !== index));
    }
    function ChangeYear(e){
        setCarYear(e.target.value)
    }
    function ChangeMake(e){
        setCarMake(e.target.value)
    }
    function ChangeModel(e){
        setCarModel(e.target.value)
    }
    return(<div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car, index) => 
                    <li key={index} onClick={() => RemoveCars(index)}> {car.year} {car.make} {car.model}</li>
                )}
            </ul>
            <input type="number" value={carYear} onChange={ChangeYear}/> <br/>
            <input type="text" value={carMake} onChange={ChangeMake} placeholder="Enter Car Make"/> <br />
            <input type="text" value={carModel} onChange={ChangeModel} placeholder=" Enter Car Model" /> <br /> <br />
            <button onClick={AddCars}>Add Cars</button>
    </div>)
}

export default CarUpdate