const slugify = (name: string) =>
    name?.toLowerCase()?.replace(/[^a-z0-9]+/g, '-')?.replace(/(^-|-$)+/g, '');



const extractId = (name: string) => {
    const id = name?.split("-")?.pop();
    return id ? +id : null;
};

const itemsPerPage = 12;


export {
    slugify,
    extractId,
    itemsPerPage
};