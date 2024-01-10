interface Props {
  children: React.ReactNode;
}

function AfterLoginLayout({ children }: Props) {
  return <div>After Login Layout{children}</div>;
}

export default AfterLoginLayout;
