import React from 'react';
import CommunityPage from '../../src/components/pages/CommunityPage';
import { useRouter } from 'next/router';

export default function Community() {
  const router = useRouter();

  const handleNavigateBack = () => router.push('/resources');

  return <CommunityPage onNavigateBack={handleNavigateBack} />;
}