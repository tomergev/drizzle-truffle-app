const SimpleCounter = artifacts.require(`SimpleCounter`)
const MyStringStore = artifacts.require(`MyStringStore`)

module.exports = deployer => {
    deployer.deploy(SimpleCounter)
    deployer.deploy(MyStringStore)
}
