// 共通レイアウト

// ライブラリの読み込み
import React from 'react';

import '../styles/style.scss'
import type { Metadata } from 'next'
import Favicon from '../public/images/common/favicon.ico';

// メタデータ
export const metadata: Metadata = {
  title: 'Ninolog',
  description: 'とあるエンジニアのほのぼの日常',
  icons: [{ rel: 'icon', url: Favicon.src }],
}

// レイアウト
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Yomogi&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/css/plugins/slick.css" />
      </head>
      <body>
        {children}
        <script src="/js/jquery.min.js"></script>
        <script src="/js/common.js"></script>
      </body>
    </html>
  )
}
