import { Outlet } from "react-router-dom";

const QuestionLayout: React.FC = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default QuestionLayout;
