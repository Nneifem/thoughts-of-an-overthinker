const { Profile, Account } = require('../models');

const resolvers = {
    Query: {
        accounts: async () => {
            return Account.find();
        },
        account: async (parent, {accountId}) => {
            return Account.findOne({_id: accountId});
        },
    },

    Mutation: {
        /* user creating the account */
        addAccount: async (parent, { name }) => {
            return Account.create({ name });
        },
        /* adding poems to users' favorite list */
        addPoem: async (parent, { accountId, poem }) => {
            return Account.findOneAndUpdate(
                { _id: accountId },
                {
                    $addToSet: { poems: poem },
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        /* removing poems from users/ favorite list */
        removePoem: async (parent, { accountId, poem }) => {
            return Account.findOneAndUpdate(
                { _id: accountId },
                { $pull: { poems: poem }},
                { new: true }
            );
        },
    },
};

module.exports = resolvers;