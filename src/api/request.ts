import instance from './instance'

export const get = async (url: string, params?: any) => {
  const res = await instance.get(url, { params })
  return res.data
}

export const post = async (url: string, payload?: any) => {
  const res = await instance.post(url, payload)
  return res.data
}

export default {
  get,
  post
}
