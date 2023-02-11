# Gerald Technologies

## Architecture

The driving goal of the architecture of the boilerplate is separation of concerns. Namely:

- **Presentational components are separated from containers** (aka "screens").

  Presentational components are small components that are concerned with _how things look_. Containers usually define whole application screens and are concerned with _how things work_: they include presentational components and wire everything together.

  If you are interested you can [read more about it here](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).


- **React Navigation**

 ![Image](https://reactnavigation.org/img/spiro.svg)

 What is React Navigation? React Navigation is a standalone library that enables you to implement navigation functionality in a React Native application. React Navigation is written in JavaScript and does not directly use the native navigation APIs on iOS and Android. Rather, it recreates some subset of those APIs


## Content

The project contains:

- a [React Native](https://facebook.github.io/react-native/) (v**0.66.3**) application (in "[ejected](https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md)" mode to allow using dependencies that rely on native code)
- a [clear directory layout](#directory-layout) to provide a base architecture for your application
- [React Navigation](https://reactnavigation.org/) (v6.0.2) with a [Navigation Service](src/navigation) to handle routing and navigation in the app, with a splash screen setup by default

- [prettier](https://prettier.io/) and [eslint](https://eslint.org/) preconfigured for React Native


## Directory layout

- [`env`](env.json) Application environment data
- [`scripts`](scripts) for handling scripts of setting enviroments of development and producton
- [`src/api`](src/api) for handlig api base url
- [`src/assets`](src/assets) for using images,icons, and animations file. This folder contains four major subdirectiry eg.
- [`src/assets/animations`](src/assets/animation) Custom animation file for lottie animations
- [`src/assets/fonts`](src/assets/fonts) Fonts used in this application
- [`src/assets/icons`](src/assets/icons) Icons used in this application
- [`src/assets/images`](src/assets/images) Image files of the app
- [`src/components`](src/components): presentational components
- [`src/config`](src/config): configuration of the application
- [`src/constants`](src/contants) : application constants data eg. errorText or some static text eg. Guidlines
- [`src/helpers`](src/helpers) : Helper functions
- [`src/navigation`](src/navigation): react navigation navigators
- [`src/services`](App/Services): application services, e.g. API clients
- [`src/theme`](src/theme): base styles for the application
- [`src/utils`](src/utils) : Utilities functions for applications eg. email validation or share etc

For more information on each directory, click the link and read the directory's README.

## Requirements

Node 10 or greater is required. Development for iOS requires a Mac and Xcode 12 or up, and will target iOS 9 and up.

You also need to install the dependencies required by React Native:

- for [Android development](https://reactnative.dev/docs/environment-setup)
- for [iOS development](https://reactnative.dev/docs/environment-setup)

## Running the project

Assuming you have all the requirements installed, you can setup and run the project by running:

- `yarn install` to install the dependencies
- run the following steps for your platform

### Android

- only the first time you run the project, you need to generate a debug key with:
  - `cd android/app`
  - `cd ../..` to come back to the root folder
- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn android` to run the Android application (remember to start a simulator or connect an Android phone)

### iOS

- `cd ios`
- `pod install` to install pod dependencies
- `cd ..` to come back to the root folder
- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn ios` to run the iOS application (remember to start a simulator or connect an iPhone phone)

## Setting the environment

- To change environment for _development_ run command `yarn env:dev`
- To change environment for _production_ run command `yarn env:prod`

## Useful documentation

### Building apk and ipa

- To generate apk
  
  `cd android`
  `./gradlew assembleRelease`
  
  Through Android Studio
  
  Select `Build`->`Generate Signed Bundle apk`</br>
  Choose Release type for uploading in google play store select `Android app bundle` otherwise select `Apk`</br>
  Select `Next`</br>
  Fill every detail and</br>
  Select `Next`
  
- To generate Ipa
  
  `xcodebuild clean archive -scheme <Scheme> -configuration Release -archivePath ../builds/<App>.xcarchive DEVELOPMENT_TEAM=<DevTeam> PROVISIONING_PROFILE=<PROVISIONING_PROFILE> CODE_SIGN_IDENTITY=<CODE_SIGN_IDENTITY>`
  `xcodebuild -exportArchive -archivePath ../builds/<App>.xcarchive -exportPath ../builds/ -exportOptionsPlist ./iosExportOptions.plist`
  
  Through XCode
  
  Select `Any iOS deice (Arm64)`</br>
  Clean Project `CMD+K`</br>
  Select `Product`->`Archive`

### Yarn packages

- For using libraries and dependencies use [`Yarn`](https://classic.yarnpkg.com/en/)

  Yarn is a long continuous length of interlocked fibres, suitable for use in the production of textiles, sewing, crocheting, knitting, weaving, embroidery, or ropemaking.

### Native developement dependencies

- You may want to use [CocoaPods](https://cocoapods.org/) to manage your dependencies (iOS only)
  - [Using CocoaPods to manage your package dependencies](docs/setup%20cocoapods.md)

- You may want to use gradlew for android development [gradle](https://docs.gradle.org/current/userguide/gradle_wrapper.html)



https://user-images.githubusercontent.com/48089919/218252703-bc896057-ce9f-4147-bed3-44bd97012d47.mp4




