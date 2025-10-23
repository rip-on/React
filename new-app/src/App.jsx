import Card from './Card.jsx';
import Student from './Student.jsx';
import UserGreeting from './UserGreeting.jsx';
import Food from './Food.jsx'
import Listing from './Listing.jsx'
import Button from './Button.jsx'

function App() {


  //Listing

  const fruits = [{id: 1, name: "Apple", calories: "apple"},
                  {id: 2, name: "Orange", calories: 45},
                  {id: 3, name: "Banana", calories: 105},
                  {id: 4, name: "Coconut", calories: 159},
                  {id: 5, name: "Pineapple", calories: 37}];
  
  const vegetables = [{id:6, name: "Potatoes", calories: 55},
                       {id:7, name: "Celery", calories: 45},
                       {id: 8, name: "Broccoli", calories: 84},
                       {id: 9, name: "Corn", calories: 54},
                       {id: 10, name: "carrots", calories: 53}]


  
  
 
  return (
    <>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
    <Student name="Jahid" age={24} isStudent={true} address="Bhuigor"/>
    <Student name="Spongebob" age={32} isStudent={true} address="California"/>
    <Student name="Patrick" age={50} isStudent={false} address="New York"/>
    <Student name="Sandy" age={25} isStudent={true} address="LA"/>
    <Student name="Shipon" age={13} isStudent={true} address="TusharDhara"/>
    <Student/>
    <Student/>
    <UserGreeting isLoggedIn={true} username="Ripon"/>
    <UserGreeting/>
    <Food/>
    {fruits.length > 0 && <Listing items={fruits} category="Fruits"/>}
    {fruits.length > 0 && <Listing items={vegetables} category="Vegetables"/>}
    {fruits.length > 0 ? <Listing items={fruits} category="Fruits"/> : null}
    <Button/>
    </>
  )
}

export default App
