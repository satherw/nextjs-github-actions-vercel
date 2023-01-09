import {useAppSelector} from "../src/hook";
import {selectTitle} from "../src/slice";

export default function Home() {

  const title: string = useAppSelector(selectTitle);

  return (
      <div>
        <h1>{title}</h1>
        <p>An example NextJs app deployed through the Vercel CLI on GitHub Actions</p>
      </div>
  )
}
