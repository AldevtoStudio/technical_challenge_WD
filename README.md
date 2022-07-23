# The Phone Cave (WD)

  At The Phone Cave we are looking for someone to help us turn our cave store into a home, and to do so we present you this challenge.

## Information:

### Routes:

| Route                 | HTTP Verb | Description    |
| --------------------- | --------- | -------------- |
| `/phones`             | GET       | Show all phones (use the `phones.json`) as fake data |
| `/phones/:id`         | GET       | Show a phone details|


### How to use:
  1. Fork this repo.
  2. Install all dependencies.
      - Client:
      ```sh
      $ cd client
      $ npm i
      ```
      - Server:
      ```sh
      $ cd server
      $ npm i
      ```
  3. Run both client and server projects
      - Client:
      ```sh
      $ npm start
      ```
      - Server:
      ```sh
      $ npm run dev
      ```