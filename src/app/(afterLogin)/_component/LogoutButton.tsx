'use client';

import style from './logoutButton.module.css';

function LogoutButton() {
  // This is a mock data for the logged in user
  const me = {
    id: 'public.whoiseon',
    nickname: 'Seon',
    image: '/images/profile.png',
  };

  const onLogout = () => {};

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <img src={me?.image as string} alt={me?.id as string} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me?.nickname}</div>
        <div>@{me?.id}</div>
      </div>
    </button>
  );
}

export default LogoutButton;
