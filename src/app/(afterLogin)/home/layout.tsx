interface Props {
  children: React.ReactNode;
}

function HomeLayout({ children }: Props) {
  return <div>Home Layout{children}</div>;
}

export default HomeLayout;
