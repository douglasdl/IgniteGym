# IgniteGym
Ignite Gym

# 1) Application Structure

## Introduction

## Knowing the Project

## [Figma Layout](https://www.figma.com/file/CtJ79ZLsrnQ59uJBLn05pN/Ignite-Gym?node-id=37%3A6&t=cmMMcVLOQGJOVwqH-0)

## Folders Mapping


Create a project with [Expo](https://docs.expo.dev/get-started/create-a-new-app/) Manager Workflow and using Typescript:
```sh
npx create-expo-app mobile --template
```


Install the [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver/blob/master/DOCS.md) development dependency:
```sh
npm install --save-dev babel-plugin-module-resolver
```

Edit the file babel.config.js to the the plugins after the (presets: ['babel-preset-expo'], line):
```js
plugins: [
	[
		'module-resolver',
		{
		root: ['./src'],
		alias: {
			'@dtos': './src/dtos',
			'@assets': './src/assets',
			'@components': './src/components',
			'@screens': './src/screens',
			'@storage': './src/storage',
			'@utils': './src/utils',
			'@services': './src/services',
			'@hooks': './src/hooks',
			'@contexts': './src/contexts',
			'@routes': './src/routes'
		}
		},
	],
],
```

Update the tsconfig.json to be like this:
```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
		"strict": true,
		"baseUrl": "./",
		"paths": {
			"@dtos/*": [
				"src/dtos/*"
			],
			"@assets/*": [
				"./src/assets/*"
			],
			"@components/*": [
				"./src/components/*"
			],
			"@screens/*": [
				"./src/screens/*"
			],
			"@storage/*": [
				"./src/storage/*"
			],
			"@utils/*": [
				"./src/utils/*"
			],
			"@services/*": [
				"./src/services/*"
			],
			"@hooks/*": [
				"./src/hooks/*"
			],
			"@contexts/*": [
				"./src/contexts/*"
			],
			"@routes/*": [
				"./src/routes/*"
			]
		}
	}
}
```

## Application Fonts

Install the [Expo Google Fonts](https://docs.expo.dev/guides/using-custom-fonts/#using-a-google-font):
```sh
npx expo install expo-font @expo-google-fonts/roboto
```

## Customizing the StatusBar

Import the StatusBar from react-native and configure it:
```tsx
import { StatusBar } from 'react-native';

<StatusBar 
	barStyle='light-content'
	backgroundColor='transparent'
	translucent
/>
```

## Application Assets

# 2) Component Library

## Proposal

## Component Library

## Installing the [NativeBase](https://nativebase.io/)

Install the dependencies:
```sh
npm install native-base
npx expo install react-native-svg@12.1.1
npx expo install react-native-safe-area-context@3.3.2
```

## Using the NativeBase

- Create the Loading component usinf the Center and the Spinner.
## Customizing the Default Theme

- Create the folder theme inside src and create the THEME using the extendTheme from native-base.

## Background Image

## Using SVG

Install the dependencies [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer) to use a SVG as a component:
```sh
npm i react-native-svg-transformer -D
```

Create the file metro.config.js as follows:
```js
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  return config;
})();
```
## Heading Component

## Input Component

## Finishing the Inputs

## Button Component

## Using Variants

## Constraining the Variants

## Finishing the SignIn

## Creating the SignUp

# 3) Rotas Públicas

## Proposal

## Install the Stack Navigator

Install the [React Navigation](https://reactnavigation.org/) dependencies:
```sh
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
```

## Create the routes

Create a routes folder inside the src folder:
```sh
mkdir routes
```

Create the 'auth.routes.tsx' file:
```sh
cd routes
touch auth.routes.tsx
```

## Add Typage to the routes

## Create the navigation context

## Removing the Header

## Modifying the navigation theme

## Apply authentication navigation

## Define the standard image

# 4) Private Routes

## Proposal

## Create the App interfaces structure

## Install the bottom navigator

Install the [bottom-tabs](https://reactnavigation.org/docs/tab-based-navigation)
```sh
npm install @react-navigation/bottom-tabs
```

## Create the App routes

## Using the Bottom Tab

## Add Typage to the routes

## Removing the Header

## Removing the menu label

## Changing the bottom navigator icons

## Styling the active and inactive menu

## Styling the Bottom Navigator

## App Routes Recap

# 5) Finishing the interfaces

## Proposal

## Horizontal and Vertical Positioning

## Styling the HomeHeader

## UserPhoto Component

## Logout Button

## Finishing the HomeHeader

## Create the Group component

## Using the Pressable

## Styling the Pressable event

## Showing the selected group

## Listing the groups

## Exercises List Header

## Create the ExerciseCard component

## Listing the exercises

## Home Recap

## Screen Header component

## History Card Component

## Understanding the SelectionList

## Using the SelectionList

## Empty List Message

## History Recap

## User Profile Header

## User Photo

## Skeleton Effect

## Change Photo Button

## Name and e-mail inputs

## Password input

## Profile Recap

## Navigate to the Exercise Screen

## Create the Back button

## Finish the Exercise Header

## Exercise Image

## Fisnishing the Exercise interface

## Exercise Recap

## Interfaces final adjustments

# 6) Photo Galery

##

# 7) Forms

##