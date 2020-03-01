const test = require("ava")
const pial = require(".")

test("main", (t) => {
	t.false(pial(1))
	t.true(pial(2))
	t.false(pial(4))
})
