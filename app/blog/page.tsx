// 記事一覧ページのコンポーネント
'use client';

// ライブラリの読み込み
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { client } from "../../libs/client";

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
  name: string;
};

const Blog = () => {

  // ここでblogItemsの型を指定
  const [blogItems, setBlogItems] = useState<BlogItem[]>([]);

  // APIからデータを取得する処理
  useEffect(() => {
    client.get({ endpoint: "blogs" })
      .then(data => {
        setBlogItems(data.contents);
      });
  }, []);

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
                <li className="category-item"><a href="/blog/category1/">Category1</a></li>
                <li className="category-item"><a href="/blog/category2/">Category2</a></li>
                <li className="category-item"><a href="/blog/category3/">Category3</a></li>
              </ul>
            </div>
            <div className="blog-list">
              {blogItems.map((item: BlogItem) => (
                <div className="blog-item" key={item.id}>
                  <a href={`/blog/detail/${item.id}`}>
                    <div className="blog-item_img">
                      <img src={item.image.url} alt="" />
                    </div>
                  </a>
                  <div className="blog-item_txt">
                    <a href={`/blog/detail/${item.id}`}>
                      <p className="blog-item_date">{formatDate(item.publishedAt)}</p>
                      <h3 className="blog-item_title">{item.title}</h3>
                    </a>
                    <ul className="blog-item_category">
                      <li className="category-item">
                        <a href="">{item.category.name}</a>
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

export default Blog;