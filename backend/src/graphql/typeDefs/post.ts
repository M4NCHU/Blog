import {gql} from "graphql-tag"

const typeDefs = gql`
    scalar Date

    type Post {
        id: String
        author: User
        title: String
        desc: String
        image: String
        createdAt: Date
        updatedAt: Date
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