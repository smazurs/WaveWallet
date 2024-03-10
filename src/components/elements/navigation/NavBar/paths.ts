import { ISubNav } from '../SubNav/SubNav';

const NAV_LINKS: ISubNav[] = [
  { label: "Home", href: "/" },
  {
    label: "Transactions",
    href: "/transactions",
  },
  {
    label: "Transfers",
    href: "/transfers",
    children: [
      {
        label: "ETH",
        subLabel: "Transfer ETH between addresses",
        href: "/transfers/ETH",
        logo: "token",
      },
      {
        label: "NFT",
        subLabel: "Transfer ERC721 and ERC1155 assets between addresses",
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
        label: "ETH",
        subLabel: "Get your ETH balances",
        href: "/balances/ETH",
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
