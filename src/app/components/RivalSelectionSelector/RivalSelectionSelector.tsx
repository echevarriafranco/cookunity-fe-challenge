'use client'
import { Button, Select } from 'antd';
import { useParams, usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { UrlParamsEnum } from '@/app/types/UrlParams';
import { IPokemon } from '@/app/types/IPokemon';

interface IProps {
    rivals: IPokemon[];
    simulateBattleSA: (attackerId: string, defenderId: string) => Promise<any>;

}

export default function RivalSelectionSelector({ rivals, simulateBattleSA }: IProps) {
    const attackerId: string = useParams().id as string
    const [selectedRival, setSelectedRival] = useState<string | null>()
    const [battleResult, setBattleResult] = useState<string | null>()
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter();
    const pathname = usePathname()

    const handleChange = (selectedOption: string) => {
        if (!selectedOption) {
            return
        }
        setSelectedRival(selectedOption);
        const params = new URLSearchParams()
        params.set(UrlParamsEnum.defender, selectedOption)
        router.replace(`${pathname}?${params.toString()}`)
    }


    const createBattle = async () => {
        try {
            setLoading(true)
            setBattleResult('')
            const simulateBattleResult = await simulateBattleSA(attackerId!, selectedRival!)
            setBattleResult(simulateBattleResult.isAttackerVictorious ? 'Attacker Wins!!!' : 'Defender Wins!!!')
            setLoading(false)
        } catch (error) {
            setLoading(false)
            router.push('/error')
        }
    }

    return (
        <div className='flex flex-col gap-2'>
            <Select
                onChange={handleChange}
                options={
                    rivals?.map((pokemon: IPokemon) => {
                        return { value: pokemon.id, label: pokemon.name }
                    }).filter(current => current.value !== attackerId)
                }
            />

            <Button disabled={!selectedRival} onClick={() => createBattle()} loading={loading}
                className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 p-2 rounded-lg cursor-pointer disabled:cursor-not-allowed">
                BATTLE!
            </Button>

            <span className='w-full text-center font-semi-bold text-2xl mt-4'>
                {battleResult}
            </span>
        </div>
    );
}
