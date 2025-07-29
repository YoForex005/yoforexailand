'use client'

import React from 'react';
import UserManualPage from '../../../src/components/pages/UserManualPage';
import { useRouter } from 'next/navigation';

export default function UserManual() {
  const router = useRouter();

  const handleNavigateBack = () => router.push('/resources');

  return <UserManualPage onNavigateBack={handleNavigateBack} />;
}