import Button from "@repo/ui/src/components/button/button"
import { BellIcon, ChevronDownIcon, LayoutGridIcon, NotebookPenIcon, SearchIcon, SettingsIcon } from "lucide-react"

function Header() {
  return (
    <header className="wrapper h-20 f-align gap-3">
      <Button variant="float" color="background-thin" size="lg" className={"ps-1.5"} isRounded>
        <span className="size-[calc(var(--btn-h)-0.75rem)] shadow-lg shadow-brush/10 rounded-full bg-primary" />
        <span>
          فودکس
        </span>
      </Button>

      <Button variant="float" color="background-thin" size="lg" isSquare isRounded>
        <span className="size-[calc(var(--btn-h)-0.75rem)] bg-brush text-palette rounded-full p-2">
          <LayoutGridIcon className="size-full" />
        </span>
      </Button>

      <div className="f-align gap-3 mr-auto">
        <Button variant="float" color="background-thin" size="lg" isSquare isRounded>
          <NotebookPenIcon className="btn-icon-size" />
        </Button>
        <Button variant="float" color="background-thin" size="lg" isSquare isRounded>
          <span className="size-[calc(var(--btn-h)-0.75rem)] bg-primary rounded-full" />
        </Button>
        <Button variant="float" color="background-thin" size="lg" isSquare isRounded>
          <SettingsIcon className="btn-icon-size" />
        </Button>
      </div>

      <div className="f-align gap-3 mr-auto">
        <Button variant="float" color="background-thin" size="lg" className={"pe-1.5"} isRounded>
          <SearchIcon className="btn-icon-size" />
          <span className="h-[calc(var(--btn-h)-0.75rem)] f-align px-1.5 shadow-lg shadow-brush/10 rounded-full bg-background-thin">
            Ctrl + F
          </span>
        </Button>
        <Button variant="float" color="background-thin" size="lg" isSquare isRounded>
          <BellIcon className="btn-icon-size" />
        </Button>
        <Button variant="float" color="background-thin" size="lg" className={"ps-1.5"} isRounded>
          <span className="size-[calc(var(--btn-h)-0.75rem)] shadow-lg shadow-brush/10 rounded-full bg-primary" />
          <ChevronDownIcon className="btn-icon-size" />
        </Button>
      </div>
    </header>
  )
}

export default Header