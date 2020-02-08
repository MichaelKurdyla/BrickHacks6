import React, { Component } from "react";

//components
import LoadingContainer from "../General/Loading";
import FormError from "../General/Forms/FormError";
import { FormInput, FormSubmit } from "../General/Forms/FormInputs";
import TextField from '@material-ui/core/TextField';
import Nav from '../General/Nav';
//actions
import { login } from "./api";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loading: false,
      errors: null
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login(e) {
    e.preventDefault();
    login(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { email, password, errors, loading } = this.state;
    return (
      <div className="page">
        <Nav />
        <div className='container fill-page'>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-container mx-auto">
                <form>
                  <div className="form-title">
                    <h1>Sign In</h1>
                  </div>
                  <LoadingContainer loading={loading} />
                  <FormError errors={errors ? errors.err : null} />
                  <TextField
                    id="email-field"
                    label="Email"
                    className='form-input'
                    value={email}
                    name="email"
                    onChange={this.onChange}
                    margin="normal"
                    error={errors ? errors.email : null}
                    variant="outlined"
                  />
                  <TextField
                    id="password-field"
                    label="Password"
                    className='form-input'
                    value={password}
                    name="password"
                    type="password"
                    onChange={this.onChange}
                    margin="normal"
                    error={errors ? errors.password : null}
                    variant="outlined"
                  />

                  <FormSubmit text="login" disabled={loading} onClick={this.login} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
