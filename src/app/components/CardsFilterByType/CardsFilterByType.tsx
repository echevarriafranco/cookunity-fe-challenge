'use client'
import { UrlParamsEnum } from '@/app/types/UrlParams';
import { PokemonType } from '@/app/types/enums';
import { Select } from 'antd';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import React from 'react';

export default function CardsSort() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const handleChange = (e: string) => {
        const params = new URLSearchParams(searchParams)
        if (e) {
            params.set(UrlParamsEnum.type, e)
        } else {
            params.delete(UrlParamsEnum.type)
        }
        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div>
            <Select
                placeholder='Type'
                defaultValue={searchParams.get(UrlParamsEnum.type)?.toString()}
                style={{ width: 150 }}
                onChange={handleChange}
                allowClear
                options={Object.keys(PokemonType).map(key => ({
                    value: PokemonType[key as keyof typeof PokemonType],
                    label: PokemonType[key as keyof typeof PokemonType]
                }))
                }
            />
        </div>
    );
}

