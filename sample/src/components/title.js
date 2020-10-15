import React from "react";
function Title(props){
    // const name="Vijay kumar";
    // const leadtest="I am a PythonDeveloper in APSSDC"
    const {name,leadtext}=props;
    return (
        <div className="container card shadow">
    <div className="row text-center align-items-center my-5 py-5">
      <div className="col-12 col-md-6">
        <img className="img-fluid rounded-circle w-75" src={"https://avatars0.githubusercontent.com/u/20368334?s=400&u=3053f40deba385a7eb21e3da07210aebdfc4a6e3&v=4"} alt="noimage" />
      </div>
      <div className="col-12 col-md-6 pt-5">
        <div className="font-weight-light" style={{fontSize: "50px"}}>
    Hi,I am <span className="text-info">{name}</span>
        </div>
    <h4 className="font-weight-light">{leadtext}</h4>
      </div>
    </div>
  </div>
    );
}
export default Title; 