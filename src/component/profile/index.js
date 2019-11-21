import React from "react";
import "./profile.css";
import feres from "../graphics/feres.jpg";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

  class Profile extends React.Component {

    render(){
      if (localStorage.getItem('isLogin') != "2") {
        return <Redirect to="/" />;
      }
      const  user  = JSON.parse( localStorage.getItem('user') );

      return (
        
        <div className="row" style={{ padding: "30px" }}>
          <div className="col-lg-3 p-4 ">
            <div className="profile-image-desc">
              <div className="profile-image">
              <img src={"http://graph.facebook.com/"+user.id+"/picture?type=large"}></img>
              </div>
              <div className="profile-desc">
                <div>
                  <span>
                    <i class="far fa-user"></i>name :
                  </span>
                  <span>{user.firstname +' '+user.lastname  }</span>
                </div>
                <div>
                  <span>
                    <i class="far fa-envelope"></i>email :
                  </span>
                  <span>{user.email}</span>
                </div>
                <div>
                  <span>
                    <i class="fas fa-mobile-alt"></i>phone number :
                  </span>
                  <span>{user.number}</span>
                </div>
                <div>
                  <span>
                    <i class="far fa-address-book"></i>blood type :
                  </span>
                  <span>{user.bloodgroup}</span>
                </div>
                <div>
                  <span>
                    <i class="fas fa-question"></i>Request :
                  </span>
                  <span>{user.request}</span>
                </div>{" "}
               
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="profile-other-desc"></div>
          </div>
        </div>
      );
    }
 

}
const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = { }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
