import React, { useState } from "react";
import { Empty, Typography } from "antd";
import QuestionCard from "../../../components/QuestionCard";
import Styles from "./index.module.scss";
import { IQuestionCardInfo } from "../../../types";
import Search from "../../../components/Search";

const { Title } = Typography;

const List: React.FC = () => {
  const [questionList, setQuestionList] = useState<IQuestionCardInfo[]>([
    {
      _id: "001",
      title: "问卷1",
      isPublished: false,
      isStar: true,
      answerCount: 10,
      createAt: "2020-02-28",
    },
    {
      _id: "002",
      title: "问卷2",
      isPublished: true,
      isStar: true,
      answerCount: 10,
      createAt: "2020-02-28",
    },
    {
      _id: "003",
      title: "问卷3",
      isPublished: false,
      isStar: true,
      answerCount: 10,
      createAt: "2020-02-28",
    },
    {
      _id: "004",
      title: "问卷4",
      isPublished: false,
      isStar: true,
      answerCount: 10,
      createAt: "2020-02-28",
    },
  ]);

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
        {!questionList.length && <Empty description="暂无数据" />}
        {questionList.length > 0 &&
          questionList.map((question) => {
            const { _id } = question;
            return <QuestionCard key={_id} {...question} />;
          })}
      </div>
      <div className={Styles.footer}>load more</div>
    </>
  );
};

export default List;
