import React, { Component } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class GlobalRecords extends Component {

    constructor() {
        super();
        this.state = {
            allRecords:[],
            dataLoaded:false
        };
    }

    async getAllData() {
        const res = await axios.get('https://health-app-api-demo-kapil-shiladitya.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/contacts')
        //console.log(res.data)
        this.setState({ allRecords: res.data.data, dataLoaded:true })
        console.log(this.state.allRecords);
    }

    componentDidMount() {
        this.getAllData()
    }

    /*

    handleView = (id, medicalId, name, gender, dob, ailments, medicines) => { 
        
                alert('PATIENT DETAILS:\n'
                    + '\nMedical ID: ' + medicalId
                    + '\nName: ' + name
                    + '\nGender: ' + gender
                    + '\nDOB: ' + dob +' (DD-MM-YYYY)'
                    + '\nAilments: ' + ailments
                    + '\nMedicines: ' + medicines
                );                
    }

    */

    handleDelete = (id, medicalid) => {
        //alert(id);
        //alert('hi');
        const apiurl = 'https://health-app-api-demo-kapil-shiladitya.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/contacts/' + id;
        console.log(apiurl);
        axios.delete(apiurl)
            .then(res => {
                if (res.status === 200) {
                    console.log('Deleted global records for Medical ID: ' + medicalid)
                    alert('Deleted global records for Medical ID: ' + medicalid)
                    this.setState({});
                    window.location.reload();
                    //this.props.history.render('/nav/Project/Index'); 
                    //this.render();
                    //alert('deleted successfully');
                }
            }
            )
    }

    render(){
     
        let items= this.state.allRecords
        
        return(
            <div>

                <a href="/">
                    <header style={{ backgroundColor: 'yellow', height: '6vw', position: "absolute", top: '0', width: '100vw' }}>
                        <h1 style={{ fontSize: '2vw', color: "black", marginTop: '1.5vw' }}>
                            One Health
                    </h1>
                    </header>
                </a>

                <table id="dtBasicExample" className="table table-striped table-bordered table-sm" cellspacing="0" width="100%" style={{marginTop:"6vw"}}>
                                   
                    <thead>
                        <tr>
                            <th className="th-sm">Medical ID</th>
                            <th className="th-sm">Name</th>
                            <th className="th-sm">Gender</th>
                            <th className="th-sm" style={{width:'180px'}}>DOB (DD-MM-YYYY)</th>
                            <th className="th-sm" style={{ width: '20vw' }}>Ailments History</th>
                            <th className="th-sm" style={{ width: '20vw' }}>Medicine History</th>
                            <th className="th-sm">Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            items.map(item =>
                                <tr key={item._id}>
                                    <td>{item.medicalId}</td>
                                    <td>{item.name}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.dob}</td>
                                    <td>{item.ailments}</td>
                                    <td>{item.medicines}</td>
                                    <td>
                                        <Popup trigger={<button className="btn btn-info btn-sm" style={{marginRight:5}}>View</button>} modal className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    
                                                    <h5 style={{margin:'auto'}}>Medical Records for Medical ID '{item.medicalId}'</h5>
                                                    
                                                </div>
                                                <div className="modal-body">

                                                    
                                                        <h6>
                                                            <label style={{marginRight:'34px'}}>Name:</label>
                                                            <label>{item.name}</label>
                                                        </h6>
                                                   
                                                        <h6>
                                                        <label style={{ marginRight: '23px' }}>Gender:</label>
                                                            <label>{item.gender}</label>
                                                        </h6>
                                                    
                                                        <h6>
                                                        <label style={{ marginRight: '45px' }}>DOB:</label>
                                                        <label>{item.dob} (DD-MM-YYYY)</label>
                                                        </h6>
                                                        
                                                        <h6>
                                                        <label style={{ marginRight: '14px' }}>Ailments:</label>
                                                            <label>{item.ailments}</label>
                                                        </h6>
                                                        
                                                        <h6>
                                                        <label style={{ marginRight: '5px' }}>Medicines:</label>
                                                            <label>{item.medicines}</label>
                                                        </h6>

                                                        <div className="modal-footer">
                                                        <button type="button" className="btn btn-danger" onClick={event => window.location.href = '/GlobalRecords'}>
                                                                Close
                                                        </button>
                                                        </div>
                                                    
                                                </div>
                                            </div>
                                        </Popup>

                                        <button type="button" className="btn btn-danger btn-sm" style={{ marginLeft: 5 }} onClick={() => this.handleDelete(item._id, item.medicalId)}>Delete</button>
                                        </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>


            </div>
        )
    }
}
export default GlobalRecords;