import React from 'react';
import Compass from '../vendor/compass';

class CompassApp extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      heading: 0,
      direction: '',
      error: false
    };

    this.setError = this.setError.bind(this);
    this.setHeading = this.setHeading.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    Compass.noSupport(this.setError);

    // eslint-disable-next-line no-undef
    Compass.watch(this.setHeading);

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
    let direction = 'hm';
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
        </div>
      );
    }else{
      return (
        <div id="container">
          <h3>You look towards</h3>
          {this.state.error === true && 'Device not supported'}
          <h1>{this.state.direction}</h1>
          {Math.round(this.state.heading)}°
        </div>
      );
    }
  }
}

export default CompassApp;
