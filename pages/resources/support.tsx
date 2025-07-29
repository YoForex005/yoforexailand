import React from 'react';
import SupportPage from '../../src/components/pages/SupportPage';
import { useRouter } from 'next/router';

export default function Support() {
  const router = useRouter();

  const handleNavigateBack = () => router.push('/resources');

  return <SupportPage onNavigateBack={handleNavigateBack} />;
}