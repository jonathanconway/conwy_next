import { ItemTechs } from "@/components/item";
import { WorkMeta } from "@/framework";

interface WorkTechsProps {
  readonly workMeta: WorkMeta;
}

export function WorkTechs(props: WorkTechsProps) {
  return <ItemTechs itemMeta={props.workMeta} />;
}
