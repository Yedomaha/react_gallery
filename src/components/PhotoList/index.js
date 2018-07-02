import React, { Component } from "react";
import Photo from "../Photo";
import Menu from "../Menu";
import $ from "jquery";
import "./PhotoList.css";

// var array = [];

// (function($) {
//   var tok = "207095767.949d13b.d59d973a05da4bb688a6cc02c5649d12",
//     userid = 207095767,
//     kolichestvo = 10;

//   $.ajax({
//     url: "https://api.instagram.com/v1/users/" + userid + "/media/recent",
//     data: { access_token: tok, count: kolichestvo },
//     success: function(result) {
//       console.log(result);
//       var array = result.data;
//       for (let x = 0; x < array.length; x++) {
//         array[x] = array[x].images.low_resolution.url;
//         alert(array[1]);
//       }
//     },
//     error: function(result) {
//       console.log(result); // пишем в консоль об ошибках
//     }
//   });
// });

// alert(array[1]);

// const array = ["https://blogsimages.adobe.com/photoshop/files/2012/04/transform.jpg", "https://blogsimages.adobe.com/photoshop/files/2012/04/transform.jpg", "https://blogsimages.adobe.com/photoshop/files/2012/04/transform.jpg"]

class PhotoList extends Component {
  constructor(props) {
    super(props);

    this.state = { photos: [] };
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
            photos: result.data && result.data.length ? result.data : []
          });
        }
      });
  }


  render() {
    return (
      <div>
        <Menu />
        <div className="plcont">
          {this.state.photos && this.state.photos.length ? (
            this.state.photos.map(item => (
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
