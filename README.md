
# fw12-backend - Pengen Nonton


## HI FRIENDS .. !!


This repository contains the backend code for the e-commerce website ticketing. It is built using Node.js and Express


## Installation

To install the dependencies for this project, run the following command:

```bash
  npm install
```
    
## Usage
To start the server, run the following command:

```bash
npm start
```

By default, the server will listen on port 8888. You can change the port number by setting the PORT environment variable.
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file


`PORT =`

`DATABASE =`

`BACKEND_SECRET =`

`CLOUD_NAME =`

`API_KEY =`

`API_SECRET =`
## API Reference

### Authorization

#### Login

```http
  POST /auth/login
```

| Request Body | Type  | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**, must email format|
| `password` | `string` | **Required**, min 8 character, 1 symbol, 1 number, 1 upper case

#### Register

```http
  POST /auth/register
```

| Request Body | Type  | Description                |
| :-------- | :------- | :------------------------- |
| `firstName` | `string` | **Required**, |
| `lastName` | `string` | **Required**, |
| `email` | `string` | **Required**, must email format|
| `password` | `string` | **Required**, min 8 character, 1 symbol, 1 number, 1 upper case
| `phone` | `string` | **Required**, must 10 ~ 13 digits |

#### Forgot Password

```http
  POST /auth/forgotPassword
```

| Request Body | Type  | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**, must email format|

#### Reset Password

```http
  POST /auth/resetPassword
```

| Request Body | Type  | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**, must email format|
| `code` | `number` | **Required**,|
| `password` | `string` | **Required**, min 8 character, 1 symbol, 1 number, 1 upper case
| `password` | `string` | **Required**, min 8 character, 1 symbol, 1 number, 1 upper casedigits |

### GET MOVIE

#### Now Showing Movie

```http
  GET /movies/nowShowingMovie
```

#### Up Coming Movie

```http
  GET /movies/upcomingMovie
```

#### Get All Movie

```http
  GET /movies?page=1&limit=4&search=&sortBy=&sort=
```

| Params | Type  | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `number` | Optional |
| `limit` | `number` | Optional |
| `search` | `string` | Optional |
| `sortBy` | `string` | Optional |
| `sort` | `string` | Optional |
