'use client'

import React from 'react';
import HelpCenterPage from '../../../src/components/pages/HelpCenterPage';
import { useRouter } from 'next/navigation';

export default function HelpCenter() {
  const router = useRouter();

  const handleNavigateBack = () => router.push('/resources');

  return <HelpCenterPage onNavigateBack={handleNavigateBack} />;
}