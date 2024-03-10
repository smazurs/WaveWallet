import { Default } from 'components/layouts/Default';
import { ETHTransfers } from 'components/templates/transfers/ETH';

const ERC20 = () => {
  return (
    <Default pageName="ETH Transfers">
      <ETHTransfers />
    </Default>
  );
};

export default ERC20;
