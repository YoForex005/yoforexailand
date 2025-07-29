'use client'

import React from 'react';
import BlogPage from '../../../src/components/pages/BlogPage';
import { useRouter } from 'next/navigation';

export default function Blog() {
  const router = useRouter();

  const handleNavigateBack = () => router.push('/resources');

  return <BlogPage onNavigateBack={handleNavigateBack} />;
}