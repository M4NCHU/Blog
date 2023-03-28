import {gql} from "@apollo/client"

export const tagFields = `
    id
    tagName
`

export default {
    Query: {
        readTags: gql`
            query ReadTags {
                readTags {
                    ${tagFields}
                }
            }
        `
    },
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