//props = read-only properties that are shared between components.
    // A parent component can send data to a child component.
    //<component key=value />


/*PropTypes = a mechanism that ensures that the passed value is of the correct datatype.
age: PropTypes.number */

import PropTypes from 'prop-types'

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes":"No"}</p>
            <p>Address: {props.address}</p>

        </div>
    );
}

Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

export default Student