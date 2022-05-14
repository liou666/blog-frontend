const getRandomColor = (colors: string[], length: number) => {
  const colorArr = []
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * colors.length)
    colorArr.push(colors[index])
  }

  return colorArr
}
export default getRandomColor
