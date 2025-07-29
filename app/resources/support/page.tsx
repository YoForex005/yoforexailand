'use client'

import React from 'react';
import SupportPage from '../../../src/components/pages/SupportPage';
import { useRouter } from 'next/navigation';

export default function Support() {
  const router = useRouter();

  const handleNavigateBack = () => router.push('/resources');

  return <SupportPage onNavigateBack={handleNavigateBack} />;
}