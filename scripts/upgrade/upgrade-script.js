

async function main() {
    const Box = await ethers.getContractFactory("Shop3CollectionV1")
    console.log("Deploying Box, ProxyAdmin, and then Proxy...")
    const proxy = await upgrades.deployProxy(Box, [100,1,100,"google.com"], { initializer: 'initialize' })
    console.log("Proxy of Box deployed to:", proxy.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
