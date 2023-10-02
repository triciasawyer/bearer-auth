# Bearer Auth

## Author: Tricia Sawyer

### Problem Domain

This project extends the functionality of the existing authentication server, enabling users who have successfully logged in using basic authentication (username and password) to continuously authenticate using a "token." This token-based authentication enhances security and user experience.

### Setup

#### Environment Variables

Ensure you have the following environment variables defined in your `.env` file:

- `PORT`: Port variable to specify the server's listening port.

#### Initializing and Running the Application

To initialize and run the application, follow these steps:

- Clone the repository to your local machine.
- Install project dependencies using `npm i`.
- Execute the command `npm test` to run tests.
- Start the server by running `nodemon` in your terminal.

### Routes

- POST `/signin`: Endpoint for user sign-in using token-based authentication.
- POST `/signup`: Endpoint for user sign-up and basic authentication.

### Deployment

Access the deployed version of the application at [Render deploy](https://bearer-auth-prod.onrender.com)

### Collaborators

Ryan Gallaway

<!-- ### Pull Request

[PR 1](dev) -->

### UML Diagram

![UML Diagram](./lab7-UML.png)

This Bearer Auth project builds upon the existing authentication server by introducing token-based authentication. Users who have logged in using basic authentication can now continuously authenticate using tokens, adding an extra layer of security to routes that require valid login credentials.
