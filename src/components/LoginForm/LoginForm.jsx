import React from "react";

const LoginForm = ({ FormValues, handleOnInput, login }) => {
  return (
    <div>
      <div>
        <p>First Name:</p>
        <input
          type="text"
          name="FirstName"
          value={FormValues.FirstName}
          onInput={handleOnInput}
        />
      </div>

      <div>
        <p>Last Name:</p>
        <input
          type="text"
          name="LastName"
          value={FormValues.LastName}
          onInput={handleOnInput}
        />
      </div>

      <div>
        <p>Email:</p>
        <input
          type="email"
          name="Email"
          value={FormValues.Email}
          onInput={handleOnInput}
        />
      </div>

      <div>
        <p>Password:</p>
        <input
          type="Password"
          name="Password"
          value={FormValues.Password}
          onInput={handleOnInput}
        />
      </div>

      <div>
        <button onClick={() => login(FormValues)}>Login</button>
      </div>
    </div>
  );
};

export default LoginForm;
