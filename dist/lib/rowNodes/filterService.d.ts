// Type definitions for ag-grid-community v20.1.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { ChangedPath } from "../rowModels/clientSide/changedPath";
export declare class FilterService {
    private filterManager;
    private gridOptionsWrapper;
    private doingTreeData;
    private postConstruct;
    filter(changedPath: ChangedPath): void;
    private filterNode;
    private setAllChildrenCountTreeData;
    private setAllChildrenCountGridGrouping;
    private setAllChildrenCount;
}
