import {cs} from "cs-react";
import {GetComment} from "../comment/get-comment/get-comment.jsx";
import {PostComment} from "../comment/post-comment/post-comment.jsx";

export const Content = ({content}) => cs(
    () => {
        return (
            <>
                <div className="leading-9">
                    <h2 className="text-xl font-semibold my-3">{content.title}</h2>
                    <p className="bg-slate-100 rounded shadow shadow-slate-150/50 px-6">
                        {content.content} <span> - <i>{content.User.name}</i></span>
                    </p>
                </div>
                {GetComment()}
                {PostComment({contentId: content.id})}
            </>
        )
    }
)