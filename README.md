# ember-lazy-video

`ember-lazy-video` is a simple component and service that deals with lazy loading of videos from specified `providers. 

## Roadmap
- [ ] Write tests, then release early
- [ ] Use `ic-ajax` instead of `jQuery`
- [ ] Refactor service to be able to register new providers
- [ ] Add more default providers

## Contribution
Please read the [Contributing guidelines](CONTRIBUTING.md) for information on how to contribute. 

The goal and scope of the component is simple – be really good at lazy loading videos. This means being able to lazy load videos from any `provider`. The component should also be customizable to a certain degree: for example, being able to change the play button style/template, or being able to pass in their own thumbnail. Customization does not entail changing the functionality of the component, although it is possible we could abstract this out (in a seperate repo) so that it could lazy load any element.

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
