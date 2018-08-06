# REST

You can find more info about this repository and how to wrap the REST API it contains with GraphQL [here](https://medium.com/@graphcool/how-to-wrap-a-rest-api-with-graphql-8bf3fb17547d).

> The GraphQL API wrapping this REST API can be found [here](https://github.com/nikolasburk/graphql-rest-wrapper)

## Routes

```
/users
/users/<id>
/users/<id>/posts
/posts
/posts/<id>
/posts/<id>/user
```

To see the data returned by the routes, check [users.json](./data/users.json) and [posts.json](/data/posts.json).

Will soon add database integration to this REST example

## Usage

```sh
git clone git@github.com:nikolasburk/rest-demo.git
cd rest
npm run start
```

Sample requests:

- http://localhost:3000/users
- http://localhost:3000/posts
- http://localhost:3000/users/user-1
- http://localhost:3000/users/user-1/posts
- http://localhost:3000/posts/post-4
- http://localhost:3000/posts/post-4/user
