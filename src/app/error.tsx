'use client'
import { Button, Empty } from 'antd';
import Link from 'next/link';
import React from 'react';

export default function ErrorPage({ error }: { error?: Error }) {
  return (
    <div>
      <Empty
        imageStyle={{ height: 60 }}
        description={
          <span>
            Ups! Something went wrong.
          </span>
        }
      >
        <Link href={'/'}><Button type="primary">Go to Home page</Button></Link>
      </Empty>
    </div>
  );
}