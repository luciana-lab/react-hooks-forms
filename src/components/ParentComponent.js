import React, { useState } from 'react';
import Form from './Form';
import DisplayData from './DisplayData';

function ParentComponent() {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");
    const [newsetter, setNewsetter] = useState(false)

    // updating state based on event.target.value, which causes a re-render
    const handleFirstNameChange = e => {
        setFirstName(e.target.value)
    }

    const handleLastNameChange = e => {
        setLastName(e.target.value)
    }

    function handleNewsetterChange(e) {
        setNewsetter(e.target.checked)  // .checked, not .value!
    }

    return (
        <div>
            <Form
                firstName={firstName}
                lastName={lastName}
                newsetter={newsetter}
                handleFirstNameChange={handleFirstNameChange}
                handleLastNameChange={handleLastNameChange}
                handleNewsetterChange={handleNewsetterChange}
            />
            <DisplayData firstName={firstName} lastName={lastName} newsetter={newsetter} />
        </div>
    )
}

export default ParentComponent;