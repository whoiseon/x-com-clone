'use client';

import style from './trend.module.css';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function Trend() {
  const trend = {
    title: '테스트',
    count: 1234,
  };

  const searchParams = useSearchParams();
  const newSearchParams = new URLSearchParams(searchParams);
  newSearchParams.set('q', trend.title);

  return (
    <Link
      href={`/search?${newSearchParams.toString()}`}
      className={style.container}
    >
      <div className={style.count}>실시간트렌드</div>
      <div className={style.title}>{trend.title}</div>
      <div className={style.count}>{trend.count.toLocaleString()} posts</div>
    </Link>
  );
}

export default Trend;
