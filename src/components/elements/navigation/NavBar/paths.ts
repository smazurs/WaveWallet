import { ISubNav } from '../SubNav/SubNav';

const NAV_LINKS: ISubNav[] = [
  { label: "Home", href: "/" },
  {
    label: "Transactions",
    href: "/transactions",
  },
  {
    label: "Send/Receive",
    href: "/send-receive",
    children: [
      {
        label: "ERC20",
        subLabel: "Transfer ERC20 tokens between addresses",
        href: "/send-receive/erc20",
        logo: "token",
      },
      {
        label: "NFT",
        subLabel: "Transfer ERC721 and ERC1155 assets between addresses",
        href: "/send-receive/nft",
        logo: "lazyNft",
      },
    ],
  },
  {
    label: "Transfers",
    href: "/transfers",
    children: [
      {
        label: "ERC20",
        subLabel: "Get your ERC20 transfers",
        href: "/transfers/erc20",
        logo: "token",
      },
      {
        label: "NFT",
        subLabel: "Get your ERC721 an ERC1155 transfers",
        href: "/transfers/nft",
        logo: "lazyNft",
      },
    ],
  },
  {
    label: "Balances",
    href: "/balances",
    children: [
      {
        label: "ERC20",
        subLabel: "Get your ERC20 balances",
        href: "/balances/erc20",
        logo: "token",
      },
      {
        label: "NFT",
        subLabel: "Get your ERC721 an ERC1155 balances",
        href: "/balances/nft",
        logo: "pack",
      },
    ],
  },
];

export default NAV_LINKS;
