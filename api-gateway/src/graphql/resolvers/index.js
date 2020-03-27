import * as Mutation from './Mutation';
import * as Query from './Query';

import UserSession from './Custom/UserSession.js';

const resolvers = { Mutation,  Query, UserSession };

export default resolvers;