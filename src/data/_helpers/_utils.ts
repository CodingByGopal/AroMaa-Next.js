import { QueryParamsType } from "../_model/query.params.type";

const slugify = (name: string) =>
    name?.toLowerCase()?.replace(/[^a-z0-9]+/g, '-')?.replace(/(^-|-$)+/g, '');



const extractId = (name: string) => {
    const id = name?.split("-")?.pop();
    return id ? +id : null;
};

const itemsPerPage = 12;

const getUrl = (baseUrl: string, params: QueryParamsType,) => {
    const queryParams = new URLSearchParams(
        Object.entries(params).reduce((acc, [key, value]) => {
            acc[key] = String(value); // Convert all values to strings
            return acc;
        }, {} as Record<string, string>)
    ).toString();

    baseUrl = `${baseUrl}?${queryParams}`;

    return baseUrl;
}


export {
    slugify,
    extractId,
    itemsPerPage,
    getUrl
};