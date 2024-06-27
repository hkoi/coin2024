import type { Hex } from 'viem';

export const Access = {
  abi: JSON.parse(`[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "addAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "team",
				"type": "string"
			}
		],
		"name": "addUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "addrs",
				"type": "address[]"
			},
			{
				"internalType": "string[]",
				"name": "names",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "teams",
				"type": "string[]"
			}
		],
		"name": "addUsers",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAdmins",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUserDetails",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUsers",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "isAdmin",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "isAdminOrUser",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "isUser",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "removeAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "removeUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]`),
  bytecode: '6080604052348015600e575f80fd5b5060175f33601c565b506080565b5f602e836001600160a01b0384166037565b90505b92915050565b5f818152600183016020526040812054607a57508154600181810184555f8481526020808220909301849055845484825282860190935260409020919091556031565b505f6031565b610de28061008d5f395ff3fe608060405234801561000f575f80fd5b50600436106100a5575f3560e01c8063704802751161006e578063704802751461011a578063942886be1461012d5780639857518814610144578063c4204f4e14610157578063d7554a681461016a578063f730a3d21461017d575f80fd5b8062ce8e3e146100a95780631785f53c146100c757806324d7806c146100dc57806331ae450b146100ff5780634209fff114610107575b5f80fd5b6100b1610190565b6040516100be9190610929565b60405180910390f35b6100da6100d5366004610956565b6101a1565b005b6100ef6100ea366004610956565b6101c8565b60405190151581526020016100be565b6100b16101d9565b6100ef610115366004610956565b6101e4565b6100da610128366004610956565b6101f0565b61013561020c565b6040516100be939291906109e9565b6100da610152366004610956565b610479565b6100ef610165366004610956565b6104de565b6100da610178366004610a70565b6104fa565b6100da61018b366004610b31565b61056c565b606061019c600261067f565b905090565b6101ab5f33610692565b6101b3575f80fd5b6101bd5f826106b2565b6101c5575f80fd5b50565b5f6101d38183610692565b92915050565b606061019c5f61067f565b5f6101d3600283610692565b6101fa5f33610692565b610202575f80fd5b6101bd5f826106c6565b60608060605f61021c60026106da565b90505f8167ffffffffffffffff81111561023857610238610bd0565b60405190808252806020026020018201604052801561026b57816020015b60608152602001906001900390816102565790505b5090505f8267ffffffffffffffff81111561028857610288610bd0565b6040519080825280602002602001820160405280156102bb57816020015b60608152602001906001900390816102a65790505b5090505f5b83811015610463575f6102d46002836106e3565b6001600160a01b0381165f9081526004602052604090208054919250906102fa90610be4565b80601f016020809104026020016040519081016040528092919081815260200182805461032690610be4565b80156103715780601f1061034857610100808354040283529160200191610371565b820191905f5260205f20905b81548152906001019060200180831161035457829003601f168201915b505050505084838151811061038857610388610c1c565b602002602001018190525060055f826001600160a01b03166001600160a01b031681526020019081526020015f2080546103c190610be4565b80601f01602080910402602001604051908101604052809291908181526020018280546103ed90610be4565b80156104385780601f1061040f57610100808354040283529160200191610438565b820191905f5260205f20905b81548152906001019060200180831161041b57829003601f168201915b505050505083838151811061044f5761044f610c1c565b6020908102919091010152506001016102c0565b5061046e600261067f565b969195509350915050565b6104835f33610692565b61048b575f80fd5b6104966002826106b2565b61049e575f80fd5b6001600160a01b0381165f9081526004602052604081206104be9161089c565b6001600160a01b0381165f9081526005602052604081206101c59161089c565b5f6104e98183610692565b806101d357506101d3600283610692565b6105045f33610692565b61050c575f80fd5b6105176002866106c6565b61051f575f80fd5b6001600160a01b0385165f908152600460205260409020610541848683610c7c565b506001600160a01b0385165f908152600560205260409020610564828483610c7c565b505050505050565b6105765f33610692565b61057e575f80fd5b84838114801561058d57508082145b610595575f80fd5b5f5b81811015610675575f8888838181106105b2576105b2610c1c565b90506020020160208101906105c79190610956565b90506105d46002826106c6565b6105dc575f80fd5b8686838181106105ee576105ee610c1c565b90506020028101906106009190610d36565b6001600160a01b0383165f90815260046020526040902091610623919083610c7c565b5084848381811061063657610636610c1c565b90506020028101906106489190610d36565b6001600160a01b0383165f9081526005602052604090209161066b919083610c7c565b5050600101610597565b5050505050505050565b60605f61068b836106ee565b9392505050565b6001600160a01b03165f9081526001919091016020526040902054151590565b5f61068b836001600160a01b038416610747565b5f61068b836001600160a01b03841661082a565b5f6101d3825490565b5f61068b8383610876565b6060815f0180548060200260200160405190810160405280929190818152602001828054801561073b57602002820191905f5260205f20905b815481526020019060010190808311610727575b50505050509050919050565b5f8181526001830160205260408120548015610821575f610769600183610d79565b85549091505f9061077c90600190610d79565b90508082146107db575f865f01828154811061079a5761079a610c1c565b905f5260205f200154905080875f0184815481106107ba576107ba610c1c565b5f918252602080832090910192909255918252600188019052604090208390555b85548690806107ec576107ec610d98565b600190038181905f5260205f20015f90559055856001015f8681526020019081526020015f205f9055600193505050506101d3565b5f9150506101d3565b5f81815260018301602052604081205461086f57508154600181810184555f8481526020808220909301849055845484825282860190935260409020919091556101d3565b505f6101d3565b5f825f01828154811061088b5761088b610c1c565b905f5260205f200154905092915050565b5080546108a890610be4565b5f825580601f106108b7575050565b601f0160209004905f5260205f20908101906101c591905b808211156108e2575f81556001016108cf565b5090565b5f8151808452602084019350602083015f5b8281101561091f5781516001600160a01b03168652602095860195909101906001016108f8565b5093949350505050565b602081525f61068b60208301846108e6565b80356001600160a01b0381168114610951575f80fd5b919050565b5f60208284031215610966575f80fd5b61068b8261093b565b5f82825180855260208501945060208160051b830101602085015f5b838110156109dd57601f19858403018852815180518085528060208301602087015e5f602082870101526020601f19601f8301168601019450505060208201915060208801975060018101905061098b565b50909695505050505050565b606081525f6109fb60608301866108e6565b8281036020840152610a0d818661096f565b90508281036040840152610a21818561096f565b9695505050505050565b5f8083601f840112610a3b575f80fd5b50813567ffffffffffffffff811115610a52575f80fd5b602083019150836020828501011115610a69575f80fd5b9250929050565b5f805f805f60608688031215610a84575f80fd5b610a8d8661093b565b9450602086013567ffffffffffffffff811115610aa8575f80fd5b610ab488828901610a2b565b909550935050604086013567ffffffffffffffff811115610ad3575f80fd5b610adf88828901610a2b565b969995985093965092949392505050565b5f8083601f840112610b00575f80fd5b50813567ffffffffffffffff811115610b17575f80fd5b6020830191508360208260051b8501011115610a69575f80fd5b5f805f805f8060608789031215610b46575f80fd5b863567ffffffffffffffff811115610b5c575f80fd5b610b6889828a01610af0565b909750955050602087013567ffffffffffffffff811115610b87575f80fd5b610b9389828a01610af0565b909550935050604087013567ffffffffffffffff811115610bb2575f80fd5b610bbe89828a01610af0565b979a9699509497509295939492505050565b634e487b7160e01b5f52604160045260245ffd5b600181811c90821680610bf857607f821691505b602082108103610c1657634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52603260045260245ffd5b601f821115610c7757805f5260205f20601f840160051c81016020851015610c555750805b601f840160051c820191505b81811015610c74575f8155600101610c61565b50505b505050565b67ffffffffffffffff831115610c9457610c94610bd0565b610ca883610ca28354610be4565b83610c30565b5f601f841160018114610cd9575f8515610cc25750838201355b5f19600387901b1c1916600186901b178355610c74565b5f83815260208120601f198716915b82811015610d085786850135825560209485019460019092019101610ce8565b5086821015610d24575f1960f88860031b161c19848701351681555b505060018560011b0183555050505050565b5f808335601e19843603018112610d4b575f80fd5b83018035915067ffffffffffffffff821115610d65575f80fd5b602001915036819003821315610a69575f80fd5b818103818111156101d357634e487b7160e01b5f52601160045260245ffd5b634e487b7160e01b5f52603160045260245ffdfea2646970667358221220feb919a155d32d0f12fc8e3790745fdf6fb699ce8fdb6350f889b8790c8cff9564736f6c634300081a0033' as Hex
};