import React from "react";
function ProjectCard(props){
    const {title,excerpt,imageurl}=props.project;
    return (
        <div className="card shadow h-100" >
          <img className="card-img-top project" src={imageurl} alt={title}/>
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{excerpt}</p>
            <a href="/" className="stretched-link"></a>
          </div>
        </div>
    );
}
export default ProjectCard; 