import { gql } from "apollo-server";

export const typeDefs = gql`
  enum WodType {
    time
    load
    rounds
    rest
  }

  type Location {
    name: String!
    url: String!
  }

  type WodImage {
    url: String!
    credit: String
    location: Location
  }

  type Wod {
    id: Int!
    type: WodType!
    image: WodImage!
  }

  type Query {
    getWod(id: Int!): Wod
    latestWod: Wod!
  }

  type Mutation {
    createWod(id: Int!, type: WodType!): Wod!
  }
`;
