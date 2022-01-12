import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import GoodsPhoto from '../components/goods/GoodsPhoto';
import GoodsInfo from '../components/goods/GoodsInfo';
import WriterInfo from '../components/WriterInfo';
import goodslist from '../data/goodslist';
import { Goods } from '../types';

function GoodsDetails() {
  const { pathname } = useLocation();
  const postId = Number(pathname.split('/')[2]);
  const [postInfo, setPostInfo] = useState<Goods>();

  /* 서버에서 post 정보 받아오는 요청 */
  useEffect(() => {
    for (let i = 0; i < goodslist.length; i++) {
      if (goodslist[i].id === postId) {
        setPostInfo(goodslist[i]);
        return;
      }
    }
  }, []);

  return postInfo ? (
    <main>
      <GoodsPhoto postImg={postInfo.img}></GoodsPhoto>
      <WriterInfo postWriter={postInfo.writer}></WriterInfo>
      <GoodsInfo
        postTitle={postInfo.title}
        postText={postInfo.text}
      ></GoodsInfo>
    </main>
  ) : null;
}

export default GoodsDetails;
