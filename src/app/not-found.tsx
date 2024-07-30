import { Button, Empty } from 'antd';
import Link from 'next/link';
import React from 'react';

export default function NotFoundPage({ error }: { error?: Error }) {
  return (
    <div>
      <Empty
        imageStyle={{ height: 60 }}
        description={
          <span>
            Ups! This page dont exist.
          </span>
        }
      >
        <Link href={'/'}><Button type="primary">Go to Home page</Button></Link>
      </Empty>
    </div>
  );
}