import {cs} from "cs-react";

export const AllContents = () => cs(
    () => {
        return (
            <section className="container py-4 px-6 rounded shadow shadow-slate-950/50 z-50">
                <h1 className="text-center py-4 text-3xl font-bold">All Contents</h1>
                <div className=" py-4 px-6 rounded shadow shadow-slate-550/50">
                    <div className="leading-9">
                        <h2 className="text-xl font-semibold my-3">Title</h2>
                        <p className="bg-slate-100 rounded shadow shadow-slate-150/50 px-6">Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Consectetur eius est, id molestias quaerat repellendus sequi
                            similique. Consectetur dolorem excepturi facere fugiat neque qui sunt veniam, voluptatibus.
                            Aliquam illum, quod. <span> - <i>Author</i></span></p>
                        <form action="">
                            <div>
                                <input className="bg-slate-200 rounded shadow shadow-slate-900/50 px-6 w-full my-4"
                                       type="text"
                                       placeholder="Comment"/>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    className="bg-slate-950 text-white py-2 px-4 rounded shadow shadow-slate-900/50 w-32 text-center"> Comment
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    })
