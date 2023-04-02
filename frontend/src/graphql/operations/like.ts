import {gql} from "@apollo/client"

export const likeFields = `
    id
    user {
        id
    }
    
`

export default {
    Query: {
        postLikes: gql`
            query PostLikes ($postId: String!) {
                postLikes (postId: $postId) {
                    ${likeFields}
                }
            }
        `
    },
    Mutation: {
        sendLike: gql`
            mutation SendLike (
                $id: String!,
                $userId: String!,
                $postId: String!
            ) {
                sendLike(
                    id:$id,
                    userId:$userId,
                    postId:$postId
                )
            }
        `
    },
}