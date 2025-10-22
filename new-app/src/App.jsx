import Card from './Card.jsx';
import Student from './Student.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx'

function App() {
 
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
    <List/>
    </>
  )
}

export default App
