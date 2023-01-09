import {useAppSelector} from "../src/hook";
import {selectTool} from "../src/toolSlice";
import pairProgrammingTools from "./pairProgrammingTools.json"
import {PairProgrammingTool} from "../types/PairProgrammingTool";
import Table from "@/components/Table";

const tools: PairProgrammingTool[] = pairProgrammingTools as unknown as PairProgrammingTool[];

export default function Results() {
    const selectedTool = useAppSelector(selectTool)

    return (
        <div>
            <h1>Results</h1>
            <div>You selected {selectedTool}</div>
            <Table tools={tools}/>
        </div>
    )
}
