import React from 'react';
import UserManualPage from '../../src/components/pages/UserManualPage';
import { useRouter } from 'next/router';

export default function UserManual() {
  const router = useRouter();

  const handleNavigateBack = () => router.push('/resources');

  return <UserManualPage onNavigateBack={handleNavigateBack} />;
}