import dayjs from 'dayjs'

export function parseYYYYMMDD(date: Date): string {
  if (!date) return ''
  return dayjs(date).format('YYYY-MM-DD')
}

export function parseYYYYMMDDjp(date: Date): string {
  if (!date) return ''
  return dayjs(date).format('YYYY年 MM月 DD日')
}

export function parseYYYYMMDDHHmmJp(date: Date): string {
  if (!date) return ''
  return dayjs(date).format('YYYY年 MM月 DD日 HH時 mm分')
}
export function parseYYYYMMDDHHmmJpSimple(date: Date): string {
  if (!date) return ''
  return dayjs(date).format('YYYY/MM/DD HH:mm')
}

export function parseYYYYMM(date: Date): string {
  if (!date) return ''
  return dayjs(date).format('YYYY年MM月')
}

export function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max))
}

export function getRandomIntNoDup(
  max: number,
  dupNums?: Array<number>
): number {
  if (!dupNums) return getRandomInt(max)
  let randomInt = getRandomInt(max)
  while (dupNums.includes(randomInt)) {
    randomInt = getRandomInt(max)
  }
  return randomInt
}
