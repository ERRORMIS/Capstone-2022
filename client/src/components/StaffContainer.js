import React, { Component } from "react";
import Wrapper from "../assets/wrappers/BigSidebar";
import { bootstrap } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./StaffContainer.css";

export default class StaffContainer extends Component {
  render() {
    return (
      <Wrapper>
        <div class="card w-75">
          <div class="card-body">
          <img  class="profile-img" src="https://www.sliit.lk/profile/uploads/Prof_Rahula_Attalage.jpg" alt="Sunflower" />
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="/" class="btn btn-primary">
              Button
            </a>
          </div>
        </div>
        <div class="card w-75">
          <div class="card-body">
          <img class="profile-img" src="https://www.sliit.lk/profile/uploads/Prof_Rahula_Attalage.jpg" alt=""/>
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="/" class="btn btn-primary">
              Button
            </a>
          </div>
        </div>
        <div class="card w-75">
          <div class="card-body">
          <img  class="profile-img" src="https://www.sliit.lk/profile/uploads/scan_image_1505718382-Professor_Mahesha_Kapurubandara1.jpg" alt=""/>
          <h1 class="profile-name">Prof. Nimal Rajapakse</h1>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="/" class="btn btn-primary btn-profile">
              Button
            </a>
          </div>
        </div>
        <div class="card w-75">
          <div class="card-body">
              <img  class="profile-img" src="https://www.sliit.lk/profile/uploads/deans-photo.jpg" alt=""/>
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="/" class="btn btn-primary">
              Button
            </a>
          </div>
        </div>
        <div>
 
        </div>
      </Wrapper>
    );
  }
}
