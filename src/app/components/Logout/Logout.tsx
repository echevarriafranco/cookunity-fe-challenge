'use client'
import React from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import { logout } from '@/app/helpers/api';
import { useRouter } from 'next/navigation';

interface IProps { }

export default function LogoutButton({ }: IProps) {
    const router = useRouter()

    const logoutClick = async () => {
        try {
            await logout();
            router.push('/signin')
        } catch (error) {
            throw new Error()
        }
    }

    return (
        <div className='flex flex-col gap-2'>
            <span onClick={logoutClick} className='cursor-pointer flex items-center gap-1 text-gray-800 hover:text-red-500'>
                <LogoutOutlined className='text-xl' />
                Logout
            </span>
        </div>
    );
}