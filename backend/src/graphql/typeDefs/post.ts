import {gql} from "graphql-tag"

const typeDefs = gql`
    type Post {
        id: String
        author: User
        title: String
        desc: String
        # image: String
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
            # image: String
        ): Boolean
    }
`

export default typeDefs