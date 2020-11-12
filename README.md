# NestJS

Learning NestJS by making an enterprise ready API

## `main.ts`

The entry file of the application which uses the core function NestFactory to create a Nest application instance.

## Controllers

`app.controller.ts` : A basic controller with a single route.
Controllers are responsible for handling incoming requests and returning responses to the client.

## Providers

`app.service.ts` : A basic service with a single method.

## Modules

`app.module.ts` : The root module of the application.
A module is a class annotated with a `@Module()` decorator. The `@Module()` decorator provides metadata that Nest makes use of to organize the application structure.
