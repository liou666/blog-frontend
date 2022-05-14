export type Post = {
  id: number
  author: string
  title: string
  content: string
  sub_title?: string
  create_time: string
  [key: string]: any
}

export type PostResponse = {
  data: Post[]
  total: number
}

export type PageInfo = {
  pageSize: number,
  pageNum: number
}

export interface BaseResponse {
  code: number
}
export interface ErrorResponse extends BaseResponse {
  msg: string
}
export interface SuccessResponse<T> extends BaseResponse {
  data: T
}
