# ember-lazy-video

[![Circle CI](https://circleci.com/gh/poteto/ember-lazy-video.svg?style=svg)](https://circleci.com/gh/poteto/ember-lazy-video)

```sh
$ npm install ember-lazy-video --save
```

`ember-lazy-video` is a simple component and service that deals with lazy loading of videos from specified providers.

## Usage

`ember-lazy-video` currently supports lazy loading videos from Youtube, Vimeo and Instagram.  Usage in your app is as simple as passing the video's url into a `lazy-video` component:

`{{lazy-video url="https://vimeo.com/108532122"}}`

`{{lazy-video url="https://www.youtube.com/watch?v=sD72LbIk02M"}}`

`{{lazy-video url="http://instagram.com/p/vXeXAnsieB/"}}`

## Contribution
Please read the [Contributing guidelines](CONTRIBUTING.md) for information on how to contribute.

The goal and scope of the component is simple – be really good at lazy loading videos. This means being able to lazy load videos from any `provider`. The component should also be customizable to a certain degree: for example, being able to change the play button style/template, or being able to pass in their own thumbnail. Customization does not entail changing the functionality of the component, although it is possible we could abstract this out (in a separate repo) so that it could lazy load any element.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
