# Todo React App using slash GraphQL powered by Dgraph


### GraphQL Schema Design for Dgraph

We represent that in the GraphQL schema shown below:

```graphql
type Task {
    id: ID!
    title: String!
    completed: Boolean!
}

type User {
    username: String!
    name: String
    tasks: [task]
}
```


## Bring up ToDo App

### `npm install`

Install the dependencies needed to bring up the application.

### `npm start`

Runs the Todo application.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Compiles the Todo application and minifies to generate the production build.

## Screenshots

![Todo App ](./todo_ui.png)
---
