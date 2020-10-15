import React from 'react';
import {v4 as uuid } from "uuid";
 function Skill(props) {
     const {name,imageurl,starstotal,starsactive}=props.skill;
     const starslist=[];
     for(let i=0;i< starstotal;i++){
         if (i<starsactive){
             starslist.push(<span key={uuid()} className="text-info">★</span>);
         }
         else{
            starslist.push(<span key={uuid()}>★</span>);
         }
     }
    return (
            <div>
          <img className="rounded-circle"
           src={imageurl} alt={name} 
           style={{width: "100px", height: "100px"}} />
          <div>
            {starslist}
          </div>
        </div>
    );
}
export default Skill;