import { Route } from "react-router-dom";

interface Props {
  navItems: { path: string; element: any }[];
}

function RouteComponent({ navItems }: Props) {
  return (
    <>
      {navItems.map(item => {
        return <Route key={item.path} element={item.element} path={item.path} />;
      })}
    </>
  );
}

export default RouteComponent;
