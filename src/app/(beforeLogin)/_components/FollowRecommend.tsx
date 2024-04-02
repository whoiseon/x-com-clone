'use client';

import Link from 'next/link';
import style from './followRecommend.module.css';
import { useState } from 'react';

function FollowRecommend() {
  const [followed, setFollowed] = useState(false);

  const onFollow = () => {};

  const user = {
    id: 'public.whoiseon',
    nickname: 'Seon',
    image: '/images/profile.png',
  };

  return (
    <Link href={`/${user.id}`} className={style.container}>
      <div className={style.userLogoSection}>
        <div className={style.userLogo}>
          <img src={user.image} alt={user.id} />
        </div>
      </div>
      <div className={style.userInfo}>
        <div className={style.title}>{user.nickname}</div>
        <div className={style.count}>@{user.id}</div>
      </div>
      <div
        className={[style.followButtonSection, followed && style.followed].join(
          ' ',
        )}
      >
        <button onClick={onFollow}>{followed ? '팔로잉' : '팔로우'}</button>
      </div>
    </Link>
  );
}

export default FollowRecommend;
