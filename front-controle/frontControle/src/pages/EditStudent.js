import { Component } from "react";
import StudentDataService from "../services/student.service";
import {crudRouter} from "../Crud-router";
class EditStudent extends Component{
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
                this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);    
        this.EditStudent = this.EditStudent.bind(this); 
        this.getStudent = this.getStudent.bind(this);    
            this.state = {
                selectStudent : {
                    id: null,        
                    name:"",
                 email:"",
                    password:"",
               }              

        };
      }
      componentDidMount(){
        this.getStudent(this.props.router.params.id)
      }
   onChangeName(e) {
    const name = e.target.value;
    this.setState(function(prevState){
        return{
            selectStudent :{
...prevState.selectStudent,
name:name,

            }
        }
    })
   }  
   onChangeEmail(e) {
    const email = e.target.value;
    this.setState(function(prevState){
        return{
            selectStudent :{
...prevState.selectStudent,
email:email,

            }
        }
    })
   }  
   onChangePassword(e) {
    const password = e.target.value;
    this.setState(function(prevState){
        return{
            selectStudent :{
...prevState.selectStudent,
password:password,

            }
        }
    })
   } 
   //get admin by id// 
   getStudent(id) {
    StudentDataService.get(id)
    .then(response =>{this.setState({
      selectStudent :response.data,
    });
  console.log (response.data);
  
  })
  .catch(err => {
    console.log (err);
  })
  
  }
  //function update admin//
  EditStudent(){
    StudentDataService.update(
this.state.selectStudent.id,
this.state.selectStudent
    )
    .then(response => {
        console.log(response.data);
        this.props.router.navigate('/student')
    })
    .catch(err =>{
        console.log(err);        
    });
  }
  render() {
    const { selectStudent } = this.state;
    return(
<div>
{selectStudent ? (
        <div className="container">
            <div className="row">                
<div className="col-4">
<input type="text" className="form-control" id="name" value={selectStudent.name}
 onChange={this.onChangeName}/>
</div>
<div className="col-4">
<input type="text" className="form-control" id="email" value={selectStudent.email}
 onChange={this.onChangeEmail}/>    
</div>
<div className="col-4">
<input type="text" className="form-control" id="password" value={selectStudent.password}
 onChange={this.onChangePassword}/>
    
</div>

<div className="col-12">
    <button className="btn btn-success" onClick={this.EditStudent}>Edit student</button>
</div>
            </div>        
        </div>
        ):(
    <h1>student modified</h1>      
    )};
</div>

    )
  }
}
export default crudRouter(EditStudent);