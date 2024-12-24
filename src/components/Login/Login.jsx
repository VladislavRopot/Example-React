import { useState } from "react";

function Login(props) {
    const [FormValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
    });

    const handleOnInput = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setFormValues({
            ...FormValues,
            [name]: value,
        });
    };

    const handleOnLogin = () => {
        if (FormValues.firstName === '' || FormValues.lastName === '') {
            alert('Fill in form data!');
        } else {
            console.log('Apeleaza acel API cand se logheaza');
            props.setUser(FormValues);
        }
    };

    return (
        <>
            <div>
                <p>First Name: </p>
                <input
                    type="text"
                    name="firstName"
                    value={FormValues.firstName}
                    onInput={(event) => handleOnInput(event)}
                />
            </div>

            <div>
                <p>Last Name: </p>
                <input
                    type="text"
                    name="lastName"
                    value={FormValues.lastName}
                    onInput={(event) => handleOnInput(event)}
                />
            </div>

            <div>
                <button onClick={() => handleOnLogin()}>Login</button>
            </div>
        </>
    );
}

export default Login;
