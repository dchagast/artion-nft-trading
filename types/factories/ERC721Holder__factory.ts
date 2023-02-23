/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721Holder, ERC721HolderInterface } from "../ERC721Holder";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610371806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063150b7a0214610030575b600080fd5b61004a60048036038101906100459190610262565b610060565b6040516100579190610320565b60405180910390f35b600063150b7a0260e01b9050949350505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100b382610088565b9050919050565b6100c3816100a8565b81146100ce57600080fd5b50565b6000813590506100e0816100ba565b92915050565b6000819050919050565b6100f9816100e6565b811461010457600080fd5b50565b600081359050610116816100f0565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61016f82610126565b810181811067ffffffffffffffff8211171561018e5761018d610137565b5b80604052505050565b60006101a1610074565b90506101ad8282610166565b919050565b600067ffffffffffffffff8211156101cd576101cc610137565b5b6101d682610126565b9050602081019050919050565b82818337600083830152505050565b6000610205610200846101b2565b610197565b90508281526020810184848401111561022157610220610121565b5b61022c8482856101e3565b509392505050565b600082601f8301126102495761024861011c565b5b81356102598482602086016101f2565b91505092915050565b6000806000806080858703121561027c5761027b61007e565b5b600061028a878288016100d1565b945050602061029b878288016100d1565b93505060406102ac87828801610107565b925050606085013567ffffffffffffffff8111156102cd576102cc610083565b5b6102d987828801610234565b91505092959194509250565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61031a816102e5565b82525050565b60006020820190506103356000830184610311565b9291505056fea2646970667358221220f22c4836846caf5c308aafb3415a58c709697002c4c922fdf4b70df8a1dcb11d64736f6c63430008110033";

export class ERC721Holder__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721Holder> {
    return super.deploy(overrides || {}) as Promise<ERC721Holder>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC721Holder {
    return super.attach(address) as ERC721Holder;
  }
  connect(signer: Signer): ERC721Holder__factory {
    return super.connect(signer) as ERC721Holder__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721HolderInterface {
    return new utils.Interface(_abi) as ERC721HolderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Holder {
    return new Contract(address, _abi, signerOrProvider) as ERC721Holder;
  }
}
