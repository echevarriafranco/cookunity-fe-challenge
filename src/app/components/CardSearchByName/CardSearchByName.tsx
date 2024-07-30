'use client'
import { UrlParamsEnum } from '@/app/types/UrlParams';
import Search from 'antd/es/input/Search';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import React from 'react';

export default function CardSearchByName() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const handleSearch = (e: string) => {
        const params = new URLSearchParams(searchParams)
        if (e) {
            params.set(UrlParamsEnum.queryByName, e)
        } else {
            params.delete(UrlParamsEnum.queryByName)
        }
        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div>
            <Search
                defaultValue={searchParams.get(UrlParamsEnum.queryByName)?.toString()}
                placeholder="Search By Name"
                allowClear
                onSearch={(e) => handleSearch(e)}

            />
        </div>
    );
}
