/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { INFTOracle, INFTOracleInterface } from "../INFTOracle";

const _abi = [
  {
    inputs: [],
    name: "latestAnswer",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class INFTOracle__factory {
  static readonly abi = _abi;
  static createInterface(): INFTOracleInterface {
    return new utils.Interface(_abi) as INFTOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): INFTOracle {
    return new Contract(address, _abi, signerOrProvider) as INFTOracle;
  }
}
