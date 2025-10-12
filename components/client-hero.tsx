'use client';

import dynamic from 'next/dynamic';

const Hero = dynamic(
  () => import('@/components/hero-enhanced').then((mod) => mod.HeroEnhanced),
  { ssr: false, loading: () => <div>Loading...</div> }
);

export default function ClientHero() {
  return <Hero />;
}
