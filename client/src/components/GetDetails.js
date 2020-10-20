import React, { Component } from 'react';
import axios from 'axios';

class GetDetails extends Component {

    constructor(){
        super();
        this.state={
            medicalId:'',
            medShow:'',
            name:'',
            dob:'',
            gender:'',
            ailments:'',
            medicines:'',
            fetched:false,
            wrongid:false
        };
    }

    handleChange = (e) => {
        //alert('hi')
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //this.setState({ fetched: true, wrongid: false })
        //this.setState({ fetched: false, wrongid: true})

        //alert(this.state.);
        //const apiUrl = 'https://onehealthdb-b32b.restdb.io/rest/medical?q={"":"' + this.state. +'"}';
        //alert(apiUrl);

        axios.get('https://health-app-api-demo-kapil-shiladitya.appdev-cloudnative-ocp43-6fb0b86391cd68c8282858623a1dddff-0000.eu-gb.containers.appdomain.cloud/api/contacts')
  
            .then(
                res => {
                console.log(res.data.data);
                let items = res.data.data;
                //console.log(items[0].medicalId)
                this.setState({fetched:false})
                items.forEach(item => {
                    if(item.medicalId===this.state.medicalId)
                    {
                        console.log(item.name)
                        this.setState({
                            fetched: true, wrongid: false, medicalId: item.medicalId, medShow:item.medicalId, name: item.name, dob: item.dob, gender: item.gender, ailments: item.ailments, medicines: item.medicines
                        })
                        console.log(res.data[0])
                    }                                     
                });

                if (!this.state.fetched){
                    this.setState({wrongid:true})

                }
                
                }                         
                                
                           
            )




                    
                /*
                if (res.data.length===0)
                {
                    this.setState({ fetched: false, wrongid: true })
                }
                else
                {
                    this.setState({
                        fetched: true, wrongid: false, : res.data[0]., name: res.data[0].name, dob: res.data[0].dob, gender: res.data[0].gender, ailments: res.data[0].ailments, medicines: res.data[0].medicines })
                    console.log(res.data[0])

                }
                */
            
            .catch((error) =>(console.log(error.response.request._response))
            );
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

                        <div className="card" style={{ width: '18rem', height: 'fitContent', backgroundColor: '#98FB98', borderRadius: '4px', display: 'inline-block', position:'absolute', top:'18vw',left:'16vw', float:'left' }}>
                                <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <h5 className="card-title center-block control-label manadatory">Medical Card Number:</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Get global medical history</h6>
                                    <input className="form-control" id="medicalId" name="medicalId" type="text" onChange={this.handleChange} required />

                                    <center>
                                        <input id="submit" className="btn btn-success" value="Get Details" type="submit" style={{ marginTop: "10px" }} />
                                        <a href="/GetDetails">
                                        <input id="reset" className="btn btn-danger" value="Clear" type="reset" style={{ marginTop: "10px", marginLeft: "10px" }} />
                                        </a>                                        
                                    </center> 
                                </form>
                                {
                                this.state.wrongid ?
                                <div className="alert alert-danger" role="alert" style={{ margin: 'auto', padding: '10px', marginTop: 10, textAlign: "center" }}>Medical ID not found</div>
                                :
                                <div></div>
                                }
                                </div>
                        </div>
                       

                        <div style={{ display: "inline-block" }}>

                         {this.state.fetched ?  
                        <div className="card" style={{ marginLeft: '5vw', width: '38rem', height: 'fitContent', backgroundColor: '#98FB98', borderRadius: '4px', display: 'inline-block', position:'absolute', top:'15vw', right:'16vw', float:'right' }}>
                                    <div className="card-body">
                                        <h5 className="card-title">PATIENT DETAILS</h5>                                
                                        <h6 className="card-subtitle mb-2 text-muted">Global medical records available for Medical Card Number {this.state.medShow}</h6>
                                        <br/>                                        
                                            


                                <div style={{textAlign:"left", marginLeft:30}}>
                                
                                Medical ID: {this.state.medShow}
                                <br />
                                Name: {this.state.name}
                                <br />
                                DOB: {this.state.dob} (YYYY-MM-DD)
                                <br />
                                Gender: {this.state.gender}
                                <br />
                                Ailments: {this.state.ailments}
                                <br />
                                Medicines: {this.state.medicines}  

                                <br/>    
                                </div>                             
                                    
                                    </div>
                                </div>
                            
                        
                        :<div></div>}
                    


                    </div>
                
            </div>
        )
    }
}

export default GetDetails;