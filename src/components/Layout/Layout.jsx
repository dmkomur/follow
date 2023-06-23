import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
export const Layout = () => {
  return (
    <>
      <div style={{ width: "1260px", padding: "0 15px", margin: "0 auto" }}>
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};
