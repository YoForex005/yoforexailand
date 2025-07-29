import React from 'react';
import WebinarsPage from '../../src/components/pages/WebinarsPage';
import { useRouter } from 'next/router';

export default function Webinars() {
  const router = useRouter();

  const handleNavigateBack = () => router.push('/resources');

  return <WebinarsPage onNavigateBack={handleNavigateBack} />;
}