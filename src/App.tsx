import data from "./data/test.data.json";
import Editor from "./component/Editor";

export default function App() {
  return (
    <div id="app">
      <Editor data={data as any} />
    </div>
  );
}
