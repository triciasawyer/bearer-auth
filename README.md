# Bearer auth

### Author: Tricia Sawyer

### Problem Domain

Any user that has successfully logged in using basic authentication (username and password) is able to continuously authenticate … using a “token”

### Links and Resources

- [GitHub Actions ci/cd]
- [back-end prod server url]

### Collaborators

Ryan Gallaway in class together, UML

### Setup

.env requirements (where applicable)
port variable exists within the env sample

How to initialize/run your application (where applicable)
clone repo, npm i, then run nodemon in the terminal

#### Routes

/signin
/signup

#### Tests

to run tests, after running `npm i`, run the command `npm test`

#### Deployed version

[Render deploy](https://bearer-auth-prod.onrender.com)

#### PR

[PR 1](dev)

#### UML

![UML](./lab7-UML.png)

Extends my current authentication server functionality, which enables the creation of user accounts and manages basic authentication. This new server takes it a step further by incorporating tokens to allow users to re-authenticate. This additional layer of authentication safeguards routes that demand a valid login.
