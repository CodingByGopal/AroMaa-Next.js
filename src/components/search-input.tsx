"use client";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Input } from './ui/input';
import { Search } from 'lucide-react';

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
        router.push(`${pathname}?${params.toString()}`)
    };

    return (
        <form onSubmit={handleFormSubmit}>

            <div className="relative">
                <span className="absolute text-foreground/70 inset-y-0 left-0 flex items-center pl-2">
                    <Search size={20} />
                </span>
                <Input
                    className=' w-full pl-10'
                    defaultValue={props?.defaultValue}
                    name='search'
                    placeholder='Type & Hit Enter'
                />
            </div>

        </form>
    );
};

export default SearchInput;