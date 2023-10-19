import { Loading } from "./icons/loading"

export const FullScreenLoading = () => {
  return (
    <div className="absolute left-0 top-0 right-0 bottom-0 bg-dark flex flex-col justify-center items-center z-1000 bg-neutral-800">
      <div className="w-[300px]">
        <img src="/logo.png" alt="logo" />
      </div>
      <Loading />
    </div>
  )
}