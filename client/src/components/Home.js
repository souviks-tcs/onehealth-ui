import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>

                <a href="/">
                <header style={{backgroundColor:'yellow', height:'6vw', position:"absolute",top:'0',width:'100vw' }}>
                    <h1 style={{fontSize:'2vw', color:"black",marginTop:'1.5vw'}}>
                        One Health
                    </h1>
                </header>
                </a>

                <center>
               
                <div style={{ marginTop: "20vw",}}>

                    <a href="/GetDetails">
                        <div className="card" style={{ marginRight: '2vw', width: '18rem', height:'140px',  backgroundColor:'#98FB98', borderRadius:'4px',display:'inline-block'}}>
                        <div className="card-body">
                            <h5 className="card-title">GET DETAILS</h5>
                            <br/>
                            <h6 className="card-subtitle mb-2 text-muted">Get detailed medical history of any patient</h6>
                        </div>
                    </div>
                    </a>

                        <div style={{ display: "inline-block"}}>

                        <a href="/SaveDetails">
                                <div className="card" style={{ marginLeft: '2vw', marginRight:'2vw', width: '18rem', height: '140px',  minHeight:'fitContent', backgroundColor: '#98FB98', borderRadius: '4px', display: 'inline-block', }}>
                                <div className="card-body">
                                    <h5 className="card-title">SAVE DETAILS</h5>
                                    <br />
                                    <h6 className="card-subtitle mb-2 text-muted">Save medical records of a patient for global usage</h6>
                                </div>
                            </div>
                        </a>
                    </div> 

                        <div style={{ display: "inline-block" }}>

                            <a href="/GlobalRecords">
                                <div className="card" style={{ marginLeft: '2vw', width: '18rem', height: '140px', minHeight: 'fitContent', backgroundColor: '#98FB98', borderRadius: '4px', display: 'inline-block', }}>
                                    <div className="card-body">
                                        <h5 className="card-title">GLOBAL RECORDS</h5>
                                        <br />
                                        <h6 className="card-subtitle mb-2 text-muted">See the global medical history for all patients</h6>
                                    </div>
                                </div>
                            </a>
                        </div> 

                            

                </div>
                </center>
            </div>
        )
    }
}

export default Home;