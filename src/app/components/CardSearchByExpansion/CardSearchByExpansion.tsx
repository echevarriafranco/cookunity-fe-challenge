'use client'
import { UrlParamsEnum } from '@/app/types/UrlParams';
import Search from 'antd/es/input/Search';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import React from 'react';

export default function CardSearchByExpansion() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const handleSearch = (e: string) => {
        const params = new URLSearchParams(searchParams)
        if (e) {
            params.set(UrlParamsEnum.queryByExpansion, e)
        } else {
            params.delete(UrlParamsEnum.queryByExpansion)
        }
        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div>
            <Search
                defaultValue={searchParams.get(UrlParamsEnum.queryByExpansion)?.toString()}
                placeholder="Search By Expansion"
                allowClear
                onSearch={(e) => handleSearch(e)}

            />
        </div>
    );
}
