# WaveWallet

WaveWallet is an Ethereum dapp pioneering project aimed at redefining the interaction between crypto wallets by leveraging Radio Frequency (RF) signals for communication. This initiative brings to the forefront a seamless integration between hardware and blockchain technology, enabling direct wallet-to-wallet communications and transactions without the need for internet connectivity.

![eth-boilerplate](https://user-images.githubusercontent.com/78314301/186810447-fa66cd80-5bbb-4e41-b29f-862c8cc67d43.gif)

## Main Features

- **Wallet-to-Wallet Communication**: Securely send and receive cryptocurrencies and NFTs between wallets over RF signals.
- **Arduino RF Communication**: Leverage Arduino hardware to establish a decentralized network of crypto wallets communicating via RF.
- **Blockchain Integration**: Utilize Ethereum blockchain technologies for transaction integrity and verification without direct internet access.
- **Secure Handshakes and Transactions**: Implement cryptographic methods to ensure secure handshakes between devices, followed by verified transactions.

**Clone or fork `WaveWallet`:**

```sh
git clone https://github.com/smazurs/WaveWallet.git
```

**Install all dependencies:**

```bash
npm install
```

 **Run WaveWallet:**

```bash
npm run dev
```

This will initiate the WaveWallet application, enabling RF communication and blockchain interactions through the user interface.

## Technology Stack

- **Frontend**: Next.js for the user interface, facilitating wallet management and transaction initiation.
- **Backend**: Moralis Web3 API for interacting with the Ethereum blockchain, and custom Arduino scripts for RF communication.
- **Hardware**: Arduino modules equipped with RF transmitters and receivers for offline communication.

# 🧭 Table of contents

- [🏗 Ethereum Components](#-ethereum-components)
  - [`<NFTBalances />`](#nftbalances-)
  - [`<ERC20Balances />`](#erc20balances-)
  - [`<ERC20Transfers />`](#erc20transfers-)
  - [`<NFTTransfers />`](#nfttransfers-)
  - [`<Transactions />`](#transactions-)

# 🏗 Ethereum Components

### `<NFTBalances />`

![image](https://user-images.githubusercontent.com/78314301/186813114-2b2265a5-5177-4ab8-9076-588107d450f1.png)

location: `src/component/templates/balances/NFT/NFTBalances.tsx`

🎨 `<NFTBalances />` : displays the user's balances. Uses Moralis Evm API.

### `<ERC20Balances />`

![image](https://user-images.githubusercontent.com/78314301/186813448-a0b63106-bcba-46d2-be80-3a7d962e2302.png)

location: `src/component/templates/balances/ERC20/ERC20Balances.tsx`

💰 `<ERC20Balances />` : displays the user's ERC20 balances.

### `<ERC20Transfers />`

![image](https://user-images.githubusercontent.com/78314301/186813957-69badb89-bf93-44e6-90e7-c35801c24d9a.png)

location: `src/component/templates/transfers/ERC20/ERC20Transfers.tsx`

💰 `<ERC20Transfers />` : displays the user's ERC20 transfers.

### `<NFTTransfers />`

![image](https://user-images.githubusercontent.com/78314301/186814187-916851d7-703d-4e30-9b28-b66b0bea90b1.png)

location: `src/component/templates/transfers/NFT/NFTTransfers.tsx`

🎨 `<NFTTransfers />` : displays the user's NFT transfers.

### `<Transactions />`

![image](https://user-images.githubusercontent.com/78314301/186812987-74d8e534-5171-4a53-83f9-3b470bc97e63.png)

location: `src/component/templates/transactions/Transactions.tsx`

💰 `<Transactions />` : displays the user's transactions.

## License

WaveWallet is open-sourced software licensed under the MIT license.