import { PostMeta } from "./post/post-meta";
import { ProjectMeta } from "./project";
import { WorkMeta } from "./work";

export type Meta = PostMeta | WorkMeta | ProjectMeta;

export type MetaType = Meta["type"];
