import RedirectToLogin from '@/app/(beforeLogin)/login/_component/RedirectToLogin';
import Main from '@/app/(beforeLogin)/_components/Main';

function LoginPage() {
  return (
    <>
      <RedirectToLogin />
      <Main />
    </>
  );
}

export default LoginPage;
