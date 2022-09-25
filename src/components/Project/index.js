import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// Individual Cards 
function ProjectCards(props) {
    return (
      <div className="card"> 
        <div className="img-container">
          <img alt={props.name} src={props.image}/>
        </div>
        <div className="content">
              <p className="card-title">{props.name}</p>
              <p class="proj-icons-container">
              <a href={props.github}><img class="project-icon" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Repo" /></a> 
              <a href={props.deploy}><img class="project-icon" src="https://www.citypng.com/public/uploads/preview/web-page-internet-network-black-icon-png-11640343800kgwcghp4j1.png" alt="Live Application" /></a> 
       
             
             </p>
              <p class="topics">
                    ({props.topics})
                </p>
        </div>
      </div>
    );
}
  
  export default ProjectCards;