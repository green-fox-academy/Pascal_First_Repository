"use strict";

import { test } from "tape";
import { checkForAnagram } from "./anagram";

test(t => {
  t.equals(checkForAnagram("Jani", "Ajin"), true);
  t.end();
});
