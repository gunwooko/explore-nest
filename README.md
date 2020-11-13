# NestJS

Learning NestJS by making an enterprise ready API

## `main.ts`

The entry file of the application which uses the core function NestFactory to create a Nest application instance.

### Pipes

Pipes have two typical use cases:

- transformation: transform input data to the desired form (e.g., from string to integer)
- validation: evaluate input data and if valid, simply pass it through unchanged; otherwise, throw an exception when the data is incorrect

## Controllers

`app.controller.ts` : A basic controller with a single route.
Controllers are responsible for handling incoming requests and returning responses to the client.

`nest g co` : Generate a controller declaration.

### @Get

Routes HTTP GET requests to the specified path.

### @Param

Extracts the params property from the req object and populates the decorated parameter with the value of params.

### @Post

Routes HTTP POST requests to the specified path.

### @Body

Extracts the entire body object from the req object and populates the decorated parameter with the value of body.

### @Query

Extracts the query property from the req object and populates the decorated parameter with the value of query. May also apply pipes to the bound query parameter.

### @Delete

Routes HTTP POST requests to the specified path.

### @Patch

Routes HTTP PATCH requests to the specified path.

### @Put

Routes HTTP PUT requests to the specified path.

## Providers

`app.service.ts` : A basic service with a single method.

`nest g s` : Generate a service declaration.

## Modules

`app.module.ts` : The root module of the application.
A module is a class annotated with a `@Module()` decorator. The `@Module()` decorator provides metadata that Nest makes use of to organize the application structure.

## Useful Packages

### class-validator

### class-transformer
