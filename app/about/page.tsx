import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      {/* about_main-section */}
      <section className="about_main-section section">
        <div className="inner">
          <div className="title-area">
            <h2>About</h2>
          </div>
          <div className="profile-area">
            <div className="image-wrap">
              <div className="image-area">
                <img src="/images/about/nino.png" alt="仮の姿" />
              </div>
              <div className="image-description">
                <p>
                  <span>Nino</span>（仮の姿）
                </p>
              </div>
              <div className="sns-area">
                <a
                  href="https://twitter.com/nino_2v"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/about/x_logo.png" alt="X" />
                </a>
                <a
                  href="https://github.com/ninolog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/about/github_logo.png" alt="github" />
                </a>
              </div>
            </div>
            {/* /image-wrap */}
            <div className="txt-wrap">
              <div className="txt-area">
                <h3>Detail</h3>
                <p>
                  とある田舎のエンジニア。
                  <br className="sp-block" />
                  好きなことで生きていく。
                  <br />
                  しかしChatGPTなしでは生きられない。
                </p>
                <dl>
                  <dt>Name</dt>
                  <dd>Nino（ニノ）</dd>
                </dl>
                <dl>
                  <dt>Area</dt>
                  <dd>九州の田舎</dd>
                </dl>
                <dl>
                  <dt>Age</dt>
                  <dd>ピーターパン症候群</dd>
                </dl>
                <dl>
                  <dt>Job</dt>
                  <dd>しがないエンジニア</dd>
                </dl>
              </div>
              <div className="txt-area">
                <h3>Site</h3>
                <p>
                  思いつきで作成したサイトのため、
                  <br className="sp-block" />
                  コンテンツ迷子中。
                </p>
              </div>
            </div>
            {/* /txt-wrap */}
          </div>
          {/* /profile-area */}
        </div>
        {/* /inner */}
      </section>
      {/* /about_main-section */}
    </Layout>
  );
};

export default About;