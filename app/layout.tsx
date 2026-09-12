import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '圖片姓名三選一｜認識你真好',
  description: '看真人照片，逐字選出正確姓名的三選一配對遊戲。',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
