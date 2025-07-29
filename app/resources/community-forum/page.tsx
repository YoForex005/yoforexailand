'use client'

import React from 'react';
import CommunityForumPage from '../../../src/components/pages/CommunityForumPage';
import { useRouter } from 'next/navigation';

export default function CommunityForum() {
  const router = useRouter();

  const handleNavigateBack = () => router.push('/resources');

  return <CommunityForumPage onNavigateBack={handleNavigateBack} />;
}