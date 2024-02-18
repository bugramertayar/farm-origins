'use client';
import { StoreListHeader } from '@/components/page-components/store';
import { useRouter } from 'next/navigation';

export default function Store() {
  const router = useRouter();

  const goToCreateStorePage = () => {
    router.push('/store/create');
  };

  return (
    <div className="h-full flex flex-col">
      <StoreListHeader title="Stores" onButtonClicked={() => goToCreateStorePage()} />

      <div className="flex-grow flex justify-start px-10 pt-10"></div>
    </div>
  );
}
