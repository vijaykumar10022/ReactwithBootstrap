import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
// or less ideally

function Recommendationcard(props){
    // const {name,company,designation,message}=props.recommndation;
    // const [data,setData]=useState(props.recommndation.name)
    console.log(props);
    return (
        
        <div className="col-12 col-md-4 col-lg-4">
        <a type="submit" className="d-block text-decoration-none text-dark" data-toggle="modal" data-target="#myModal" onClick={()=>props.onRecommendationClick(props.recommendation)}>
        <div className="card shadow h-100">
        <div className="card-body">
        <p className="card-text text-seconday">{props.recommendation.message.slice(0,8)+"..."}</p>
            <h4 className="card-text"> {props.recommendation.designation}</h4>
            <p className="card-text text-seconday mb-0">{props.recommendation.name}</p>
          <p className="card-text text-seconday">{props.recommendation.company}</p>
        </div>
      </div>
      </a>
      
      </div>
      
    );
}
export default Recommendationcard; 