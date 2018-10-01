const SimpleCounter = artifacts.require(`./SimpleCounter.sol`)

contract(`SimpleCounter`, accounts => {
	it(`should increment counter by one`, async () => {
		const simpleCounter = await SimpleCounter.deployed()

		const counterValuePreIncrement = +(await simpleCounter.getCounter.call())
		await simpleCounter.increment({ from: accounts[0] })
		const counterValueAfterIncrement = +(await simpleCounter.getCounter.call())

		assert.equal(
			counterValueAfterIncrement,
			counterValuePreIncrement + 1,
			`The counter was not increased by one after the increment`
		)
	})

	it(`should decrement counter by one`, async () => {
		const simpleCounter = await SimpleCounter.deployed()

		const counterValuePreDecrement = +(await simpleCounter.getCounter.call())
		await simpleCounter.decrement({ from: accounts[0] })
		const counterValueAfterDecrement = +(await simpleCounter.getCounter.call())

		assert.equal(
			counterValueAfterDecrement,
			counterValuePreDecrement - 1,
			`The counter was not decreased by one after the decrement`
		)
	})
})