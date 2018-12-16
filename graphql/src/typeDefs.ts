import { gql } from 'apollo-server'

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

  input LocationInput {
    name: String!
    url: String!
  }

  type WodImage {
    url: String!
    credit: String
    location: Location
  }

  input WodImageInput {
    url: String!
    credit: String
    location: LocationInput
  }

  type Wod {
    id: Int!
    type: WodType!
    image: WodImage!
  }

  input WodInput {
    id: Int!
    type: WodType!
    image: WodImageInput!
  }

  type Query {
    getWod(id: Int!): Wod
    latestWod: Wod!
  }

  type Mutation {
    createWod(wod: WodInput!): Wod!
  }
`
