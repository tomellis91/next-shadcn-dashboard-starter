import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription
} from '@/components/ui/card';

import { transactionData } from '@/data/expense-data';

export function RecentTransactions () {
  return (
    <Card className='h-full'>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>You had 123 transactions this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-8'>
          {transactionData.slice(0, 5).map((transaction, index) => (
            <div key={index} className='flex items-center'>
              <Avatar className='h-9 w-9'>
                <AvatarImage src={transaction.avatar} alt='Avatar' />
                <AvatarFallback>{transaction.avatar}</AvatarFallback>
              </Avatar>
              <div className='ml-4 space-y-1'>
                <p className='text-sm leading-none font-medium'>{transaction.description}</p>
                <p className='text-muted-foreground text-sm'>{transaction.category}</p>
              </div>
              <div className='ml-auto font-medium'>{transaction.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
