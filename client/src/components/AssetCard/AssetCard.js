import React from "react";
import "./AssetCard.css";
import { Link } from "react-router-dom";

const AssetCard = (props) => {
  return (
<div className="card border-primary mb-3">
  <h3 className="card-header">KKS: {props.project.assetLocation}</h3>
  <h3 className="card-header">Asset Name: {props.project.assetName}</h3> 
  <div className="card-body">
    {/* <h5 className="card-title">Asset Name: {props.project.assetName}</h5> */}
    <h6 className="card-subtitle text-muted">e.u.: {props.project.assetE_U}</h6>
    <h6 className="card-subtitle text-muted">Max Range: {props.project.upperRange}</h6>
    <h6 className="card-subtitle text-muted">Low Range: {props.project.lowerRange}</h6>
    <h6 className="card-subtitle text-muted">Limit Value: {props.project.alarmValue1}</h6>
    {/* <h6 className="card-subtitle text-muted">Limiter: {props.project.historical}</h6> */}

  </div>



</div>
  );
};

export default AssetCard;