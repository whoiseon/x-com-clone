'use client';

import style from './trendSection.module.css';
import Trend from '@/app/(beforeLogin)/_components/Trend';

function TrendSection() {
  return (
    <div className={style.trendBg}>
      <div className={style.trend}>
        <h3>나를 위한 트렌드</h3>
        {Array.from({ length: 5 }).map((_, index) => {
          return <Trend key={index} />;
        })}
      </div>
    </div>
  );
}

export default TrendSection;
