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

## FInishing the SignIn

## Creating the SignUp

# 3) Rotas Públicas