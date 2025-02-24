import { useLayoutEffect, useState } from 'react'
import { footer } from '@/config.json'
import { getDiffInDays } from '@/utils/date'

export function RunningDays() {
  const [days, setDays] = useState(0)

  useLayoutEffect(() => {
    const diffDays = getDiffInDays(new Date(footer.start_time))
    setDays(diffDays)
  }, [])

  if (days < 0) {
    return <span>Oops! website has not been published yet</span>
  }

  return <span>It's been running for {days} day</span>
}
