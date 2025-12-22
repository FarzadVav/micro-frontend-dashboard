"use client";

import Link from "next/link"
import { Button, Modal } from "@repo/ui/src/components"
import { getAvailableModules, ModuleRoles } from "@repo/config/src"
import { BellIcon, ChevronDownIcon, LayoutGridIcon, NotebookPenIcon, SearchIcon, SettingsIcon } from "lucide-react"
import { useUser } from "@repo/lib/src";

function Header() {
  const { user } = useUser();

  return (
    <header className="wrapper h-20 f-align gap-3">
      <Button variant="float" color="background-thin" size="lg" className={"ps-1.5"} isRounded>
        <span className="size-[calc(var(--btn-h)-0.75rem)] shadow-lg shadow-brush/10 rounded-full bg-primary" />
        <span>
          فودکس - {user?.result?.firstName}
        </span>
      </Button>

      <Modal>
        <Modal.Toggle variant="float" color="background-thin" size="lg" isSquare isRounded>
          <span className="size-[calc(var(--btn-h)-0.75rem)] bg-brush text-palette rounded-full p-2">
            <LayoutGridIcon className="size-full" />
          </span>
        </Modal.Toggle>
        <Modal.Portal className="modal-portal items-start">
          <Modal.Body className="modal-body w-full">
            <Modal.Content className="modal-content grid grid-cols-4 gap-6">
              {getAvailableModules(ModuleRoles.ADMIN).map((mod) => (
                <Link key={mod.id} href={"/panel" + mod.route}>
                  <Button variant="ghost" size="lg" isRounded>
                    <mod.icon className="btn-icon-size" />
                    {mod.label}
                  </Button>
                </Link>
              ))}
            </Modal.Content>
          </Modal.Body>
        </Modal.Portal>
      </Modal>

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