import { Loading } from '../Loading'

export const ScreenLoading = () => {
  return (
    <div className="fixed left-0 top-0 z-[50] flex h-full w-full items-center justify-center bg-black/50 backdrop-blur-sm">
      <Loading />
    </div>
  )
}
