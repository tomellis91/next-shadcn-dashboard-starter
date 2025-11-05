import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardFooter
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { IconTrendingUp } from '@tabler/icons-react';

export interface MetricCardProps {
  Icon: typeof IconTrendingUp;
  title: string;
  chipText: string;
  footerTitle: string;
  footerSubtitle: string;
  description: string;
}

export function MetricCard({
    Icon,
    title,
    chipText,
    footerTitle,
    footerSubtitle,
    description
}: MetricCardProps) {
    return (
        <Card className='@container/card'>
            <CardHeader>
              <CardDescription>{description}</CardDescription>
              <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
                {title}
              </CardTitle>
              <CardAction>
                <Badge variant='outline'>
                  <Icon />
                  {chipText}
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className='flex-col items-start gap-1.5 text-sm'>
              <div className='line-clamp-1 flex gap-2 font-medium'>
                {footerTitle} <Icon className='size-4' />
              </div>
              <div className='text-muted-foreground'>
                {footerSubtitle}
              </div>
            </CardFooter>
          </Card>
    );
}