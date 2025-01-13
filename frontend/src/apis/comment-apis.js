export const CommentApis = ({fetcher}) => ({
    getAllComments: async ()=> {
        return await fetcher.get(`/comment`);
    },
    postComment : async (data) => await fetcher.post(`/comment`, data),
})