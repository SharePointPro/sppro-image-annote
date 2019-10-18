import React, { Component } from 'react'
import roomImage from './images/room.jpg';
import SpproImageAnnote from 'sppro-image-annote'

export default class App extends Component {



  onSave = (base64) => {
    downloadURI(base64, 'stage.png');
  }

  onClose = () => {
    alert("close window");
  }

  render() {
    return (
      <div>
        <SpproImageAnnote url={roomImage} onSave={this.onSave} onClose={this.onClose} />
      </div>
    )
  }
}

// function from https://stackoverflow.com/a/15832662/512042
function downloadURI(uri, name) {
  var link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}