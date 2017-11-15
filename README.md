# Airbitz Javascript UI Sample

This repo contains a sample application demonstrating the [Airbitz Edge Login UI](https://github.com/Airbitz/airbitz-core-js-ui). The application comes in two flavors, one using React Native and the other using HTML.

Before running either application, just do `npm install` to fetch the dependencies. You *must* be using NPM 5 or greater for this to work.

To run the HTML application, do `npm run start`. This will launch a simple web server and open a browser window at the [appropriate address](http://localhost:8001/).

## Android NDK Setup

(MacOS) If the NDK is already installed from Android Studio, it should be in `/Users/[user]/Library/Android/sdk/ndk-bundle`.
If not, download and unzip the NDK from https://developer.android.com/ndk/index.html

Set `ANDROID_NDK_HOME` environment variable to the path of the NDK. ie

    export ANDROID_NDK_HOME=/Users/bob/Library/Android/sdk/ndk-bundle

To run the React Native application, first make sure you have the [appropriate tools](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies) installed on your computer. Once that's all configured, just do `react-native run-ios` or `react-native run-android` as normal to start the app.

## Detailed Docs

https://developer.airbitz.co/javascript
