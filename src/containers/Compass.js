import React from 'react';
import Compass from '../vendor/compass';

class CompassApp extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      heading: 0,
      direction: '',
      message: '',
      error: false
    };

    this.setError = this.setError.bind(this);
    this.setHeading = this.setHeading.bind(this);
  }

  componentDidMount() {

    Compass.noSupport(this.setError).needGPS(function () {
      this.setState({message: 'We need GPS signal. Go outside'});
    }).needMove(() => {
      this.setState({message: 'GPS needs to be calibrated, move forward a bit.'});
    }).init(() => {
      this.setState({message: ''});
    }).watch(this.setHeading);

    /*
    // http://stackoverflow.com/questions/16048514/can-i-use-javascript-to-get-the-compass-heading-for-ios-and-android
    if (window.DeviceOrientationEvent) {
      // Listen for the deviceorientation event and handle the raw data
      window.addEventListener('deviceorientation', () => {
        let heading;

        if(event.webkitCompassHeading) {
          // Apple works only with this, alpha doesn't work
          heading = event.webkitCompassHeading;
        }else{
          heading = event.alpha;
        }
        this.setHeading(heading);
      });
    }else{
      this.setError();
    }
    */
  }

  setError() {
    this.setState({error: true});
  }

  setHeading(heading) {
    let direction = 'the unknown';
    if(window.innerWidth > window.innerHeight) { // Landscape mode
      heading += 90;
      heading %= 360;
    }
    heading += 45/2;
    switch (true) {
      case (-45 <= heading && heading < 0):
        direction = 'North-West';
        break;
      case (0 <= heading && heading < 45):
        direction = 'North';
        break;
      case (45 <= heading && heading < 90):
        direction = 'North-East';
        break;
      case (90 <= heading && heading < 135):
        direction = 'East';
        break;
      case (135 <= heading && heading < 180):
        direction = 'South-East';
        break;
      case (180 <= heading && heading < 225):
        direction = 'South';
        break;
      case (225 <= heading && heading < 270):
        direction = 'South-West';
        break;
      case (270 <= heading && heading < 315):
        direction = 'West';
        break;
      case (315 <= heading && heading < 360):
        direction = 'North-West';
        break;
      case (360 <= heading && heading < 405):
        direction = 'North';
        break;
      default:
        direction = 'Ooops';
    }
    heading -= 45/2;
    this.setState({heading, direction});
  }

  render() {
    if(this.state.error === true) {
      return (
        <div id="container">
          <h1>Sorry,</h1>
          <h3>Device not supported</h3>
          <p>Open page on a mobile phone</p>
        </div>
      );
    }else if(this.state.message !== ''){
      return (
        <div id="container">
          <h3>{this.state.message}</h3>
        </div>
      );
    }else{
      return (
        <div id="container">
          <h3>You look towards</h3>
          <h1>{this.state.direction}</h1>
          <p id='heading'>{Math.round(this.state.heading)}°</p>
        </div>
      );
    }
  }
}

export default CompassApp;
