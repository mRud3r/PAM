import { useEffect, useState } from 'react'

export default function useTime() {
  const [time, setTime] = useState<string>(
    new Date().toLocaleString()
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return time
}
