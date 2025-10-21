import Card from './Card.jsx'
import Student from './Student.jsx'

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
    <Student name="Jahid" age={23} isStudent={true} address="Bhuigor"/>
    <Student name="Spongebob" age={42} isStudent={true} address="California"/>
    <Student name="Patrick" age={50} isStudent={false} address="New York"/>
    <Student name="Sandy" age={25} isStudent={true} address="LA"/>
    <Student name="Shipon" age={13} isStudent={true} address="TusharDhara"/>
    </>
  )
}

export default App
