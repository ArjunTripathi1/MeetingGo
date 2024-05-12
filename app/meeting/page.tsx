import LiveKitRoom1 from '@/components'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div> <Suspense fallback={<div>Loading...</div>}>
        <LiveKitRoom1/>
  </Suspense></div>
  )
}

export default page