import { Paragraph } from "./Paragraph";
import { Node } from "./Node";
import { generateNodeId } from "../uitl/generateNodeId.js";
export class Document extends Node {
  public static create(json: any) {
    const { id, nodes } = json;
    return new Document(
      id,
      nodes.map((node: Node) => {
        return Paragraph.create(node);
      })
    );
  }
  public nodes: Node[];
  constructor(id = generateNodeId(), nodes = []) {
    super(id, "document");
    this.nodes = nodes;
  }
}
