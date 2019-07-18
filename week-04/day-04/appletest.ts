"use strict";

import { test } from "tape";
import { Apple } from "./apples";

test(t => {
  const fruit = new Apple();

  t.equals(fruit.getApple(), "apples");
  t.end();
});
