import { Wod, CreateWodMutationArgs, WodType } from '../types'

const getWod = (): Wod => null

const latestWod = (): Wod => ({
  id: 181020,
  type: WodType.Rest,
  image: {
    url:
      'https://d1s2fu91rxnpt4.cloudfront.net/mainsite/w20181020/raw/c6fddc556a0208f_718463.jpg'
  }
})

export const createWod = (_: object, { wod }: CreateWodMutationArgs): Wod => ({
  ...wod
})

export const resolvers = {
  Query: {
    getWod,
    latestWod
  },
  Mutation: {
    createWod
  }
}
