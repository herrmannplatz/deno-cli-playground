import { assertEquals } from "https://deno.land/std@v0.33.0/testing/asserts.ts"

Deno.test({
    name: "last",
    fn(): void {
        assertEquals("a", "a");
    }
})