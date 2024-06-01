import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

import   '../pages/styles/Student.css';
import { Component } from 'react';
import StudentDataService from '../services/student.service';
export default class ListStudent extends Component{
  constructor (props) {
    super (props);
    //input search admin
    this.onchangeSearchName = this.onchangeSearchName.bind(this);
    //get all admins
    this.getStudents = this.getStudents.bind(this);
    //activ admin
    this.setActiveStudent = this.setActiveStudent.bind(this);
    //actualiser la page   
    this.refreshListStudent = this.refreshListStudent.bind(this);
    //afficher list adminpar nom
    this.searchByName = this.searchByName.bind(this);
    this.deleteAllStudent = this.deleteAllStudent.bind(this);



this.state = {
 students: [],
  searchName: "",
  studentCourant: null,
  index: -1
};

  }
componentDidMount(){
    this.getStudents();
}
  onchangeSearchName(e) {
    const searchName =e.target.value;
    this.setState({
      searchName:searchName,
    });    
  }
getStudents () {
  StudentDataService.getAll ()
  .then(response =>{this.setState({
    students :response.data,
  });
console.log (response.data);

})
.catch(err => {
  console.log (err);
})

}
refreshListStudent() {
  this.getStudents ();
  this.setState ({
    studentCourantCourant: null,
    index: -1
  })
}
setActiveStudent(student , index) {  
  this.setState({
  studentCourant : student,
  index : index
});
}
searchByName(){
    StudentDataService.findByTitle(this.state.searchName)
    .then(response => {
        this.setState({
            students: response.data

        }); 
        console.log(response.data)
    })
    .catch(err=>{
        console.log(err);
    });
}
deleteAllStudent(){
  StudentDataService.deleteAll()
  .then(response => {
    console.log(response.data);
    this.refreshListStudent();
  })
  .catch(e => {
    console.log(e)
  });
}


render () {
  const {searchName , students, studentCourant , indexCourant }= this.state; 
  return ( 
    <>
 <div className="container-fluid">
   <div className="row">
    <div className="col-3">
    < Link to={'/addStudent'}className='btn btn-success btn-position me-4'>Add new student</Link>
    < button className='btn btn-danger btn-position' onClick={this.deleteAllStudent}>Delete all students</button>
    </div>
    <div className='col-9'>
      
    <div className="input-group">
        <input  className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchName} onChange={this.onchangeSearchName}/>
        <button className="btn btn-outline-success" type="submit" onClick={this.searchByName} >Search</button>
      </div>
    </div>
     <div className="col-12">
       <h1>Student list</h1>
                
       <table className="table align-middle mb-0 bg-white">
<thead className="bg-light">
 <tr>   
   <th>Name</th>
   <th>email</th>
   <th>password</th>
   <th>update</th>
   <th>delete</th>
 
 </tr>
</thead>
<tbody>
  {students && students.map((
    student, index)=>(    // eslint-disable-next-line no-unused-vars

 <tr className={+(indexCourant === studentCourant ? "active": "")} onClick={() => this.setActiveStudent(student, index)} key={index}>  
   
   <td>
    <p>{student.name}</p>
    </td>  
    
    <td>
    <p>{student.email}</p>
    </td> 
    <td>
    <p>{student.password}</p>
    </td>   
      
    
<td>
     <Link to={"/student/"+ student.id} type="button" className="btn btn-warning">
       Edit
     </Link>
   </td>
   <td>
     <Link to={"/student/"+ student.id} type="delete" className="btn btn-danger">
       Delete
     </Link>
   </td>
 </tr>
 ))}

</tbody>
</table>
     </div>
   </div>
 </div>
</>)
}
  
}
    
  


