export function asyncThrottle<R, A extends Array<any>>(fn: (...args: A) => Promise<R>, delay: number): (...args: A) => Promise<void> {
  let timeout: NodeJS.Timeout | null = null

  return async (...args: A) => {
    if (timeout) return

    await fn(...args)

    timeout = setTimeout(() => { timeout = null }, delay)
  }
}
