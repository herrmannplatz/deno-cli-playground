#!/usr/bin/env -S deno --allow-read

import { parse } from "https://deno.land/std/flags/mod.ts";
import { green } from "https://deno.land/std/fmt/colors.ts";

const parsedArgs = parse(Deno.args);

const decoder = new TextDecoder();

if (parsedArgs.h || parsedArgs.help || parsedArgs._.length === 0) {
  console.log("Usage: deno-cli [-h|--help] [file...]");
}

for (const fileName of parsedArgs._) {
  const fileContents = await Deno.readFile(fileName);
  const json = JSON.parse(decoder.decode(fileContents));
  console.log(green('✔️'), json);
}
