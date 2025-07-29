'use client'

import React from 'react';
import IntegrationsPage from '../../../src/components/pages/IntegrationsPage';
import { useRouter } from 'next/navigation';

export default function Integrations() {
  const router = useRouter();

  const handleNavigateBack = () => router.push('/resources');

  return <IntegrationsPage onNavigateBack={handleNavigateBack} />;
}