import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert2';

function Attendance() {

    const [loading, setLoading] = useState(true);
    const [students, setStudents] = useState([]);


    useEffect(() => {

        axios.get(`http://localhost:8000/api/get-attendance`).then(res=>{
            if(res.status === 200)
            {
                setStudents(res.data.attendance)
               
                setLoading(false);
            }
        });

    },[loading] );


    if(loading)
    {
        return <h4>Loading Attendance Data...</h4>
    }
    else
    {
        var student_HTMLTABLE = "";
       
        student_HTMLTABLE = students.map( (item, index) => {

            if(item.checkin ==null){
                var checkin = 'N/A';
            }else{
                var checkin = item.checkin;
            }

            if(item.checkout ==null){
                var checkout = 'N/A';
            }else{
                var checkout = item.checkout;
            }

            return (
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.from.name}</td>
                    
                    <td>{checkin}</td>
                    <td>{checkout}</td>
                    <td>{item.working_hours}</td>
                 
                   
                </tr>
            );
        });
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Attendance Data
                                   
                                </h4>
                            </div>
                            <div className="card-body">
                                
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Checkin</th>
                                            <th>Checkout</th>
                                            <th>Working Hours</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {student_HTMLTABLE}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Attendance;