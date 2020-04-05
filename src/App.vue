<script>
export default {
  name: 'Compass',
  data: () => ({
    hasAccess: false,
    heading: 0,
    error:
      (!DeviceOrientationEvent || !DeviceOrientationEvent.requestPermission) &&
      'Device orientation is not supported by your device'
  }),
  computed: {
    direction() {
      if (this.heading < 0) return 'Ooops'
      if (this.heading < 45 - 22.5) return 'North'
      if (this.heading < 90 - 22.5) return 'North-East'
      if (this.heading < 135 - 22.5) return 'East'
      if (this.heading < 180 - 22.5) return 'South-East'
      if (this.heading < 225 - 22.5) return 'South'
      if (this.heading < 270 - 22.5) return 'South-West'
      if (this.heading < 315 - 22.5) return 'West'
      if (this.heading < 360 - 22.5) return 'North-West'
      if (this.heading < 360) return 'North'
      return 'Ooops'
    }
  },
  methods: {
    async requestPermission() {
      // The call of this function has to be the result of a user action
      const permissionState = await DeviceOrientationEvent.requestPermission()
      if (permissionState == 'granted') {
        this.hasAccess = true
        window.addEventListener('deviceorientation', this.handleOrientation)
      } else {
        this.error = `Access ${permissionState}`
      }
    },
    handleOrientation(event) {
      let heading

      // A PDF explaining this: https://www.w3.org/2008/geolocation/wiki/images/e/e0/Device_Orientation_%27alpha%27_Calibration-_Implementation_Status_and_Challenges.pdf
      if (event.webkitCompassHeading) {
        heading = event.webkitCompassHeading
      } else if (event.absolute) {
        heading = event.alpha
      } else {
        return
      }

      // Landscape mode
      if (window.innerWidth > window.innerHeight) {
        heading += 90
        heading %= 360
      }

      this.heading = heading
    }
  }
}
</script>

<template lang="pug">
  div(v-if="error")
    h1 Sorry,
    h3 {{ error }}
  div(v-else-if="!hasAccess")
    p In order to use the compass you need to give access to your device's device orientation
    button(@click="requestPermission") Give access
  div(v-else)
    h3 You look towards
    h1 {{ direction }}
    footer {{ Math.round(heading) }}°
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:500,900');

html {
  font-family: 'Roboto', sans-serif;
  background-color: white;
}

div {
  margin-top: 50px;
  margin-left: 10px;
}

h1 {
  font-weight: 900;
  font-size: 6em;
  margin: 10px 0 10px 0;
  color: #2e4057;
}

h3 {
  font-weight: 500;
  font-size: 2em;
  margin: 10px 0 10px 0;
  color: #048ba8;
}

p {
  color: #2f2d2e;
}

button {
  background-color: #048ba8;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 1em;
  padding: 10px;
}

footer {
  position: fixed;
  bottom: 40px;
}
</style>
