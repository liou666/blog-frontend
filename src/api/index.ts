import api from '@/api/request'
import type{ Post, PageInfo, label, SuccessResponse, PostResponse } from 'types'

// 获取文章列表
export const getBlogList = (params?:PageInfo):Promise<SuccessResponse<PostResponse>> => {
  return api.get('/list', params)
}

// 获取标签列表
export const getLabelList = ():Promise<SuccessResponse<label[]>> => {
  return api.get('/label')
}
