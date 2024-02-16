const queries = {}

const mutations = {
    createUser: async (_:any, { first_name, last_name, password, email }: { first_name: string, last_name: string, password: string, email: string }) => 
    {
        return "KUCH BHI"
    }
}

export const resolvers = { queries, mutations }