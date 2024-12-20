'use client'


import { useEffect, useState } from 'react';

import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Input } from './ui/input';
import { useToast } from '@/hooks/use-toast';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface PaginationPropsType {
    currentPage: number;
    totalPages: number;
}

const Pagination = (props: PaginationPropsType) => {
    const { toast } = useToast();
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams()

    const [pageNumber, setPageNumber] = useState<number>(1);
    const onkeydownHandler = (e: { keyCode: number; }) => {
        if (e.keyCode === 13) {
            if (pageNumber <= 0) {
                toast({
                    title: "Page limit exceeded",
                    description: `Page number should be 1 or more`,
                })

                setPageNumber(props.currentPage)
                return;
            }

            if (pageNumber > props.totalPages) {

                toast({
                    title: "Page limit exceeded",
                    description: `Maximum number of pages are ${props.totalPages}`,
                })

                setPageNumber(props.currentPage)
                return;
            }
            updatePageInURL(pageNumber)
        }
    }

    const updatePageInURL = (pageNum: number) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNum?.toString());
        router.push(`${pathname}?${params.toString()}`)
    }

    const inputOnChangeHandler = (e: { target: { value: string | number; }; }) => {
        setPageNumber(+e.target.value)
    }

    const pageChangeByNavigation = (actionType: "NEXT" | "PREV" | "JUMP_TO_FIRST" | "JUMP_TO_LAST") => {

        switch (actionType) {
            case 'JUMP_TO_FIRST':

                updatePageInURL(1)
                break;
            case 'PREV':
                updatePageInURL(props.currentPage - 1)
                break;
            case 'NEXT':

                updatePageInURL(props.currentPage + 1)
                break;
            case 'JUMP_TO_LAST':

                updatePageInURL(props.totalPages)
                break;

            default:
                break;
        }


    }

    useEffect(() => {

        if (props?.currentPage) {
            setPageNumber(props?.currentPage)
        }
    }, [props?.currentPage])

    return (
        <div className=' sm:block flex justify-center items-center gap-4 flex-col'>
            <div className="gap-3 sm:text-base text-sm sm:hidden flex items-center">
                <label htmlFor='page-no'>Page</label>
                <Input
                    id='page-no'
                    className="sm:w-16 w-12 text-center  bg-secondary  border-0 flex-none  "
                    value={pageNumber}
                    min={1}
                    type="number"

                    onKeyDown={onkeydownHandler}
                    onChange={inputOnChangeHandler}
                />
                <span className=' whitespace-nowrap text-foreground'> of {props.totalPages}</span>
            </div>

            <div className="flex flex-wrap items-center  md:justify-end justify-center  gap-3 ">
                <Button
                    aria-label='Pagination button to navigate to first page'
                    size='icon'
                    variant="secondary"
                    className=' flex-none'
                    disabled={props.currentPage === 1}
                    onClick={() => pageChangeByNavigation('JUMP_TO_FIRST')}
                >
                    <ChevronsLeft />


                </Button>
                <Button
                    aria-label='Pagination button to navigate to previous page'
                    size='icon'
                    variant="secondary"
                    className=' flex-none'
                    disabled={props.currentPage === 1}
                    onClick={() => pageChangeByNavigation('PREV')}
                >
                    <ChevronLeft />
                </Button>
                <div className="gap-3 sm:text-base text-sm sm:flex hidden items-center">
                    <label htmlFor='page'>Page</label>
                    <Input
                        id='page'
                        className="sm:w-16 w-12 text-center  bg-secondary  border-0 flex-none  "
                        value={pageNumber}
                        min={1}
                        type="number"

                        onKeyDown={onkeydownHandler}
                        onChange={inputOnChangeHandler}
                    />
                    <span className=' whitespace-nowrap text-foreground'> of {props.totalPages}</span>
                </div>
                <Button
                    aria-label='Pagination button to navigate to next page'
                    size='icon'
                    variant="secondary"
                    className=' flex-none'
                    disabled={props.currentPage >= props.totalPages}
                    onClick={() => pageChangeByNavigation('NEXT')}
                >
                    <ChevronRight />
                </Button>
                <Button
                    aria-label='Pagination button to navigate to last page'
                    size='icon'
                    variant="secondary"
                    className=' flex-none'
                    disabled={props.currentPage >= props.totalPages}
                    onClick={() => pageChangeByNavigation('JUMP_TO_LAST')}
                >
                    <ChevronsRight />
                </Button>
            </div>
        </div>


    );
};

export default Pagination;
