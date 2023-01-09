import styles from "@/components/table.module.scss";
import {PairProgrammingTool} from "../types/PairProgrammingTool";

interface ColumnProps {
    key: string
    categories: Categories,
    tool: PairProgrammingTool
}

interface CellProps {
    key: string
    value: string
}

type Category = keyof PairProgrammingTool
type Categories = Category[]

const Cell = ({value}: CellProps) => (
    <div role="cell">{value}</div>
)

const Column = ({tool, categories}: ColumnProps) => (
    <div role={'column'} className={'tool'} aria-label={tool.Name}>
        {categories.map(category => {
            const key = `${tool.Name}-${category}`
            if (category === "General Category") {
                return (
                    tool[category].map((v, i) => {
                        const key = `${tool.Name}-${category}-${i}`
                        return <Cell key={key} value={v}/>
                    })
                )
            }

            return (
                <Cell key={key} value={tool[category]}/>
            )
        })}
    </div>
)

type TableProps = {
    tools: PairProgrammingTool[]
}

const Table = ({tools}: TableProps) => {
    const categories: Category[] = Object.keys(tools[0]) as unknown as Category[]

    return (
        <div role="table" className={styles.table}>
            <div className="headers" role="headers">
                {categories.map(category => (
                    <div key={category} role="row">
                        <div role="cell">{category}</div>
                    </div>
                ))}
            </div>
            <div className={styles.columns}>{tools.map(tool =>
                <Column key={tool.Name} tool={tool} categories={categories}/>)
            } </div>
        </div>);
};

export default Table;

