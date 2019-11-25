import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./post";
import "./home.css";
import Notification from 'react-web-notification'
import Pusher from 'pusher-js';
import { getPostFromApi } from '../../action.js';

export class Home extends Component {

  componentDidMount() {
    this.props.getPosts('https://blooddonation-ws.herokuapp.com/api/posts')
  }
  constructor(props) {
    super(props);
    this.state = {
      ignore: true,
      title: ''
    };
    var groupname = ""
    const user = JSON.parse(localStorage.getItem("user"))
    const bloodgroup = user.bloodgroup
    switch (bloodgroup) {
      case "A+": groupname = "AP"
      case "O+": groupname = "OP"
      case "B+": groupname = "BP"
      case "AB+": groupname = "ABP"
      case "A-": groupname = "AM"
      case "O-": groupname = "OM"
      case "B-": groupname = "BM"
      case "AB-": groupname = "ABM"
    }

    const pusher = new Pusher("82be38e95b2679156d2e", {
      cluster: 'mt1',
      encrypted: true
    });

    const posts_channel = pusher.subscribe("bloodrequest");
    posts_channel.bind("new-request", data => {
      console.log("data.bloodType<===>"+groupname)
      console.log(data)
      if (data.notif.bloodType.includes(groupname)) {
        this.handleButtonClick(data.notif)
      }
    }, this);
  }

  handlePermissionGranted() {
    console.log('Permission Granted');
    this.setState({
      ignore: false
    });
  }
  handlePermissionDenied() {
    console.log('Permission Denied');
    this.setState({
      ignore: true
    });
  }
  handleNotSupported() {
    console.log('Web Notification not Supported');
    this.setState({
      ignore: true
    });
  }

  handleNotificationOnClick(e, tag) {
    console.log(e, 'Notification clicked tag:' + tag);
  }

  handleNotificationOnError(e, tag) {
    console.log(e, 'Notification error tag:' + tag);
  }

  handleNotificationOnClose(e, tag) {
    console.log(e, 'Notification closed tag:' + tag);
  }

  handleNotificationOnShow(e, tag) {
    this.playSound();
    console.log(e, 'Notification shown tag:' + tag);
  }

  playSound(filename) {
    document.getElementById('sound').play();
  }

  handleButtonClick(data) {

    if (this.state.ignore) {
      return;
    }

    const now = Date.now();

    const title = data.user.firstname + " " + data.user.lastname;
    const body = "For Who would like to support us. " + data.bloodgroup + " blood type is needed. Please Contact us";
    const tag = now;
    const icon = 'http://mobilusoss.github.io/react-web-notification/example/Notifications_button_24.png';
    // const icon = 'http://localhost:3000/Notifications_button_24.png';

    // Available options
    // See https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification
    const options = {
      tag: tag,
      body: body,
      icon: icon,
      lang: 'en',
      dir: 'ltr',
      sound: '../../sound.mp3'  // no browsers supported https://developer.mozilla.org/en/docs/Web/API/notification/sound#Browser_compatibility
    }
    this.setState({
      title: title,
      options: options
    });
  }

  handleButtonClick2() {
    this.props.swRegistration.getNotifications({}).then(function (notifications) {
      console.log(notifications);
    });
  }
  render() {
    const { posts, loading } = this.props.posts;
    if (loading) {
      return <h1>Loading</h1>
    }
    return (
      <>
        <Notification
          ignore={this.state.ignore && this.state.title !== ''}
          notSupported={this.handleNotSupported.bind(this)}
          onPermissionGranted={this.handlePermissionGranted.bind(this)}
          onPermissionDenied={this.handlePermissionDenied.bind(this)}
          onShow={this.handleNotificationOnShow.bind(this)}
          onClick={this.handleNotificationOnClick.bind(this)}
          onClose={this.handleNotificationOnClose.bind(this)}
          onError={this.handleNotificationOnError.bind(this)}
          timeout={5000}
          title={this.state.title}
          options={this.state.options}
          swRegistration={this.props.swRegistration}
        />
        <audio id='sound' preload='auto'>
          <source src='../../sound.mp3' type='audio/mpeg' />
          <source src='../../sound.ogg' type='audio/ogg' />
          <embed hidden={true} autostart='false' loop={false} src='../../sound.mp3' />
        </audio>
        <div className="row">
          <div className="col-12 blood-hero">
            <div className="overlay text-focus-in">
              <h2>BLOOD DONATION</h2>
              <p className="text-flicker-in-glow">made in tunisia</p>
            </div>
          </div>
        </div>{" "}
        <div
          className="row "
          style={{ padding: "30px", boxSizing: "border-box" }}
        >
          <div className="col-12">
            {posts.map(el => (
              <Post post={el} />
            ))}
          </div>
        </div>
      </>
    )


  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    loading: state.loading

  };
};

const mapDispatchToProps = { getPosts: getPostFromApi }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
