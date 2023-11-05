import { Input } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { SEARCH_PARAM_KEY } from "../../constant";

const { Search: SearchCom } = Input;

const Search: React.FC = () => {
  const jumpUrl = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState("");

  const onSearch = (value: string) => {
    value &&
      jumpUrl({
        pathname,
        search: `${SEARCH_PARAM_KEY}=${value}`,
      });
  };

  useEffect(() => {
    const newVal = searchParams.get(SEARCH_PARAM_KEY) || "";
    setValue(newVal);
  }, []);

  return (
    <SearchCom
      placeholder="查点什么..."
      allowClear
      value={value}
      enterButton="Search"
      size="large"
      onSearch={onSearch}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Search;
