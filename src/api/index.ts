import api from '@/api/request'
import type{ Post, PageInfo, SuccessResponse, PostResponse } from 'types'

// 获取文章列表
export const getBlogList = (params?:PageInfo):Promise<SuccessResponse<PostResponse>> => {
  return api.get('/list', params)
}
