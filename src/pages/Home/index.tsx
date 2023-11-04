import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const jumpUrl = useNavigate();

  const clickHandler = () => {
    jumpUrl("/login");
  };

  return (
    <>
      <div>Home</div>
      <div>
        <button onClick={clickHandler}>登陆</button>
      </div>
    </>
  );
};

export default Home;
