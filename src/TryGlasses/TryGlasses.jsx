import React, { Component } from "react";

export default class TryGlasses extends Component {
  render() {
    return (
      <div style={{height:"750px", width:"100%"}}>
        <div className="row">
          <div style={{color:"red", textAlign:"center"}} className="col-6">
            <img style={{height:"350px"}} className="img-fluid mt-5 ml-5" src="./glassesImage/model.jpg"/>
            {/* <img style={{height:"50px"}} src="./glassesImage/v1.png"/> */}
          </div>
          <div style={{color:"black", textAlign:"center"}} className="col-6">
          <img style={{height:"350px"}} className="img-fluid mt-5 mr-5" src="./glassesImage/model.jpg"/>

          </div>
        </div>
      </div>
    );
  }
}
