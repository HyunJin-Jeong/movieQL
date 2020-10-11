const Hyunjin = {
    name: "jeonghyunjin",
    age: 21,
    gender: "male"
};

const resolvers = {
    Query: {
        person: () => Hyunjin
    }
};

export default resolvers;