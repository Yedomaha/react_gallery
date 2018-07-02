import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Photo.css";
import firebase from 'firebase';


class Photo extends Component {
  constructor(props) {
    super(props);

    this.state = { like: 0, dislike: 0 };
  }

  componentWillMount() {
    // this.setState({ like: 11, dislike: 22 });
  }


  dislikeClick() {
    this.setState({ dislike: this.state.dislike + 1 });
  }

  likeClick() {
    //fetch to database, increment likes count
    this.setState({ like: this.state.like + 1 });
  }

  render() {
    return (
      <div className="photo-container">
        <Link
          to={{
            pathname: `/details/${this.props.imageData.id}`,
            imageData: this.props.imageData
          }}
        >
          <img
            src={this.props.imageData.images.low_resolution.url}
            alt="photo"
          />
        </Link>
        <div>
          Likes:{this.state.like}, Dislikes:{this.state.dislike}
        </div>
        <div className="butttons-container">
          <Button bsStyle="primary" onClick={() => this.likeClick()}>
            Like
          </Button>&nbsp;
          <Button bsStyle="danger" onClick={() => this.dislikeClick()}>
            UnLike
          </Button>
        </div>
      </div>
    );
  }
}

export default Photo;
