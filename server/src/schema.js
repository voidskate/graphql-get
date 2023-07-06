const foodsArray = [
    {
        id: "1",
        firstName: "Apple",
        lastName: "Cider"
    },

    {
        id: "2",
        firstName: "Banana",
        lastName: "Smoothie"
    },

    {
        id: "3",
        firstName: "Cranberry",
        lastName: "Juice"
    }
]

/*-- 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 --*/

const typeDefs = `
    type Food {
        id: String!
        firstName: String
        lastName: String
    }

    type Query {
        allFoods: [Food]
    }
`

/*-- 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 --*/

const resolvers = {
    Query: {
        allFoods: () => foodsArray
    }
}

export { typeDefs, resolvers }