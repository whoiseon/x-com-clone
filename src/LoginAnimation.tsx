'use client';

import Lottie from 'react-lottie-player';

import AnimationJson from '../public/images/login-animation.json';

function LoginAnimation() {
  return (
    <Lottie
      loop
      animationData={AnimationJson}
      play
      style={{ width: '100%', height: '100%' }}
    />
  );
}

export default LoginAnimation;
