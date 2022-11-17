## Technologies

* [Typescript 4.7](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-4.html)
* [Express 4.18](https://expressjs.com/)
* [Yarn](https://yarnpkg.com/)
* [Supertest](https://github.com/visionmedia/supertest#readme)
* [JEST](https://jestjs.io/es-ES/)
* [Docker](https://www.docker.com/)
* [Make](https://www.gnu.org/software/make/manual/make.html)

## Getting Started

Within the [Makefile](Makefile) you can handle the entire flow to get everything up & running:

1. Install `make` on your computer, if you do not already have it.
2. Install the Yarn dependencies: `make deps`
3. Start the application: `make up`

As you could see on the [Makefile](Makefile) script, you could just avoid those steps and just execute `make up`, as
**deps** are dependant of it.

Once these steps are finished, you could access to the application navigating
into [http://localhost:8000/ping](http://localhost:8000/ping).

## Overview

This skeleton is based on
a [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) approach, so you
could find the first basic elements:

> You could
> [find here an amazing article](https://bazaglia.com/clean-architecture-with-typescript-ddd-onion/) explaining this
> Clean Architecture with Node.js! (credits to [@bazaglia](https://github.com/bazaglia)).

### Controllers layer

This folder contains the basic routes to expose in your API. You could add here as much HTTP routes as you need.

### Domain layer

This layer is the one in charge of the different use cases of the application. A Use Case it's a workflow of what should
it happen to a concrete Domain entity once interacts with the application.

This is the layer which would use any external service and communicate with the world (ie. APIs, databases, etc...)

### Domain layer

Any of your domain Entities that models your business logic. These classes should be completely isolated of any external
dependency or framework.


## License

This project is licensed with the [MIT license](LICENSE).

--- 
