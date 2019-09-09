/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContent = `query GetContent($id: ID!) {
  getContent(id: $id) {
    id
    intro
    description
    video
    outtro
    why
  }
}
`;
export const listContents = `query ListContents(
  $filter: ModelContentFilterInput
  $limit: Int
  $nextToken: String
) {
  listContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      intro
      description
      video
      outtro
      why
    }
    nextToken
  }
}
`;
