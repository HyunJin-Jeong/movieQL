const people = [
    {
        id: 1,
        name: "jeonghyunjin",
        age: 21,
        gender: "male"
    },
    {
        id: 2,
        name: "leejongbin",
        age: 22,
        gender: "male"
    },
    {
        id: 3,
        name: "sinhyeseong",
        age: 23,
        gender: "female"
    },
    {
        id: 4,
        name: "yoontaejin",
        age: 24,
        gender: "female"
    }
]

const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
}

export {
    people,
    getById,
}