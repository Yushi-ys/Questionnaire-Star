import { useRequest } from "ahooks";
import { useSearchParams } from "react-router-dom";
import { SEARCH_PARAM_KEY } from "../constant";
import { getQuestionList } from "../api";

const useLoadQuestionListData = (
  props: {
    isStar?: boolean;
    isDeleted?: boolean;
  } = {}
) => {
  const { isStar = false, isDeleted = false } = props;
  const [searchParams] = useSearchParams();

  const getData = async () => {
    const keyword = searchParams.get(SEARCH_PARAM_KEY) || "";
    const page = Number(searchParams.get("page") || "") || 1;
    const pageSize = Number(searchParams.get("pageSize") || "") || 20;
    return await getQuestionList({
      keyword,
      isStar,
      isDeleted,
      page,
      pageSize,
    });
  };

  const { data, loading } = useRequest(getData, {
    refreshDeps: [searchParams], // 依赖项
  });

  return {
    data,
    loading,
  };
};

export default useLoadQuestionListData;
