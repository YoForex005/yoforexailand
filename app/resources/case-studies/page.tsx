'use client'

import React from 'react';
import CaseStudiesPage from '../../../src/components/pages/CaseStudiesPage';
import { useRouter } from 'next/navigation';

export default function CaseStudies() {
  const router = useRouter();

  const handleNavigateBack = () => router.push('/resources');

  return <CaseStudiesPage onNavigateBack={handleNavigateBack} />;
}