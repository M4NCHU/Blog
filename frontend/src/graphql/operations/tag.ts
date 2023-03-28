import {gql} from "@apollo/client"

export default {
    Query: {},
    Mutation: {
        createTag: gql`
            mutation CreateTag (
                $id: String!,
                $tagName: String!,
            ) {
                createTag(id: $id, tagName: $tagName)
            }
        `
    },
    Subscription: {},
}