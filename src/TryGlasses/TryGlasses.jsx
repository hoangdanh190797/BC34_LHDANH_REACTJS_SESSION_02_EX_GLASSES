import React, { Component } from "react";
import dataGlasses from "./dataGlasses.json";

export default class TryGlasses extends Component {
  state = {
    stateGlasses: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  changeGlasses = (glasses) => {
    this.setState({
      stateGlasses: glasses,
    });
  };

  render() {
    let { stateGlasses } = this.state;

    return (
      <div style={{ height: "750px", width: "100%" }}>
        <div className="row">
          <div style={{ color: "red", textAlign: "center" }} className="col-6">
            <img
              style={{
                height: "350px",
                position: "absolute",
                zIndex: "5",
                top: "100px",
              }}
              src="./glassesImage/model.jpg"
            />
            <img
              style={{
                height: "50px",
                position: "absolute",
                zIndex: "10",
                top: "190px",
                right: "167px",
              }}
              src="./glassesImage/v1.png"
            />
            <div
              style={{
                height: "110px",
                width: "287px",
                position: "absolute",
                zIndex: "10",
                top: "340px",
                right: "102px",
                backgroundColor: "rgba(119,89,139,0.6)",
              }}
            >
              <h5>{stateGlasses.name}</h5>
              <p>{stateGlasses.desc}</p>
            </div>
          </div>

          <div className="col-6">
            <img
              style={{
                height: "350px",
                position: "absolute",
                zIndex: "5",
                top: "60px",
                right: "400px",
              }}
              className="img-fluid mt-5 mr-5"
              src="./glassesImage/model.jpg"
            />
            <img
              style={{
                height: "50px",
                position: "absolute",
                zIndex: "10",
                top: "193px",
                right: "513px",
              }}
              src={stateGlasses.url}
            />
            <div
              style={{
                height: "110px",
                width: "287px",
                position: "absolute",
                zIndex: "10",
                top: "345px",
                right: "450px",
                backgroundColor: "rgba(119,89,139,0.6)",
              }}
            >
              <h5>{stateGlasses.name}</h5>
              <p>{stateGlasses.desc}</p>
            </div>
          </div>
        </div>

        <div
          style={{
            height: "250px",
            width: "800px",
            position: "absolute",
            zIndex: "30",
            top: "480px",
            right: "400px",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        >
          {dataGlasses.map((glasses, index) => {
            return (
              <span key={index}>
                <img
                  onClick={() => {
                    this.changeGlasses(glasses);
                  }}
                  style={{ height: "55px" }}
                  className="img-fluid m-1"
                  src={glasses.url}
                />
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}
