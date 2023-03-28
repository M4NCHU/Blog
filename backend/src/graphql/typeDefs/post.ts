import {gql} from "graphql-tag"

const typeDefs = gql`
    type Post {
        id: String
        author: User
        title: String
        desc: String
        
    }

    type Query {
        readPosts: [Post]
    }

    type Mutation {
        sendPost(
            id: String
            authorId: String
            title: String
            desc: String
            
        ): Boolean
    }
`

export default typeDefs