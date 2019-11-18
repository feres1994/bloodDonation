import React from "react";
import "./profile.css";
import feres from "../graphics/feres.jpg";
export default function Profile() {
  return (
    <div className="row" style={{ padding: "30px" }}>
      <div className="col-lg-3 p-4 ">
        <div className="profile-image-desc">
          <div className="profile-image"></div>
          <div className="profile-desc">
            <div>
              <span>
                <i class="far fa-user"></i>name :
              </span>
              <span>feres fatnassi</span>
            </div>
            <div>
              <span>
                <i class="far fa-envelope"></i>email :
              </span>
              <span>feresfatnassi@gmail.com</span>
            </div>
            <div>
              <span>
                <i class="fas fa-mobile-alt"></i>phone number :
              </span>
              <span>+21625603884</span>
            </div>
            <div>
              <span>
                <i class="far fa-address-book"></i>blood type :
              </span>
              <span>c5</span>
            </div>
            <div>
              <span>
                <i class="fas fa-question"></i>Request :
              </span>
              <span>000</span>
            </div>{" "}
            <div>
              <span>
                <i class="far fa-sticky-note"></i> Answer :
              </span>
              <span>152</span>
            </div>{" "}
            <div>
              <span>
                <i class="far fa-star"></i>Rate :
              </span>
              <span>44</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-9">
        <div className="profile-other-desc"></div>
      </div>
    </div>
  );
}
