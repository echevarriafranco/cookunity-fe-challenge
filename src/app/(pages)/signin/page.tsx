'use client'
import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { login } from '@/app/helpers/api';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [error, setError] = useState<string>()
  const router = useRouter()
  const onFinish = async (values: { email: string, password: string }) => {
    setError('')
    try {
      await login(values.email, values.password);
      router.push('/pokemons')

    } catch (error: any) {
      if ((error as any).message === 'unknown') {
        router.push('/error')
      }
      setError('Invalid credentials.')
    }
  };

  return (
    <div className='w-full h-auto flex  flex-col items-center'>

      <span className='min-w-full font-bold text-lg text-center align-center mb-4'>Login</span>

      <div>
        <Form
          name="login"
          initialValues={{ remember: true }}
          style={{ width: 360 }}
          className='m-auto'
          onFinish={onFinish}
        >

          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>


          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
        </Form>

      </div>

      {error && <span className='min-w-full font-medium text-l text-center align-center mb-2 text-red-500'>{error}</span>}
    </div>
  );
}
