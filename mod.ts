import { green } from "https://deno.land/std/fmt/colors.ts";

// https://example.com/awesome/cli.ts
async function myAwesomeCli(): Promise<void> {
  console.log(green(" ✔️  deno-cli"));
}

if (import.meta.main) {
  myAwesomeCli();
}
