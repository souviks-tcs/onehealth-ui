import React, { Component } from 'react';
import axios from 'axios';

class SaveDetails extends Component{

    constructor() {
        super();
        this.state = {
            medicalId: '',
            name: '',
            dob: '',
            gender: '',
            ailments: '',
            medicines: '',
            detailsAdded:false,
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        //alert('hi1');        
        e.preventDefault();

        axios.post('https://health-app-api-demo-kapil-shiladitya.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/contacts',
        {
            "name": this.state.name,
            "medicalId": this.state.medicalId,
            "gender": this.state.gender,
            "ailments": this.state.ailments,
            "medicines": this.state.medicines,
            "dob": this.state.dob
        })
            .then((res) => {
                console.log("RESPONSE RECEIVED: ", res);
                this.setState({detailsAdded:true})
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            })
        }

    

    render() {
        return (
            <div>

                <a href="/">
                    <header style={{ backgroundColor: 'yellow', height: '6vw', position: "absolute", top: '0', width: '100vw' }}>
                        <h1 style={{ fontSize: '2vw', color: "black", marginTop: '1.5vw' }}>
                            One Health
                    </h1>
                    </header>
                </a>

                <div className="card" style={{ width: '70rem', height: 'fitContent', backgroundColor: '#98FB98', borderRadius: '4px', margin:'auto', marginTop:'10vw'}}>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <h5 className="card-title center-block control-label manadatory">Upload Medical Records:</h5>
                            <h6 className="card-subtitle mb-2 text-muted">This data will be available for global use</h6>

                            <br/>

                            <label for="medicalId" style={{ marginLeft: 0}}>Medical Card Number:</label>
                            <input id="medicalId" name="medicalId" type="text" onChange={this.handleChange} style={{ marginLeft:10}} required />

                            <label for="name" style={{ marginLeft: 50 }}>Name:</label>
                            <input id="name" name="name" type="text" onChange={this.handleChange} style={{ marginLeft: 10 }} required />

                            <br/><br/>

                            <div style={{position:"absolute", left:240}}>

                            <label for="gender" style={{ marginRight: 112 }}>Gender:</label>
                            <label style={{ marginRight: 10 }}>
                                    <input type="radio" value="Male" id="M" name="gender" onChange={this.handleChange} required />
                                    Male
                                </label>
                                <label>
                                    <input type="radio" value="Female" id="F" name="gender" onChange={this.handleChange} required />
                                Female
                             </label>

                             </div>

                             <br/><br/>

                            <label for="dob" style={{ position: "absolute", left: 240 }}>Date of Birth:</label>
                            <input id="dob" name="dob" type="date" onChange={this.handleChange} style={{ position: "absolute", left: 410 }}required />

                            <br /><br />

                            <label for="ailments" style={{ position: "absolute", left: 240 }}>Ailments:</label>
                            <textarea id="ailments" name="ailments" cols="64" rows="2" onChange={this.handleChange} style={{ position: "absolute", left: 410 }} required>
                            </textarea>

                            <br /><br /><br />

                            <label for="medicines" style={{ position: "absolute", left: 240 }}>Medicines:</label>
                            <textarea id="medicines" name="medicines" cols="64" rows="2" onChange={this.handleChange} style={{ position: "absolute", left: 410 }} required>
                            </textarea>

                            <br /><br />





                            <center>
                                <input id="submit" className="btn btn-success" value="Save Details" type="submit" style={{ marginTop: "30px" }} />
                                <a href="/GetDetails">
                                    <input id="reset" className="btn btn-danger" value="Clear" type="reset" style={{ marginTop: "30px", marginLeft: "20px" }} />
                                </a>
                            </center>
                        </form>
                        {
                            this.state.detailsAdded ?
                                <div className="p-2 mb-2 bg-primary text-white" style={{ height:'fitContent', margin: 'auto', width: '50%', textAlign: "center", marginTop: 20, borderRadius:4}}>Patient details saved successfully</div>
                                :
                                <div></div>
                        }
                    </div>
                </div>
                </div>
        )
    }
                


}

export default SaveDetails;