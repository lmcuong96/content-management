import {ContentApis} from "./content-apis.js";
import {CommentApis} from "./comment-apis.js";
import {UserApis} from "./user-apis.js";

export const createApis = () => {
    const fetcher = createFetcher();
    return ({
        contents: ContentApis({fetcher}),
        comments : CommentApis({fetcher}),
        users : UserApis({fetcher}),
    });
}
export const createFetcher = () => {

    const urlModifier = (url) => `http://localhost:3000${url}`;

    const withPayload = (method) => (url, data) => {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        return fetch(urlModifier(url), {
            method,
            body: data == null ? undefined : JSON.stringify(data),
            headers,
        }).then((response) => response.json());
    };

    const withoutPayload = (method) => (url) => {
        let headers = new Headers();
        return fetch(urlModifier(url), {
            method,
            headers
        }).then((response) => response.json());
    };

    return {
        get: withoutPayload("GET"),
        delete: withoutPayload("DELETE"),
        post: withPayload("POST"),
        put: withPayload("PUT"),
    };
}