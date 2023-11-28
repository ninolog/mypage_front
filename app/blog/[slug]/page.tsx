// ブログの詳細ページ
'use client';

// ライブラリの読み込み
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { client } from "../../../libs/client";
import parse from 'html-react-parser';
import highlight from 'highlight.js';

// 型定義
type BlogItem = {
  id: number;
  publishedAt: string;
  title: string;
  content: string;
  category: Category | string;
};
type Category = {
  id: number;
  name: string;
};
type CategoryItem = {
  id: number;
  name: string;
};

export const convertHtml = (content: string) => {
  return parse(content);
};

// ブログの詳細ページ
const BlogDetail = () => {

  // useSearchParamsフックを使用してURLパラメータを取得
  const pathname = usePathname();
  const id = pathname.split('/').pop();

  // ここでblogItemの型を指定
  const [blogItem, setBlogItem] = useState<BlogItem>({ id: 0, publishedAt: '', title: '', category: '', content: '' });
  const [categories, setCategories] = useState<CategoryItem[]>([]);

  // 日付のフォーマットを変更する処理
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };


  // APIからデータを取得する処理
  useEffect(() => {
    // idが取得できたらデータをフェッチする
    if (id) {
      client.get({ endpoint: "blogs", contentId: id as string })
        .then(data => {
          setBlogItem(data);
        })
        .catch(() => {
          console.log('ブログの取得に失敗しました。');
        });
      client.get({ endpoint: "categories" }) // エンドポイントを指定
        .then(data => {
          setCategories(data.contents);
        });
    }
  }, [id]); // useEffectの依存配列にidを追加

  // ハイライトの設定
  useEffect(() => {
    highlight.initHighlighting();
  });

  // レイアウトの内容
  return (
    <Layout>
      <section className="blog_main-section section">
        <div className="inner">
          <div className="title-area">
            <h2>Blog</h2>
          </div>
          <div className="blog_detail-box">
            <div className="blog-title">
              <div className="title_detail-area">
                <p>{formatDate(blogItem.publishedAt)}</p>
                <ul className="blog-category">
                  {categories.filter(category => {
                    if (typeof blogItem.category === 'string') {
                      return false;
                    }
                    return category.id === blogItem.category.id;
                  }).map((category) => (
                    <li className="category-item" key={category.id}>
                      <a href={`/blog/category/${category.id}`}>{category.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <h3 className="title">{blogItem.title}</h3>
              <div className="blog-area">
                {blogItem.content && convertHtml(blogItem.content)}
              </div>
            </div>
          </div>
          <div className="back-btn">
            <a href="/blog/">Back List</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;