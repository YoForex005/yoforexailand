import React from 'react';
import WhitepapersPage from '../../src/components/pages/WhitepapersPage';
import { useRouter } from 'next/router';

export default function Whitepapers() {
  const router = useRouter();

  const handleNavigateBack = () => router.push('/resources');

  return <WhitepapersPage onNavigateBack={handleNavigateBack} />;
}