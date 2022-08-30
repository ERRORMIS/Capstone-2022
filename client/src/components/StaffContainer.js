import React, { Component } from "react";
import Wrapper from "../assets/wrappers/BigSidebar";
import { bootstrap } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./StaffContainer.css";

// export default class StaffContainer extends Component {
const StaffContainer = ({name,lastName,email, contactNo,address,department,jobRole,img,nic }) => {

    let new_img = "profile_img.jpg";

    if(img !== ''){
        new_img = img
    }
 
    return (
      <Wrapper>
        <div class="card col-md-6">
          <div>
              <div>
                <img class="profile-img" src={`uploads/${new_img}`} alt="Sunflower" />
                <h5>{name} {lastName}</h5>
              </div>
                <div className="row">
                    <p>Email: {email}</p>
                    <p>NIC: {nic}</p>
                    <p>Contact NO: {contactNo}</p>
                    <p>Address: {address}</p>
                    <p>Department: {department}</p>
                    <p>JobRole: {jobRole}</p>
                    <a href="/" class="btn btn-primary">
                      View
                    </a>
                </div>
              </div>
            </div>
          <div>
        </div>
      </Wrapper>
    );
}

export default StaffContainer
