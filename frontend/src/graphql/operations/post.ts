import {gql} from "@apollo/client"

export const postFields  =`
    id
    author {
        id
        username
    }
    title
    desc
`

export default {
    Query: {
        readPosts: gql`
            query ReadPosts {
                readPosts  {
                    ${postFields}
                }
            }
        `,
    },
    Mutation: {
        sendPost: gql`
            mutation SendPost(
                $id: String!,
                $authorId:String!,
                $title: String,
                $desc: String!
                # $image: String
                ) {
                sendPost(
                id: $id,
                authorId: $authorId,
                title: $title,
                desc: $desc
                # image: $image
                ) 
            }
        `
    },
    Subscription: {},
}