"use client";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Input } from './ui/input';

const SearchInput = (props: {
    defaultValue?: string;
}) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const text = form['search']?.value;
        const params = new URLSearchParams(searchParams);
        params.set('page', "1");
        params.set("q", text);
        router.replace(`${pathname}?${params.toString()}`)
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <Input
                defaultValue={props?.defaultValue}
                name='search'
                placeholder='Type and hit enter'
            />
        </form>
    );
};

export default SearchInput;