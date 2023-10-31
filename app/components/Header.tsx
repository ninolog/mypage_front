'use client';

import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const current_slug = usePathname();
  console.log(current_slug);

  return (
    <header className="header">
      <div className="header-main">
        <div className="logo">
          <a href="/"><img src="/images/common/logo.png" alt="とあるエンジニアのほのぼの日常" /></a>
        </div>
        <div className="menu-area">
          <ul className="menu-list">
            <li className={`menu-item ${current_slug === '/' ? '_active' : ''}`}><a href="/">ホーム</a></li>
            <li className={`menu-item ${current_slug.includes('/about') ? '_active' : ''}`}><a href="/about/">中の人について</a></li>
            <li className={`menu-item ${current_slug.includes('/blog') ? '_active' : ''}`}><a href="/blog/">日常ブログ</a></li>
            <li className={`menu-item ${current_slug.includes('/works') ? '_active' : ''}`}><a href="/works/">制作物一覧</a></li>
          </ul>
        </div>
      </div>
      <div className="contact-area">
        <a href="/contact/"><img src="/images/common/contact.png" alt="お問い合わせ" /></a>
      </div>
    </header>
  );
};

export default Header;