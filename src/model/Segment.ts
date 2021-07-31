import { generateNodeId } from "../uitl/generateNodeId";
import { Node } from "./Node";
export class Segment extends Node {
  public static create(json: any) {
    const { id, style, text } = json;
    return new Segment(id, style, text);
  }
  public style: React.CSSProperties;
  public text: string;
  constructor(id = generateNodeId(), style = {}, text = "") {
    super(id, "segment");
    this.style = { ...style };
    this.text = text;
  }
}
