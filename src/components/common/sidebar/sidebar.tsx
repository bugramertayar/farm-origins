import { Drawer } from 'antd';
import { ReactNode } from 'react';
import SidebarHeader from './sidebarHeader';

interface SidebarProps {
  isSidebarOpen: boolean;
  title: string;
  footer?: any;
  customWidth?: number;
  content: ReactNode;
  maskClosable?: boolean;
  onSidebarClosed: (isClosed: boolean) => void;
}

export default function Sidebar({ isSidebarOpen, title, footer, content, customWidth = 700, maskClosable = true, onSidebarClosed }: SidebarProps) {
  const onClose = () => {
    onSidebarClosed(true);
  };

  const sidebarHeaderTemplate = <SidebarHeader title={title} onSidebarHeaderCloseClick={onClose} />;

  return (
    <>
      <Drawer closeIcon={false} title={sidebarHeaderTemplate} footer={footer} width={customWidth} maskClosable={maskClosable} onClose={onClose} open={isSidebarOpen}>
        {content}
      </Drawer>
    </>
  );
}
