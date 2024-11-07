export abstract class BaseService {
    static baseUrl = 'https://dummyjson.com/recipes';
    static revalidateConfig = {
        next: {
            revalidate: 15, // Revalidate every 15 seconds
        }
    };

    protected static async fetchData(url: string, useDefaultConfig: boolean = true) {
        const config = useDefaultConfig ? this.revalidateConfig : {};
        const response = await fetch(url, config);
        return response.json();
    }
}
