'use client'
import { UrlParamsEnum } from '@/app/types/UrlParams';
import { Pagination as AntPagination } from 'antd';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import React from 'react';

interface IProps {
    total: number
    currentPage: number
}
export default function Pagination({ total, currentPage }: IProps) {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const handleChange = (e: number) => {
        const params = new URLSearchParams(searchParams)
        if (e) {
            params.set(UrlParamsEnum.page, e.toString())
        } else {
            params.delete(UrlParamsEnum.page)
        }
        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div>
            <AntPagination
                showSizeChanger={false}
                defaultCurrent={currentPage}
                total={total}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}
