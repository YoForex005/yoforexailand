'use client'

import React from 'react';
import ContactSupportPage from '../../../src/components/pages/ContactSupportPage';
import { useRouter } from 'next/navigation';

export default function ContactSupport() {
  const router = useRouter();

  const handleNavigateBack = () => router.push('/resources');

  return <ContactSupportPage onNavigateBack={handleNavigateBack} />;
}