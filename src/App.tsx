import { Button } from './components/ui/button'
import { Typography } from './components/ui/typography'

export function App() {
  return (
    <div>
      <Typography variant={'link1'}>Hello</Typography>
      <Button>Primary</Button>
      <Button variant={'secondary'}>Secondary</Button>
      <Button variant={'link'}>Link</Button>
      <Button variant={'tertiary'}>Tertiary</Button>
    </div>
  )
}
