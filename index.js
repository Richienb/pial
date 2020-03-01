"use strict"

// From https://stackoverflow.com/a/40200710/8384910

module.exports = (number) => {
	if (typeof number !== "number") throw new TypeError("A number must be provided!")

	for (let i = 2, s = Math.sqrt(number); i <= s; i++) if (number % i === 0) return false
	return number > 1
}
