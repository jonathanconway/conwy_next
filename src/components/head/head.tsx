import Head_ from "next/head";

import { FavIcons } from "./fav-icons";
import { PrismJSThemeLink } from "./prismjs-theme";

export function Head() {
  return (
    <Head_>
      <FavIcons />

      <PrismJSThemeLink />

      <script src="//embed.typeform.com/next/embed.js" defer></script>
    </Head_>
  );
}
