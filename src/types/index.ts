export interface IQuestionCardInfo {
  _id: string;
  title: string;
  isPublished: boolean;
  isStar: boolean;
  answerCount: number;
  createAt: string;
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
