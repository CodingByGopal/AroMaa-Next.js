import { QueryParamsType } from "@/data/_model/query.params.type";

export abstract class BaseService {
    static baseUrl = 'https://dummyjson.com/recipes';
    static revalidateConfig = {
        next: {
            revalidate: 15,
        }
    };

    protected static async fetchData(url: string, params?: QueryParamsType, useDefaultConfig: boolean = true) {
        const config = useDefaultConfig ? this.revalidateConfig : {};

        // If params are provided, convert them to a string format
        if (params) {
            const queryParams = new URLSearchParams(
                Object.entries(params).reduce((acc, [key, value]) => {
                    acc[key] = String(value); // Convert all values to strings
                    return acc;
                }, {} as Record<string, string>)
            ).toString();

            url = `${url}?${queryParams}`;
        }

        const response = await fetch(url, config);
        return response.json();
    }
}
