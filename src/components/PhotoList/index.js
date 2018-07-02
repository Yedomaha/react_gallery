import React, { Component } from "react";
import { FormControl } from "react-bootstrap";
import Photo from "../Photo";
import Menu from "../Menu";
import "./PhotoList.css";
import "../../utils/firebase";

class PhotoList extends Component {
  constructor(props) {
    super(props);

    this.state = { photos: [], filteredPhotos: [], filter: "" };
    this.loadPhotos();
  }

  loadPhotos() {
    var tok = "207095767.949d13b.d59d973a05da4bb688a6cc02c5649d12",
      userid = 207095767,
      kolvo = 12;

    fetch(
      `https://api.instagram.com/v1/users/${userid}/media/recent?access_token=${tok}`
    )
      .then(response => response.json())
      .then(result => {
        if (result && result.data && result.data.length) {
          console.log("result=", result);
          var resultat = result.data;
          resultat.length = kolvo;
          console.log("resultat=", resultat);
          this.setState({
            photos: result.data && result.data.length ? result.data : [],
            filteredPhotos: result.data && result.data.length ? result.data : []
          });
        }
      });
  }

  render() {
    return (
      <div>
        <Menu />
        <div className="input-container">
          <p className="pl_caption">MAIN PAGE</p>
          <FormControl
            className="filter-class"
            type="text"
            value={this.state.filter}
            placeholder="Enter tag"
            onChange={e => {
              const newValue = e.target.value;
              const filteredPhotos =
                newValue && newValue.length
                  ? this.state.photos.filter(
                    photo =>
                      photo.tags &&
                      photo.tags.length &&
                      photo.tags.filter(tag => tag.includes(newValue)).length
                  )
                  : this.state.photos;

              this.setState({
                filter: newValue,
                filteredPhotos: filteredPhotos
              });
            }}
          />
        </div>
        <div className="plcont">
          {this.state.filteredPhotos && this.state.filteredPhotos.length ? (
            this.state.filteredPhotos.map(item => (
              <Photo imageData={item} key={item.id} />
            ))
          ) : (
              <span>no photos</span>
            )}
        </div>
      </div>
    );
  }
}
export default PhotoList;
