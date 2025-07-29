import React from 'react';
import APIDocumentationPage from '../../src/components/pages/APIDocumentationPage';
import { useRouter } from 'next/router';

export default function APIDocumentation() {
  const router = useRouter();

  const handleNavigateBack = () => router.push('/resources');

  return <APIDocumentationPage onNavigateBack={handleNavigateBack} />;
}