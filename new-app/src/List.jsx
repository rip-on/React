

function List(){

    const fruits = [{id:1, name: "apple", calories: 95},
                    {id:2, name: "pineapple", calories: 37},
                    {id:3, name: "orange", calories: 45},
                    {id:4, name: "banana", calories: 105},
                    {id:5, name: "coconut", calories: 159}];

    //fruits.sort((a,b) => a.name.localeCompare(b.name)); //Alphabetical
    //fruits.sort((a,b) => b.name.localeCompare(a.name)); //Reverse Alphabetical

    //fruits.sort((a,b) => a.calories - b.calories) //Numerical
    //fruits.sort((a,b) => b.calories - a.calories) // Reverse Numerical

    const lowCalories = fruits.filter(fruit => fruit.calories < 100)
    const highCalories = fruits.filter(fruit => fruit.calories >100)




    const listItem = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>)
    const listItems = lowCalories.map(lowCalories => <li key={lowCalories.id}>{lowCalories.name}: &nbsp; <b>{lowCalories.calories}</b></li>)

    const UpperCal = highCalories.map(highCalories => <li key={highCalories.id}>{highCalories.name} : &nbsp; <b>{highCalories.calories}</b></li>)
    return(
        <ol>{UpperCal}</ol>
    );
}

export default List