import { delay } from '@/constants/mock-api';
import { RecentSubscriptions } from '@/features/overview/components/recent-subscriptions';

export default async function Subscriptions() {
  await delay(3000);
  return <RecentSubscriptions />;
}
