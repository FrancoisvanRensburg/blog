import { Routes, Route, Link, useNavigate } from "react-router-dom";

function One() {
  return (
    <div>
      <Link to={"/two"}>Two</Link>
    </div>
  );
}

function Two() {
  return (
    <div>
      <Link to={"/one"}>One</Link>
    </div>
  );
}

let navItems = [
  { path: "one", element: <One /> },
  { path: "two", element: <Two /> }
];

function Nav() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={"flex flex-col items-center flex-grow sm:flex-row sm:justify-around "}
        style={{ border: "1px solid red" }}
      >
        {navItems.map(item => {
          return <div onClick={() => navigate(item.path)}>{item.path}</div>;
        })}
      </div>
      <Routes>
        {navItems.map(item => (
          <Route path={item.path} element={item.element} />
        ))}
      </Routes>
    </>
  );
}

export default Nav;
