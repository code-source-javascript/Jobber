const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const PORT = 5000 || process.env.PORT;
const app = express();

let schema = buildSchema(
  `
    type employer{
        _id:ID!
        cName:String!
        address: String!
        phone:String!

    }

    type RootQuery{
        employers:[employer!]!
    }

    schema{
        query: RootQuery
    }
    `
);
let root = {};

app.use(
  "/api",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
