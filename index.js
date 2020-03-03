"use strict"

// Adapted from https://stackoverflow.com/a/40200710/8384910

module.exports = (number) => {
	if (typeof number !== "number") throw new TypeError("A number must be provided!")
	if (number < 0) throw new TypeError("The number must be positive!")

	if (number % 2 === 0 && number !== 2) return false

	for (let i = 3, max = Math.sqrt(number); i <= max; i += 2) if (number % i === 0) return false

	return number > 1
}
