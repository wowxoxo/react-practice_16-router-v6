import { Route, Routes, Link, Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      {/* <Routes>
        <Route path="new-user" element={<p>Welcome, new user!</p>} />
      </Routes> */}
      <Link to="new-user">New user</Link>
      <Outlet />
    </section>
  );
};

export default Welcome;
