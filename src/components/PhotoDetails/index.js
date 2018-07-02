import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Photo from "../Photo";
import { Link } from "react-router-dom";
import moment from "moment";
import Menu from "../Menu";
import "./PhotoDetails.css";

class PhotoDetails extends Component {
  constructor(props) {
    super(props);

    if (!props.location.imageData) {
      window.location = "/"
    }
  }

  render() {
    return (
      <div>
        <Menu />
        <div className="det_wrap">
          <div className="in-container">
            <p className="pl_caption">PHOTO DETAILS PAGE</p>
          </div>
          <div className="photo-container_d">
            <Photo imageData={this.props.location.imageData} />
            <div>
              <div className="details_text">
                Описание={" "}
                {this.props.location.imageData &&
                  this.props.location.imageData.caption
                  ? this.props.location.imageData.caption.text
                  : "N/A"}
              </div>
              <div className="details_text">
                Тэги={" "}
                {this.props.location.imageData &&
                  this.props.location.imageData.tags &&
                  this.props.location.imageData.tags.length
                  ? this.props.location.imageData.tags.join(" ")
                  : "N/A"}
              </div>
              <div className="details_text">
                Время публикации:&nbsp;
              {moment(
                  Number(this.props.location.imageData.created_time * 1000)
                ).format("MMMM Do YYYY, h:mm:ss a")}
              </div>

              <Link to="/">
                <Button className="button_d" bsClass="primary">
                  Back!
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoDetails;
