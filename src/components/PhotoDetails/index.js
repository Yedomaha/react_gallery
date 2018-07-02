import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Photo from "../Photo";
import { Link } from "react-router-dom";
import Menu from "../Menu";
import "./PhotoDetails.css";

class PhotoDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Menu />
        <div className="photo-container_d">
          <Photo imageData={this.props.location.imageData} />
          <div>
            <div className="details_text">
              Описание={" "}
              {this.props.location.imageData && this.props.location.imageData.caption
                ? this.props.location.imageData.caption.text
                : "N/A"}
            </div>
            <div className="details_text">
              Тэги={" "}
              {this.props.location.imageData
                ? this.props.location.imageData.tags
                : "N/A"}
            </div>
            <div className="details_text">
              Время публикации(unix)={" "}
              {
                this.props.location.imageData.created_time
              }
            </div>

            <Link to="/">
              <button className="button_d" bsClass="primary">Back!</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoDetails;
