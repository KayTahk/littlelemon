import { useState } from "react";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });

  const getIsFormValid = () => {
    return (
        firstName &&
        email &&
        password.value.length >= 8
    );
};

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({ value: "", isTouched: false, })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  const [isSignupSelected, setIsSignupSelected] = useState(false);
    function handleSignupOnClick() {
        setIsSignupSelected(!isSignupSelected);
    }

  return (
    <><div className={isSignupSelected ? "login-form-container hidden" : "login-form-container"}>
          <form onSubmit={handleSubmit}>
              <fieldset>
                  <h2>Login</h2>
                  <div className="Field">
                      <label>
                          <p>Email address:<sup>*</sup></p>
                      </label>
                      <input
                          type="text"
                          placeholder="Email Address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="Field">
                      <label>
                          <p>Password:<sup>*</sup></p>
                      </label>
                      <input
                          value={password.value}
                          type="password"
                          onChange={(e) => { setPassword({ ...password, value: e.target.value }); } }
                          onBlur={() => {
                              setPassword({ ...password, isTouched: true });
                          } }
                          placeholder="Password" />
                      {password.isTouched && password.value.length < 8 ? (<PasswordErrorMessage />) : null}
                  </div>
                  <button
                      type="submit"
                      disabled={!getIsFormValid()}>
                      Login
                  </button>
              </fieldset>
          </form>
          <button className="login" onClick={handleSignupOnClick}>Don't have an Account? Signup!</button>
      </div><div className={isSignupSelected ? "signup-form-container expanded" : "signup-form-container"}>
              <form onSubmit={handleSubmit}>
                  <fieldset>
                      <h2>Sign Up</h2>
                      <div className="Field">
                          <label>
                              <p>First name:<sup>*</sup></p>
                          </label>
                          <input
                              type="text"
                              placeholder="First Name"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)} />
                      </div>
                      <div className="Field">
                          <label><p>Last name:</p></label>
                          <input
                              type="text"
                              placeholder="Last Name"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)} />
                      </div>
                      <div className="Field">
                          <label>
                              <p>Email address:<sup>*</sup></p>
                          </label>
                          <input
                              type="text"
                              placeholder="Email Address"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <div className="Field">
                          <label>
                              <p>Password:<sup>*</sup></p>
                          </label>
                          <input
                              value={password.value}
                              type="password"
                              onChange={(e) => { setPassword({ ...password, value: e.target.value }); } }
                              onBlur={() => {
                                  setPassword({ ...password, isTouched: true });
                              } }
                              placeholder="Password" />
                          {password.isTouched && password.value.length < 8 ? (<PasswordErrorMessage />) : null}
                      </div>
                      <button
                          type="submit"
                          disabled={!getIsFormValid()}>
                          Create account
                      </button>
                  </fieldset>
              </form>
          </div></>
  );
}

export default Login;