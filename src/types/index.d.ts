export type Post = {
  id: number
  author: string
  title: string
  content: string
  sub_title?: string
  label: string
  create_time: string
  [key: string]: any
}

export type label = {
  name: string
  children: Array<{
    title: string
    id: number
    subtitle: string
  }>
}

export type PostResponse = {
  data: Post[]
  total: number
}

export type PageInfo = {
  pageSize: number
  pageNum: number
}

interface BaseResponse {
  code: number
}
export interface ErrorResponse extends BaseResponse {
  msg: string
}
export interface SuccessResponse<T> extends BaseResponse {
  data: T
}
