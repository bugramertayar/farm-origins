'use client';
import { StoreCard, StoreListHeader } from '@/components/page-components/store';
import { useRouter } from 'next/navigation';

export default function Store() {
  const router = useRouter();

  const cardTitle = 'Göçmen Süt Ürünleri AŞ';
  const cardDescription =
    ' Göçmen Süt Ürünleri AŞ, kaliteli ve sağlıklı süt ürünlerinin güvenilir kaynağıdır. Doğal çiftliklerimizde özenle yetiştirilen ineklerimizden elde edilen sütümüz, en modern teknolojilerle işlenerek sofralarınıza ulaşır. Taze ve lezzetli süt, yoğurt, peynir ve diğer süt ürünlerimizle sizlere sağlık dolu bir yaşam sunuyoruz. Müşteri memnuniyeti ve hijyen standartlarını ön planda tutarak, her zaman en iyiyi sunmak için çalışıyoruz. Göçmen Süt Ürünleri AŞ, sağlıklı ve lezzetli ürünleriyle sofralarınıza değer katmaya devam ediyor.';

  const cardEditClicked = (storeIdentifier: string) => {};

  const cardDeleteClicked = (storeIdentifier: string) => {};

  const goToCreateStorePage = () => {
    router.push('/store/create');
  };

  return (
    <div className="h-full flex flex-col">
      <StoreListHeader title="Stores" onButtonClicked={() => goToCreateStorePage()} />

      <div className="flex-grow flex justify-start px-10 pt-10">
        <StoreCard title={cardTitle} description={cardDescription} onEditClicked={() => cardEditClicked('')} onDeleteClicked={() => cardDeleteClicked('')} />
      </div>
    </div>
  );
}
