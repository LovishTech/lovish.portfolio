'use client';

import { Skeleton } from '@/components/ui/skeleton';

export function HeroSkeleton() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
      aria-busy="true"
      aria-label="Loading hero section"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background/80 to-accent/5" />

      <div className="container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Skeleton className="h-9 w-52 mx-auto rounded-full bg-muted/60" />
          <Skeleton className="h-14 sm:h-16 w-full max-w-md mx-auto bg-muted/60" />
          <Skeleton className="h-20 w-full max-w-2xl mx-auto bg-muted/50" />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Skeleton className="h-12 w-40 rounded-md bg-muted/60" />
            <Skeleton className="h-12 w-40 rounded-md bg-muted/50" />
          </div>
          <div className="flex items-center justify-center gap-4 pt-6">
            <Skeleton className="h-10 w-10 rounded-full bg-muted/50" />
            <Skeleton className="h-10 w-10 rounded-full bg-muted/50" />
            <Skeleton className="h-10 w-10 rounded-full bg-muted/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
