import React, { Component } from "react";
import StudentDataService from "../services/student.service";
export default class AddStudent extends Component{
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);      
        this.saveNewStudent = this.saveNewStudent.bind(this);
        this.newStudent = this.newStudent.bind(this);
    
        this.state = {
          id: null,
        
          name:"",
          
          email:"",
          password:"",
          submitted: false

        };
      }
    
      onChangeName(e) {
        this.setState({
          name: e.target.value
        });
      }
    
      
      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        });
      }
      onChangePassword(e) {
        this.setState({
          password: e.target.value
        });
      }
      saveNewStudent() {
        var data = {
          name: this.state.name,          
          email : this.state.email,
          password : this.state.password
        };
    
        StudentDataService.create(data)
          .then(response => {
            this.setState({
              id: response.data.id,
        
              name:response.data.name,
              
              email: response.data.email,
              password :response.data.password,
              
              submitted: true
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }    
    
      newStudent() {
        this.setState({
            id: null,        
            name:"",            
            email:"",
            password:"",
          submitted: false
        });
      }
render() {
  return (
    <div className="submit-form">
      {this.state.submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={this.newStudent}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="nom">nom</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={this.state.name}
              onChange={this.onChangeName}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              required
              value={this.state.email}
              onChange={this.onChangeEmail}
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cin">password</label>
            <input
              type="text"
              className="form-control"
              id="password"
              required
              value={this.state.password}
              onChange={this.onChangePassword}
              name="password"           />         
          
          </div>
          <button onClick={this.saveNewStudent} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
}

