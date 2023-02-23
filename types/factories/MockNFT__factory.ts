/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockNFT, MockNFTInterface } from "../MockNFT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600881526020017f4d696e74204e46540000000000000000000000000000000000000000000000008152506040518060400160405280600281526020017f4d4e00000000000000000000000000000000000000000000000000000000000081525081600090816200008f919062000412565b508060019081620000a1919062000412565b505050620000c4620000b8620000ca60201b60201c565b620000d260201b60201c565b620004f9565b600033905090565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200021a57607f821691505b60208210810362000230576200022f620001d2565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200029a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200025b565b620002a686836200025b565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620002f3620002ed620002e784620002be565b620002c8565b620002be565b9050919050565b6000819050919050565b6200030f83620002d2565b620003276200031e82620002fa565b84845462000268565b825550505050565b600090565b6200033e6200032f565b6200034b81848462000304565b505050565b5b8181101562000373576200036760008262000334565b60018101905062000351565b5050565b601f821115620003c2576200038c8162000236565b62000397846200024b565b81016020851015620003a7578190505b620003bf620003b6856200024b565b83018262000350565b50505b505050565b600082821c905092915050565b6000620003e760001984600802620003c7565b1980831691505092915050565b6000620004028383620003d4565b9150826002028217905092915050565b6200041d8262000198565b67ffffffffffffffff811115620004395762000438620001a3565b5b62000445825462000201565b6200045282828562000377565b600060209050601f8311600181146200048a576000841562000475578287015190505b620004818582620003f4565b865550620004f1565b601f1984166200049a8662000236565b60005b82811015620004c4578489015182556001820191506020850194506020810190506200049d565b86831015620004e45784890151620004e0601f891682620003d4565b8355505b6001600288020188555050505b505050505050565b61298180620005096000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a2578063a22cb46511610071578063a22cb465146102a4578063b88d4fde146102c0578063c87b56dd146102dc578063e985e9c51461030c578063f2fde38b1461033c5761010b565b806370a082311461022e578063715018a61461025e5780638da5cb5b1461026857806395d89b41146102865761010b565b806323b872dd116100de57806323b872dd146101aa57806340c10f19146101c657806342842e0e146101e25780636352211e146101fe5761010b565b806301ffc9a71461011057806306fdde0314610140578063081812fc1461015e578063095ea7b31461018e575b600080fd5b61012a60048036038101906101259190611ae8565b610358565b6040516101379190611b30565b60405180910390f35b61014861043a565b6040516101559190611bdb565b60405180910390f35b61017860048036038101906101739190611c33565b6104cc565b6040516101859190611ca1565b60405180910390f35b6101a860048036038101906101a39190611ce8565b610512565b005b6101c460048036038101906101bf9190611d28565b610629565b005b6101e060048036038101906101db9190611ce8565b610689565b005b6101fc60048036038101906101f79190611d28565b61069f565b005b61021860048036038101906102139190611c33565b6106bf565b6040516102259190611ca1565b60405180910390f35b61024860048036038101906102439190611d7b565b610745565b6040516102559190611db7565b60405180910390f35b6102666107fc565b005b610270610810565b60405161027d9190611ca1565b60405180910390f35b61028e61083a565b60405161029b9190611bdb565b60405180910390f35b6102be60048036038101906102b99190611dfe565b6108cc565b005b6102da60048036038101906102d59190611f73565b6108e2565b005b6102f660048036038101906102f19190611c33565b610944565b6040516103039190611bdb565b60405180910390f35b61032660048036038101906103219190611ff6565b6109ac565b6040516103339190611b30565b60405180910390f35b61035660048036038101906103519190611d7b565b610a40565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061042357507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610433575061043282610ac3565b5b9050919050565b60606000805461044990612065565b80601f016020809104026020016040519081016040528092919081815260200182805461047590612065565b80156104c25780601f10610497576101008083540402835291602001916104c2565b820191906000526020600020905b8154815290600101906020018083116104a557829003601f168201915b5050505050905090565b60006104d782610b2d565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061051d826106bf565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361058d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058490612108565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105ac610b78565b73ffffffffffffffffffffffffffffffffffffffff1614806105db57506105da816105d5610b78565b6109ac565b5b61061a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106119061219a565b60405180910390fd5b6106248383610b80565b505050565b61063a610634610b78565b82610c39565b610679576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106709061222c565b60405180910390fd5b610684838383610cce565b505050565b610691610fc7565b61069b8282611045565b5050565b6106ba838383604051806020016040528060008152506108e2565b505050565b6000806106cb83611262565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361073c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073390612298565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ac9061232a565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610804610fc7565b61080e600061129f565b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606001805461084990612065565b80601f016020809104026020016040519081016040528092919081815260200182805461087590612065565b80156108c25780601f10610897576101008083540402835291602001916108c2565b820191906000526020600020905b8154815290600101906020018083116108a557829003601f168201915b5050505050905090565b6108de6108d7610b78565b8383611365565b5050565b6108f36108ed610b78565b83610c39565b610932576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109299061222c565b60405180910390fd5b61093e848484846114d1565b50505050565b606061094f82610b2d565b600061095961152d565b9050600081511161097957604051806020016040528060008152506109a4565b8061098384611544565b604051602001610994929190612386565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610a48610fc7565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610ab7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aae9061241c565b60405180910390fd5b610ac08161129f565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610b3681611612565b610b75576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6c90612298565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610bf3836106bf565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610c45836106bf565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610c875750610c8681856109ac565b5b80610cc557508373ffffffffffffffffffffffffffffffffffffffff16610cad846104cc565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610cee826106bf565b73ffffffffffffffffffffffffffffffffffffffff1614610d44576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3b906124ae565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610db3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610daa90612540565b60405180910390fd5b610dc08383836001611653565b8273ffffffffffffffffffffffffffffffffffffffff16610de0826106bf565b73ffffffffffffffffffffffffffffffffffffffff1614610e36576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e2d906124ae565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610fc28383836001611779565b505050565b610fcf610b78565b73ffffffffffffffffffffffffffffffffffffffff16610fed610810565b73ffffffffffffffffffffffffffffffffffffffff1614611043576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161103a906125ac565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036110b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110ab90612618565b60405180910390fd5b6110bd81611612565b156110fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110f490612684565b60405180910390fd5b61110b600083836001611653565b61111481611612565b15611154576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161114b90612684565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461125e600083836001611779565b5050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036113d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113ca906126f0565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516114c49190611b30565b60405180910390a3505050565b6114dc848484610cce565b6114e88484848461177f565b611527576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161151e90612782565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000600161155384611906565b01905060008167ffffffffffffffff81111561157257611571611e48565b5b6040519080825280601f01601f1916602001820160405280156115a45781602001600182028036833780820191505090505b509050600082602001820190505b600115611607578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816115fb576115fa6127a2565b5b049450600085036115b2575b819350505050919050565b60008073ffffffffffffffffffffffffffffffffffffffff1661163483611262565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600181111561177357600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16146116e75780600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546116df9190612800565b925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146117725780600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461176a9190612834565b925050819055505b5b50505050565b50505050565b60006117a08473ffffffffffffffffffffffffffffffffffffffff16611a59565b156118f9578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026117c9610b78565b8786866040518563ffffffff1660e01b81526004016117eb94939291906128bd565b6020604051808303816000875af192505050801561182757506040513d601f19601f82011682018060405250810190611824919061291e565b60015b6118a9573d8060008114611857576040519150601f19603f3d011682016040523d82523d6000602084013e61185c565b606091505b5060008151036118a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161189890612782565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506118fe565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611964577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000838161195a576119596127a2565b5b0492506040810190505b6d04ee2d6d415b85acef810000000083106119a1576d04ee2d6d415b85acef81000000008381611997576119966127a2565b5b0492506020810190505b662386f26fc1000083106119d057662386f26fc1000083816119c6576119c56127a2565b5b0492506010810190505b6305f5e10083106119f9576305f5e10083816119ef576119ee6127a2565b5b0492506008810190505b6127108310611a1e576127108381611a1457611a136127a2565b5b0492506004810190505b60648310611a415760648381611a3757611a366127a2565b5b0492506002810190505b600a8310611a50576001810190505b80915050919050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611ac581611a90565b8114611ad057600080fd5b50565b600081359050611ae281611abc565b92915050565b600060208284031215611afe57611afd611a86565b5b6000611b0c84828501611ad3565b91505092915050565b60008115159050919050565b611b2a81611b15565b82525050565b6000602082019050611b456000830184611b21565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611b85578082015181840152602081019050611b6a565b60008484015250505050565b6000601f19601f8301169050919050565b6000611bad82611b4b565b611bb78185611b56565b9350611bc7818560208601611b67565b611bd081611b91565b840191505092915050565b60006020820190508181036000830152611bf58184611ba2565b905092915050565b6000819050919050565b611c1081611bfd565b8114611c1b57600080fd5b50565b600081359050611c2d81611c07565b92915050565b600060208284031215611c4957611c48611a86565b5b6000611c5784828501611c1e565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611c8b82611c60565b9050919050565b611c9b81611c80565b82525050565b6000602082019050611cb66000830184611c92565b92915050565b611cc581611c80565b8114611cd057600080fd5b50565b600081359050611ce281611cbc565b92915050565b60008060408385031215611cff57611cfe611a86565b5b6000611d0d85828601611cd3565b9250506020611d1e85828601611c1e565b9150509250929050565b600080600060608486031215611d4157611d40611a86565b5b6000611d4f86828701611cd3565b9350506020611d6086828701611cd3565b9250506040611d7186828701611c1e565b9150509250925092565b600060208284031215611d9157611d90611a86565b5b6000611d9f84828501611cd3565b91505092915050565b611db181611bfd565b82525050565b6000602082019050611dcc6000830184611da8565b92915050565b611ddb81611b15565b8114611de657600080fd5b50565b600081359050611df881611dd2565b92915050565b60008060408385031215611e1557611e14611a86565b5b6000611e2385828601611cd3565b9250506020611e3485828601611de9565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611e8082611b91565b810181811067ffffffffffffffff82111715611e9f57611e9e611e48565b5b80604052505050565b6000611eb2611a7c565b9050611ebe8282611e77565b919050565b600067ffffffffffffffff821115611ede57611edd611e48565b5b611ee782611b91565b9050602081019050919050565b82818337600083830152505050565b6000611f16611f1184611ec3565b611ea8565b905082815260208101848484011115611f3257611f31611e43565b5b611f3d848285611ef4565b509392505050565b600082601f830112611f5a57611f59611e3e565b5b8135611f6a848260208601611f03565b91505092915050565b60008060008060808587031215611f8d57611f8c611a86565b5b6000611f9b87828801611cd3565b9450506020611fac87828801611cd3565b9350506040611fbd87828801611c1e565b925050606085013567ffffffffffffffff811115611fde57611fdd611a8b565b5b611fea87828801611f45565b91505092959194509250565b6000806040838503121561200d5761200c611a86565b5b600061201b85828601611cd3565b925050602061202c85828601611cd3565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061207d57607f821691505b6020821081036120905761208f612036565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006120f2602183611b56565b91506120fd82612096565b604082019050919050565b60006020820190508181036000830152612121816120e5565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b6000612184603d83611b56565b915061218f82612128565b604082019050919050565b600060208201905081810360008301526121b381612177565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b6000612216602d83611b56565b9150612221826121ba565b604082019050919050565b6000602082019050818103600083015261224581612209565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000612282601883611b56565b915061228d8261224c565b602082019050919050565b600060208201905081810360008301526122b181612275565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000612314602983611b56565b915061231f826122b8565b604082019050919050565b6000602082019050818103600083015261234381612307565b9050919050565b600081905092915050565b600061236082611b4b565b61236a818561234a565b935061237a818560208601611b67565b80840191505092915050565b60006123928285612355565b915061239e8284612355565b91508190509392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612406602683611b56565b9150612411826123aa565b604082019050919050565b60006020820190508181036000830152612435816123f9565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612498602583611b56565b91506124a38261243c565b604082019050919050565b600060208201905081810360008301526124c78161248b565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061252a602483611b56565b9150612535826124ce565b604082019050919050565b600060208201905081810360008301526125598161251d565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612596602083611b56565b91506125a182612560565b602082019050919050565b600060208201905081810360008301526125c581612589565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612602602083611b56565b915061260d826125cc565b602082019050919050565b60006020820190508181036000830152612631816125f5565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b600061266e601c83611b56565b915061267982612638565b602082019050919050565b6000602082019050818103600083015261269d81612661565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006126da601983611b56565b91506126e5826126a4565b602082019050919050565b60006020820190508181036000830152612709816126cd565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b600061276c603283611b56565b915061277782612710565b604082019050919050565b6000602082019050818103600083015261279b8161275f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061280b82611bfd565b915061281683611bfd565b925082820390508181111561282e5761282d6127d1565b5b92915050565b600061283f82611bfd565b915061284a83611bfd565b9250828201905080821115612862576128616127d1565b5b92915050565b600081519050919050565b600082825260208201905092915050565b600061288f82612868565b6128998185612873565b93506128a9818560208601611b67565b6128b281611b91565b840191505092915050565b60006080820190506128d26000830187611c92565b6128df6020830186611c92565b6128ec6040830185611da8565b81810360608301526128fe8184612884565b905095945050505050565b60008151905061291881611abc565b92915050565b60006020828403121561293457612933611a86565b5b600061294284828501612909565b9150509291505056fea26469706673582212208d158df8cebc5530ef656710ef6fdb63fdd448e7df5ba445a3189a7c916d6d8964736f6c63430008110033";

export class MockNFT__factory extends ContractFactory {
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
  ): Promise<MockNFT> {
    return super.deploy(overrides || {}) as Promise<MockNFT>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockNFT {
    return super.attach(address) as MockNFT;
  }
  connect(signer: Signer): MockNFT__factory {
    return super.connect(signer) as MockNFT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockNFTInterface {
    return new utils.Interface(_abi) as MockNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockNFT {
    return new Contract(address, _abi, signerOrProvider) as MockNFT;
  }
}
