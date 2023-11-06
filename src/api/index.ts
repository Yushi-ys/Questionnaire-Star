import axios from "../service/axios";
import { ISearchOption } from "../types";

export type ResDataType = Record<string, any>;

// 获取单个问卷信息
export async function getQuestion(id: string): Promise<ResDataType> {
  const url = "/api/question/${id}";
  const data = (await axios.get(url)) as ResDataType;
  return data;
}

// 创建问卷
export async function createQuestion(): Promise<ResDataType> {
  const url = "/api/question";
  const data = (await axios.post(url)) as ResDataType;
  return data;
}

// 获取（查询）问卷列表
export async function getQuestionList(
  opt: Partial<ISearchOption> = {}
): Promise<ResDataType> {
  const url = "/api/question";
  const data = (await axios.get(url, { params: opt })) as ResDataType;
  return data;
}

// 更新单个问卷
export async function updateQuestion(
  id: string,
  opt: { [key: string]: any }
): Promise<ResDataType> {
  const url = `/api/question/${id}`;
  const data = (await axios.get(url, opt)) as ResDataType;
  return data;
}

// 复制问卷
export async function duplicateQuestion(id: string): Promise<ResDataType> {
  const url = `/api/question/duplicate/${id}`;
  const data = (await axios.post(url)) as ResDataType;
  return data;
}

// 批量彻底删除
export async function deleteQuestions(ids: string[]): Promise<ResDataType> {
  const url = "/api/question/deleteBatch";
  const data = (await axios.delete(url, { data: { ids } })) as ResDataType;
  return data;
}

// 获取用户信息
export async function getUerInfo(): Promise<ResDataType> {
  const url = "/api/user/info";
  const data = (await axios.get(url)) as ResDataType;
  return data;
}

// 注册
export async function register(
  username: string,
  password: string
): Promise<ResDataType> {
  const url = "/api/user/register";
  const data = (await axios.post(url, { username, password })) as ResDataType;
  return data;
}

// 登陆
export async function login(
  username: string,
  password: string
): Promise<ResDataType> {
  const url = "/api/user/login";
  const data = (await axios.post(url, { username, password })) as ResDataType;
  return data;
}
