export const UserApis =({fetcher}) => ({
    getAllUsers: async () => await fetcher.get(`/user`),
    getUser: async (id) => await fetcher.get(`/user/${id}`),
})