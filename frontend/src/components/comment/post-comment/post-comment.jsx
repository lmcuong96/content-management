import {bindInput, cs, State} from "cs-react";

export const PostComment = ({contentId, userId}) => cs(
    ['comment', ({_}, next) => State({initialValue: "", next})],
    ({comment}) => {
        const createComment =  ({comment, contentId, userId}) => {
             console.log(contentId);
        }
        return (
            <form action="">
                <div>
                    <input {...{
                        className: "bg-slate-200 rounded shadow shadow-slate-900/50 px-6 w-full my-4",
                        type: "text",
                        placeholder: "Comment",
                        ...bindInput(comment)
                    }}/>
                </div>
                <div className="flex justify-end">
                    <button
                        {...{
                            className: "bg-slate-950 text-white py-2 px-4 rounded shadow shadow-slate-900/50 w-32 text-center",
                            type: "button",
                            onClick: (() =>
                                createComment({comment: comment.value,contentId, userId})),
                        }}>
                        Comment
                    </button>
                </div>
            </form>
        )
    }
)