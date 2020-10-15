import React,{useState} from "react";
import {v4 as uuid } from "uuid";
import Recommendationcard from "./Recommendationcard";
function Recommendation(){
    const [recommendationState,setRecommendationState]=useState(null)
    const recommendations=[
        {
            id:1,
            name:"person 1",
            company:"APSSDC",
            designation:"Developer",
            message:"He is an developere "
        },
        {
            id:2,
            name:"person 2",
            company:"TCS",
            designation:"s/w Developer",
            message:"He is an excellent developere "
        },
        {
            id:3,
            name:"person 3",
            company:"infy",
            designation:"python Developer",
            message:"He is an python developere "
        },
        {
            id:4,
            name:"person 4",
            company:"APSSDC",
            designation:"full stack Developer",
            message:"He is an full stack developere "
        },
    ];
    return (
        <div className="container-fluid my-5">
            
        <div className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar">
      {
          recommendations.map((recommendation)=>
          (
              <Recommendationcard key={uuid()} recommendation={recommendation} onRecommendationClick={(recommendation)=>(setRecommendationState(recommendation))} />

          )
          )
      }  
      </div>
      {recommendationState ? 
        <div class="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
              <div className="modal-header border border-white">
      
                <p className="text-secondary margin-left-auto" data-dismiss="modal">x</p>
              </div>
          
              <div className="modal-body text-center border border-white">
                <h5> {recommendationState.message} </h5>
               <p>  {recommendationState.name} </p>
                <p> {recommendationState.company} </p>
                <p> {recommendationState.designation}</p>
              </div>
         
              <div class="modal-footer border border-white">
                
              </div>
          </div>
        </div>
      </div> : '' 
      
    }
      
    </div>
 
    );
}
export default Recommendation; 