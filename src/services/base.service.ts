export abstract class BaseService {
    static revalidateConfig = {
        next: {
            revalidate: 604800, // Revalidate every 7 days
        }
    };
    static baseUrl = 'https://dummyjson.com/recipes';
}
