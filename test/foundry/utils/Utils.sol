// SPDX-License-Identifier: Unlicense
pragma solidity 0.8.17;

import { Test } from 'forge-std/Test.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract MockERC20 is ERC20 {
  constructor(string memory name, string memory symbol) ERC20(name, symbol) {}

  function mint(address account, uint256 amount) external {
    _mint(account, amount);
  }
}

contract MockUser is Test {
  bytes32 internal nextUser = keccak256(abi.encodePacked('user address'));

  function getNextUserAddress() external returns (address payable) {
    address payable user = payable(address(uint160(uint256(nextUser))));
    nextUser = keccak256(abi.encodePacked(nextUser));
    return user;
  }

  // create users with 100 ETH balance each
  function createUsers(
    uint256 userNum
  ) external returns (address payable[] memory) {
    address payable[] memory users = new address payable[](userNum);
    for (uint256 i = 0; i < userNum; i++) {
      address payable user = this.getNextUserAddress();
      vm.deal(user, 100 ether);
      users[i] = user;
    }

    return users;
  }
}
