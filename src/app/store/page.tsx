'use client';
import { Sidebar } from '@/components/common';
import { StoreCard, StoreListHeader } from '@/components/page-components/store';
import { useState } from 'react';

export default function Store() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const cardTitle = 'Göçmen Süt Ürünleri AŞ';
  const cardDescription =
    ' Göçmen Süt Ürünleri AŞ, kaliteli ve sağlıklı süt ürünlerinin güvenilir kaynağıdır. Doğal çiftliklerimizde özenle yetiştirilen ineklerimizden elde edilen sütümüz, en modern teknolojilerle işlenerek sofralarınıza ulaşır. Taze ve lezzetli süt, yoğurt, peynir ve diğer süt ürünlerimizle sizlere sağlık dolu bir yaşam sunuyoruz. Müşteri memnuniyeti ve hijyen standartlarını ön planda tutarak, her zaman en iyiyi sunmak için çalışıyoruz. Göçmen Süt Ürünleri AŞ, sağlıklı ve lezzetli ürünleriyle sofralarınıza değer katmaya devam ediyor.';

  const onSidebarClosed = (value: boolean) => {
    if (value) {
      setIsSidebarOpen(false);
    }
  };

  const cardEditClicked = (storeIdentifier: string) => {};
  const cardDeleteClicked = (storeIdentifier: string) => {};

  return (
    <div className="h-full flex flex-col">
      <StoreListHeader title="Stores" onButtonClicked={() => setIsSidebarOpen(true)} />

      <Sidebar title="Create New Store" content={<span>Buğra</span>} isSidebarOpen={isSidebarOpen} onSidebarClosed={(event) => onSidebarClosed(event)} />

      <div className="flex-grow flex justify-start px-10 pt-10">
        <StoreCard title={cardTitle} description={cardDescription} onEditClicked={() => cardEditClicked('')} onDeleteClicked={() => cardDeleteClicked('')} />
      </div>
    </div>
  );
}
