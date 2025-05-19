import type { TabContainers } from "@utils/tabsHandler/types";

export interface ITabHandler {
    init(tabContainers: TabContainers): void;
}
