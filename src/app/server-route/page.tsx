import { ImageSlider } from '@/components/ImageSlider'
import { clientSideFunction } from '@/utils/client-utils'
import { serverSideFunction } from '@/utils/server-utils'

export default function ServerRoute() {
  console.log('Server route rendered')
  const result = serverSideFunction()
  const clientResult = clientSideFunction()
  return (
    <>
      <h1>Server Route</h1>
      <p>{result}</p>
      <ImageSlider />
    </>
  )
}
