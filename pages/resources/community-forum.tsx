import React from 'react';
import CommunityForumPage from '../../src/components/pages/CommunityForumPage';
import { useRouter } from 'next/router';

export default function CommunityForum() {
  const router = useRouter();

  const handleNavigateBack = () => router.push('/resources');

  return <CommunityForumPage onNavigateBack={handleNavigateBack} />;
}