import { gql } from 'apollo-server';

const typeDefs = gql`
    scalar Date

    type Listing {
        description: String!
        title: String!
        _id: ID!
    }

    type User {
        email: String!
        _id: ID!
    }

    type UserSession {
        createdAt: Date!
        expiresAt: Date!
        _id: ID!
        user: User !
    }

    type Mutation {
        createListing(description: String! title: String!): Listing!
        createUser(email: String!, password: String!): User!
        createUserSession(email: String!, password: String!): UserSession!
        deleteUserSession(sessionId: ID!): Boolean!
    }

    type Query {
        listings: [Listing!]!
        userSession(me: Boolean!): UserSession
    }
`;

export default typeDefs;