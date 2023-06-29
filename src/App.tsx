import { useState } from 'react'

import { Checkbox } from './components/ui/checkbox'

export function App() {
  const [isCheck, setIsCheck] = useState(true)

  return (
    <div>
      <Checkbox label={'checkbox'} checked={isCheck} onChange={setIsCheck} disabled />
    </div>
  )
}
