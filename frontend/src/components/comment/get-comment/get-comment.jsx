import {consumeContext, cs, Load2, State} from "cs-react";

export const GetComment = () => cs(
    consumeContext('apis'),
    ['comments', ({apis}, next) => Load2({
        fetch: () => apis.comments.getAllComments(),
        next,
    })],
    ({comments}) => {
        return (
            <div className="w-1/4 ml-auto">
                <div className="flex flex-col items-end">
                    {!comments.loading && comments.value?.map((c) => <p key={c.id}
                                                                        className="bg-slate-200 rounded shadow shadow-slate-900/50 px-2 my-4 text-center">
                        {c.content}
                        <span> - <i> {c.User.name}</i></span>
                    </p>)}
                </div>
            </div>
        )
    }
)