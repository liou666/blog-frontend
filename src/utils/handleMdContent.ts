/* eslint-disable no-useless-escape */
export default function (content: string, maxLength:number) {
  const str = content.replace(/(\*\*|__)(.*?)(\*\*|__)/g, '$2') // 全局匹配内粗体
    .replace(/\!\[[\s\S]*?\]\([\s\S]*?\)/g, '') // 全局匹配图片
    .replace(/\[[\s\S]*?\]\([\s\S]*?\)/g, '') // 全局匹配连接
    .replace(/<\/?.+?\/?>/g, '') // 全局匹配内html标签
    .replace(/(\*)(.*?)(\*)/g, '$2') // 全局匹配内联代码块
    .replace(/`{1,2}[^`](.*?)`{1,2}/g, '$1') // 全局匹配内联代码块
    .replace(/```([\s\S]*?)```[\s]*/g, '$1') // 全局匹配代码块
    .replace(/\~\~(.*?)\~\~/g, '$1') // 全局匹配删除线
    .replace(/[\s]*[-\*\+]+(.*)/g, '$1') // 全局匹配无序列表
    .replace(/[\s]*[0-9]+\.(.*)/g, '$1') // 全局匹配有序列表
    .replace(/(#+)(.*)/g, '$2') // 全局匹配标题
    .replace(/(>+)(.*)/g, '$2') // 全局匹配摘要
    .replace(/\r\n/g, '') // 全局匹配换行
    .replace(/\n/g, '') // 全局匹配换行
    .replace(/\s/g, '') // 全局匹配空字符;
  const result = str.slice(0, maxLength)
  if (str.length <= maxLength) {
    return result
  }
  return `${result}......`
}
