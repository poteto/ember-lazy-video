# ember-lazy-video

[![Circle CI](https://circleci.com/gh/poteto/ember-lazy-video.svg?style=svg)](https://circleci.com/gh/poteto/ember-lazy-video)

### Installation

```bash
$ ember install ember-lazy-video
```

#### Installation for ember-cli 0.1.5 - 0.2.2

```bash
$ ember install:addon ember-lazy-video
```

`ember-lazy-video` is a simple component and service that deals with lazy loading of videos from specified providers.

## Usage

`ember-lazy-video` currently supports lazy loading videos from Youtube, Vimeo and Instagram.  Usage in your app is as simple as passing the video's url into a `lazy-video` component:

`{{lazy-video url="https://vimeo.com/108532122"}}`

`{{lazy-video url="https://www.youtube.com/watch?v=sD72LbIk02M"}}`

`{{lazy-video url="http://instagram.com/p/vXeXAnsieB/"}}`

You can add a custom poster image by setting the poster attribute:

`{{lazy-video url="https://vimeo.com/108532122" poster="images/poster.jpg"}}`

## Contribution
Please read the [Contributing guidelines](CONTRIBUTING.md) for information on how to contribute.

The goal and scope of the component is simple – be really good at lazy loading videos. This means being able to lazy load videos from any `provider`. The component should also be customizable to a certain degree: for example, being able to change the play button style/template, or being able to pass in their own thumbnail. Customization does not entail changing the functionality of the component, although it is possible we could abstract this out (in a separate repo) so that it could lazy load any element.

## Installation

* `git clone https://github.com/poteto/ember-lazy-video.git`
* `cd ember-lazy-video`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
