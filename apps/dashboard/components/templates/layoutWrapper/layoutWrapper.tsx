import { PropsWithChildren } from "react"
import LayoutAditionalTool from "../layoutAditionalTool/layoutAditionalTool"

function LayoutWrapper({ children }: PropsWithChildren) {
  return (
    <div className="h-[calc(100vh-5rem)] overflow-y-auto wrapper">
      <LayoutAditionalTool />
      {children}
    </div>
  )
}

export default LayoutWrapper