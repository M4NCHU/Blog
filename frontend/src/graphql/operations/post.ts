import {gql} from "@apollo/client"

export const postFields  =`
    id
    author {
        id
        username
        name
        image
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
                
                ) {
                sendPost(
                id: $id,
                authorId: $authorId,
                title: $title,
                desc: $desc
                
                ) 
            }
        `
    },
    Subscription: {},
}