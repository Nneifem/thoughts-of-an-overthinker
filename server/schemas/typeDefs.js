const typeDefs = `
    type Account {
        _id: ID
        name: String
        poems: [Srting]!
    }

    type Mutation {
        addAccount(name: String!): Account
        addPoem(accountId: ID!, poem: String!): Account
        removePoem(accoundId: ID!, poem: String!): Account
    }
`;

module.exports = typeDefs;