import { fixture, Selector } from "testcafe";


fixture("insertAdjacentText")
	.page("http://localhost:3000/")

test("insert text", async (t) => {
    await t.click(Selector("#insert-text"));
    await t.expect(Selector("#target").innerText).eql("1");
});
test("insert number", async (t) => {
    await t.click(Selector("#insert-number")); // <- FAILS: "TypeError: Illegal invocation"
    await t.expect(Selector("#target").innerText).eql("1");
});