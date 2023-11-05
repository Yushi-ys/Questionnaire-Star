import React from "react";
import { Empty, Spin, Typography } from "antd";
import QuestionCard from "../../../components/QuestionCard";
import Styles from "./index.module.scss";
import Search from "../../../components/Search";
import useLoadQuestionListData from "../../../hooks/useLoadQuestionListData";

const { Title } = Typography;

const List: React.FC = () => {
  const { data = {}, loading } = useLoadQuestionListData();
  const { list: questionList = [], total: totalNumber = 0 } = data;

  return (
    <>
      <div className={Styles.header}>
        <div className={Styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={Styles.right}>
          <Search />
        </div>
      </div>
      <div className={Styles.content}>
        {loading && (
          <div className={Styles.spin}>
            <Spin />
          </div>
        )}
        {!loading && !questionList.length && <Empty description="暂无数据" />}
        {questionList.length > 0 &&
          questionList.map((question: any) => {
            const { _id } = question;
            return <QuestionCard key={_id} {...question} />;
          })}
      </div>
      <div className={Styles.footer}>load more</div>
    </>
  );
};

export default List;
