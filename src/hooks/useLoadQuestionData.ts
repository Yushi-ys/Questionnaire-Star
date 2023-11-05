import { useParams } from "react-router-dom";
import { getQuestion } from "../api";
import { useRequest } from "ahooks";

const useLoadQuestionData = () => {
  const { id = "" } = useParams();

  const getData = async () => {
    return await getQuestion(id);
  };

  const { loading, data: dataSource, error } = useRequest(getData);

  return {
    loading,
    dataSource,
    error,
  };
};

export default useLoadQuestionData;
