import * as React from "react";
import "./CardNote.scss"
// tslint:disable:max-line-length
// *  Sample for CSS Basic Layout Cards.
function Basic(props) {
  return (
    <div className="CardNote">
      <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6" style={{padding:"10px"}}>
        <div className="e-card" id="basic_card">
          <div className="e-card-header">
            <div className="e-card-header-caption">
              <div className="e-card-title">
                Note Titile
              </div>
              <div className="e-card-sub-title">
                {props.aurthor}
                
              </div>
            </div>
          </div>
          <div className="e-card-content">
          {props.text}
            Tech evangelists are currently pounding their pulpits about all
            things AI, machine learning, analytics—anything that sounds like the
            future and probably involves lots of numbers. Many of these topics
            can be grouped under the intimidating term data science.
          </div>
          <div className="e-card-actions">
            <button className="e-btn e-outline e-primary">Read More</button>
            <button className="e-btn e-outline e-primary" style={{marginLeft:"10px"}}>Delete Note</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Basic;
