import React from "react";
import "./AssetCard.css";
import { Link } from "react-router-dom";

const AssetCard = (props) => {
  return (
<div className="card border-primary mb-3">
  <h3 className="card-header">{props.project.title}</h3>
  <div className="card-body">
    <h5 className="card-title">{props.project.status}</h5>
    <h6 className="card-subtitle text-muted">{props.project.status_date}</h6>
  </div>
  <div className="card-body">
    <p className="card-text">
      {props.project.description}
    </p>
  </div>

<div className="row cardFooter">
<div className="col-sm-6">
  <div className="card-body">
    <Link className="card-link" to={"/projects/" + props.project._id}>Edit Project</Link>
  </div>
</div>
<div className="col-sm-6">
  <div className="card-footer text-muted">
    {props.project.category} @ {props.project.progress} %
  </div>
</div>
</div>

</div>
  );
};

export default ProjectCard;