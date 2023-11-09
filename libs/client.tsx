// microCMS の API を叩くためのクライアントを作成
import { createClient } from 'microcms-js-sdk';

// API クライアントを作成
export const client = createClient({
  serviceDomain: 'ninolog',  // service-domain は XXXX.microcms.io の XXXX 部分
  apiKey: 'Lcw0peXCGsaqznhRMMLC2rRZChA6xC8QXbbi',
});