export interface IResult {
  code: number;
  data?: Record<string, any>;
}

export interface IQuestionCardInfo {
  _id: string;
  title: string;
  isPublished: boolean;
  isStar: boolean;
  answerCount: number;
  createAt: string;
  isDeleted?: boolean;
}

export interface ILogin {
  username: string;
  password: string;
  remember: boolean;
}

export interface IRegister {
  username: string;
  password: string;
  confirm_password: string;
}

export interface ISearchOption {
  keyword: string;
  isStar: boolean;
  isDeleted: boolean;
  page: number;
  pageSize: number;
}
