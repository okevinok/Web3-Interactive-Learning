const { BigNumber } = require("ethers");
const hre = require("hardhat");

async function main(){
    const Web3ClubScore = await hre.ethers.getContractFactory("Web3ClubScore");
    const web3clubscore = await Web3ClubScore.deploy("0x5fbdb2315678afecb367f032d93f642f64180aa3");
    await web3clubscore.deployed();

    console.log(web3clubscore.address);
}

main().catch((error)=>{
    console.log(error);
    process.exitCode = 1;
})