'use client';

import React, { useState, MouseEvent } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  
  return (
    <div id="wrapper">
      <div className="site-wrap">
        <div className="site_left-area">
          <Header />
          <div className="toggle-menu">
            <span></span>
            <span></span>
            <span></span>
          </div> {/* toggle-menu */}
        </div> {/* site_left-area */}
        <div className="sp-logo">
          <a href="/"><img src="/images/common/title_bg_01.png" alt="とあるエンジニアのほのぼの日常" /></a>
        </div> {/* sp-logo */}
        <div className="site_right-area" id="page_top">
          <div className="right-area_inner">
            <div className="top_main-wrapper">
              <div className="title-area">
                <h1>NinoLog</h1>
                <p>
                  思いつきで作成したサイトにつき、<br className="sp-block" />コンテンツ迷子中。<br />
                  ホームページ制作に関する<br className="sp-block" />日常や知識をつらつら。
                </p>
              </div> {/* title-area */}
            </div> {/* top_main-wrapper */}
            {children}
            <Footer />
            <div className="top_btn">
              <a href="#page_top"><img src="/images/common/page_top.png" alt="ページトップへ" /></a>
            </div>{ /* top_btn */}
          </div>{ /* right-area_inner */}
        </div>{ /* site_right-area */}
      </div>{ /* site-wrap */}
    </div>
  );
};

export default Layout;
