import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <>
      <div></div>
      <div>
        <Outlet />
      </div>
      <div></div>
    </>
  );
};

export default MainLayout;
