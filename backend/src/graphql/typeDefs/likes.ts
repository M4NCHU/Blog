import gql from "graphql-tag"

const typeDefs =  gql `
    type Like {
        id: String
        user: User
        post: Post
    }
    
    # Queries 

    type Query{
        postLikes(postId: String): [Like]
    }  


    # Mutations

    type Mutation { 
        sendLike(
            id: String
            userId: String
            postId: String
        ) : Boolean
    }
`

export default typeDefs