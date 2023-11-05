import useLoadQuestionData from "../../../hooks/useLoadQuestionData";

const Edit: React.FC = () => {
  const { loading, dataSource } = useLoadQuestionData();

  return (
    <>{loading ? <span>加载中...</span> : <div>{JSON.stringify(dataSource)}</div>}</>
  );
};

export default Edit;
