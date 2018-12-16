import { gql } from "apollo-server";

export const typeDefs = gql`
  enum WodType {
    time
    load
    rounds
    rest
  }

  type Wod {
    id: Int!
    type: WodType!
  }

  type Query {
    latestWod: Wod!
  }

  type Mutation {
    createWod(id: Int!, type: WodType!): Wod!
  }
`;
