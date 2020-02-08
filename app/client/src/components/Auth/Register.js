import React, { Component } from "react";

//components
import LoadingContainer from "../General/Loading";
import FormError from "../General/Forms/FormError";
import { FormInput, FormSubmit } from "../General/Forms/FormInputs";
import TextField from '@material-ui/core/TextField';
import Nav from '../General/Nav';

//actions
import { register } from "./api";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      password: "",
      confirm: "",
      loading: false,
      errors: null
    };
    this.register = this.register.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  register(e) {
    e.preventDefault();
    register(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { email, name, password, confirm, errors, loading } = this.state;
    return (
      <div className="page">
        <Nav />
        <div className='container fill-page'>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-container mx-auto">
                <form>
                  <div className="form-title">
                    <h1>Register</h1>
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
                    id="name-field"
                    label="Name"
                    className='form-input'
                    value={name}
                    name="name"
                    onChange={this.onChange}
                    margin="normal"
                    error={errors ? errors.name : null}
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
                    variant="outlined"
                  />
                  <TextField
                    id="confirm-field"
                    label="Confirm"
                    className='form-input'
                    value={confirm}
                    name="confirm"
                    type="password"
                    onChange={this.onChange}
                    margin="normal"
                    variant="outlined"
                  />
                  <FormSubmit
                    text="register"
                    disabled={loading}
                    onClick={this.register}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
