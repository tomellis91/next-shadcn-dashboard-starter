import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription
} from '@/components/ui/card';

import { subscriptionData } from '@/data/subscription-data';

export function RecentSubscriptions () {
  return (
    <Card className='h-full'>
      <CardHeader>
        <CardTitle>Recent Subscriptions</CardTitle>
        <CardDescription>You had 123 transactions this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-8'>
          {subscriptionData.slice(0, 5).map((subscription, index) => (
            <div key={index} className='flex items-center'>
              <Avatar className='h-9 w-9'>
                <AvatarImage src={subscription.avatar} alt='Avatar' />
                <AvatarFallback>{subscription.avatar}</AvatarFallback>
              </Avatar>
              <div className='ml-4 space-y-1'>
                <p className='text-sm leading-none font-medium'>{subscription.description}</p>
                <p className='text-muted-foreground text-sm'>{subscription.category}</p>
              </div>
              <div className='ml-auto font-medium'>{subscription.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
