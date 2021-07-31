import EditArea from "./EditArea";
import ToolBar from "./ToolBar";

export default function Editor(props: { data: any }) {
  return (
    <div id="editor">
      <ToolBar />
      <EditArea data={props.data} />
    </div>
  );
}
