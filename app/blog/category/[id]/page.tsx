// 記事一覧ページのコンポーネント
'use client';

// ブログのカテゴリー別ページ
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Layout from '../../../components/Layout';
import { client } from "../../../../libs/client";

// 型定義
type BlogItem = {
  id: number;
  publishedAt: string;
  title: string;
  category: Category;
  image: Image;
};

type Image = {
  url: string;
};
type Category = {
  id: number;
  name: string;
};

type CategoryItem = {
  id: number;
  name: string;
};

const BlogCategory = () => {

  // ここで型を指定
  const pathname = usePathname();
  const [blogItems, setBlogItems] = useState<BlogItem[]>([]);
  const [categories, setCategories] = useState<CategoryItem[]>([]);

  // パス名からカテゴリIDを取得
  const categoryId = pathname.split('/').pop();

  // APIからデータを取得する処理
  useEffect(() => {
    client.get({ endpoint: "blogs" }) // エンドポイントを指定
      .then(data => {
        setBlogItems(data.contents);
      });
    client.get({ endpoint: "categories" }) // エンドポイントを指定
      .then(data => {
        setCategories(data.contents);
      });
  }, []);

  useEffect(() => {
    console.log("ブログアイテム:", blogItems);
    blogItems.forEach(item => {
      console.log(`ID: ${item.id}, カテゴリーID: ${item.category ? item.category.id : 'なし'}`);
    });
  }, [blogItems]);

  // フィルタリング処理
  const filteredBlogItems = categoryId
  ? blogItems.filter(item => 
      item.category && 
      item.category.id === categoryId)
  : blogItems;

  // カテゴリーごとの記事数を数える処理
  const countArticlesInCategory = (categoryName: string) => {
    return blogItems.filter(item => item.category && item.category.name === categoryName).length;
  };

  // レイアウトの内容
  return (
    <Layout>
      <section className="blog_main-section section">
        <div className="inner">
          <div className="title-area">
            <h2>Blog</h2>
          </div>
          <div className="blog-wrap">
            <div className="category-area">
              <ul className="category-list">
                <li className="category-item"><a href="/blog/">All</a></li>
                {categories.map((category) => (
                  countArticlesInCategory(category.name) > 0 && (
                    <li className={`category-item ${categoryId === String(category.id) ? 'active' : ''}`} key={category.id}>
                      <a href={`/blog/category/${category.id}/`}>{category.name}</a>
                    </li>
                  )
                ))}
              </ul>
            </div>
            <div className="blog-list">
              {filteredBlogItems.map((item) => (
                <div className="blog-item" key={item.id}>
                  <a href={`/blog/${item.id}`}>
                    <div className="blog-item_img">
                      {item.image ? (
                        <img src={item.image.url} alt="" />
                      ) : (
                        <img src="/images/common/title_bg_01.png" alt="" />
                      )}
                    </div>
                  </a>
                  <div className="blog-item_txt">
                    <a href={`/blog/${item.id}`}>
                      <p className="blog-item_date">{formatDate(item.publishedAt)}</p>
                      <h3 className="blog-item_title">{item.title}</h3>
                    </a>
                    <ul className="blog-item_category">
                      <li className="category-item">
                        <a href={`/blog/category/${item.category.id}/`}>{item.category.name}</a>
                      </li>
                    </ul>
                  </div> 
                </div> 
              ))}
            </div>
            <div className="pagination-wrap">
              <ul className="pagination">	
                <li><a href="#page1" className="num"></a></li>
                <li><a href="#page2" className="num"></a></li>
                <li><a href="#page3" className="num"></a></li>
                <li><a href="#page4" className="num _active"></a></li>
                <li><a href="#page5" className="num"></a></li>
                <li><a href="#page6" className="num"></a></li>
                <li><a href="#page7" className="num"></a></li>
                <li><a href="#page8" className="num"></a></li>
                <li><a href="#page9" className="num"></a></li>
                <div className="pacman"></div>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogCategory;