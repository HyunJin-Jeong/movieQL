import { getMovies } from "./db.js";

const resolvers = {
    Query: {
        movies: (_, {limit, rating}) => getMovies(limit, rating)
    }
};

export default resolvers;