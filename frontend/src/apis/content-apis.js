export const ContentApis = ({fetcher}) => ({
    getAllContent: async () => {
        return await fetcher.get(`/content`)
    }
});