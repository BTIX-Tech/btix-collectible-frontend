import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('animate-pulse rounded-lg bg-secondary-100/60', className)} {...props} />
  );
}

export { Skeleton };
