'use client'

import React from 'react';
import WhitepapersPage from '../../../src/components/pages/WhitepapersPage';
import { useRouter } from 'next/navigation';

export default function Whitepapers() {
  const router = useRouter();

  const handleNavigateBack = () => router.push('/resources');

  return <WhitepapersPage onNavigateBack={handleNavigateBack} />;
}