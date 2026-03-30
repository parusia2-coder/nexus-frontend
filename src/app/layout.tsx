import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NEXUS SPORTS | 미래의 스포츠 대회를 오늘 경험하십시오',
  description: '아마추어 스포츠의 한계를 뛰어넘는 완벽한 디지털 전환(DX). AI 대진표, 실시간 전광판, 스마트 광고 전광판 — 넥서스스포츠가 이끄는 새로운 대회 표준.',
  keywords: '스포츠 대회 관리, AI 대진표, 실시간 전광판, 배드민턴 대회, 테니스 대회, SaaS, 넥서스스포츠',
  openGraph: {
    title: 'NEXUS SPORTS | Kinetic Precision Engineering',
    description: '아마추어 스포츠 대회 운영의 디지털 전환 — AI 브래킷, 실시간 스코어보드, 스마트 광고 시스템',
    type: 'website',
    url: 'https://nexussports.kr',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
