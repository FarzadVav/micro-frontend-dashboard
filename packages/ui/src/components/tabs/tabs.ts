import { TabsTab } from "./tabsTab";
import { TabsList } from "./tabsList";
import { TabsRoot } from "./tabsRoot";
import { TabsPanel } from "./tabsPanel";

export const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Tab: TabsTab,
  Panel: TabsPanel
});