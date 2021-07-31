import { Document as DocumentModel } from "../model/Document";
import Document from "./Document";
// import { useState, KeyboardEvent } from "react";
export default function EditArea(props: { data: any }) {
  const document = DocumentModel.create(props.data);
  // const [document, setDocument] = useState(DocumentModel.create(props.data));
  console.log(document);
  return (
    <div className="editArea" contentEditable="true">
      <Document document={document} />
    </div>
  );
}
