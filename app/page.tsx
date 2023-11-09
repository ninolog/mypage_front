// トップページのコンポーネント

// ライブラリの読み込み
import React from 'react';
import Layout from './components/Layout';

const MyPage = () => {
  // レイアウトの内容
  return (
    <Layout>
    {/* top_main-section */}
    <section className="top_main-section section">
      <div className="main-section_inner inner">
        <div className="content-area">
          <div className="txt-area">
            <h2 className="content-title">About</h2>
            <p className="txt-box">
              とあるエンジニア。<br />
              中の人のプロフィールや<br />
              サイトについて。
            </p>
          </div>
          <a className="link-btn" href="/about/">深淵を知る</a>
        </div>
        <div className="content-area">
          <div className="txt-area">
            <h2 className="content-title">Blog</h2>
            <p className="txt-box">
              日常の出来事や、<br />
              仕事での出来事などを<br />
              つらつらと書いていきます。
            </p>
          </div>
          <a className="link-btn" href="/blog/">日常ブログ</a>
        </div>
        <div className="content-area">
          <div className="txt-area">
            <h2 className="content-title">Portfolio</h2>
            <p className="txt-box">
              これまでに作成した<br />
              制作物の一覧です。<br />
              今後も随時更新予定。
            </p>
          </div>
          <a className="link-btn" href="/works/">制作物一覧</a>
        </div>{/* /content-area */}
      </div>{/* /main-section_inner */}
    </section>
    {/* /top_main-section */}
    </Layout>
  );
};

export default MyPage;