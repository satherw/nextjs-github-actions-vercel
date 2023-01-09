import {useRouter} from "next/router";
import {useAppDispatch, useAppSelector} from "../src/hook";
import {selectTool, updateTool} from "../src/toolSlice";

export default function Home() {

  const router = useRouter()
  const dispatch = useAppDispatch()
  const selectedTool = useAppSelector(selectTool)

  const tools = [
    'Teams',
    'Zoom',
    'Tuple',
    'Pop',
    'Drovio',
    'LiveShare/VS Code',
    'CodeWithMe/Jetbrains',
    'VNC/BuiltInScreenSharing',
    'Other'
  ];

  const onContinue = () => {
    selectedTool && router.push(`/results`)
  }

  const onToolSelected = (tool: string) => {
    dispatch(updateTool(tool))
  }

  return (
      <div>
        <div>For each question, select all that apply</div>
        <p>What do your engineering teams use for pair programming?</p>

        {tools.map(tool => (
            <div key={tool} role="checkbox" onClick={() => onToolSelected(tool)}>
              <input
                  aria-label={tool}
                  type="checkbox"
                  onChange={() => onToolSelected(tool)}
                  checked={selectedTool === tool}
              />
              <label>{tool}</label>
            </div>
        ))}

        <button onClick={onContinue} disabled={!selectedTool}>Continue</button>

      </div>
  )
}
