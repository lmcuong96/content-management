import {consumeContext, cs, Load2, provideContext} from "cs-react";
import {Content} from "../../../components/content/content.jsx";
import {GetComment} from "../../../components/comment/get-comment/get-comment.jsx";
import {PostComment} from "../../../components/comment/post-comment/post-comment.jsx";

export const AllContents = () => cs(
    consumeContext('apis'),
    ['content', ({apis}, next) => Load2({
        fetch: () => apis.contents.getAllContent(),
        next,
    })],
    ({content}) => {
        return (
            <section className="container py-4 px-6 rounded shadow shadow-slate-950/50 z-50">
                <h1 className="text-center py-4 text-3xl font-bold">All Contents</h1>
                <div className="py-4 px-6 rounded shadow shadow-slate-550/50">
                    <div>
                        {!content.loading && content.value?.map(c => <Content key={c.id} content={c}/>)}
                    </div>
                </div>
            </section>

        )
    })
