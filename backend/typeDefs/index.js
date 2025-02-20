import userTypeDef from './user.typeDef.js';
import transactionTypeDef from './transaction.typeDef.js';
import { mergeTypeDefs } from '@graphql-tools/merge';

const mergedTypeDefs = mergeTypeDefs([userTypeDef, transactionTypeDef]);

export default mergedTypeDefs;
