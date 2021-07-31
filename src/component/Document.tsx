import { Document as DocumentModel } from "../model/Document";
import { Paragraph as ParagraphModel } from "../model/Paragraph";
import Paragraph from "./Paragraph";
export default function Document(props: { document: DocumentModel }) {
  const { id, nodes } = props.document;
  console.log(props.document);
  return (
    <div id={id}>
      {nodes.map(node => (
        <Paragraph paragraph={node as ParagraphModel} />
      ))}
    </div>
  );
}
