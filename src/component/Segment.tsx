import { Segment as SegmentModul } from "../model/Segment";
export default function Segment(props: { segment: SegmentModul }) {
  const { id, style, text = "&nbsp" } = props.segment;
  return (
    <span id={id} style={style}>
      {text}
    </span>
  );
}
