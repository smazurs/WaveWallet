import { Default } from 'components/layouts/Default';
import { ETHBalances } from 'components/templates/balances/ETH';

const ETH = () => {
  return (
    <Default pageName="ETH Balances">
      <ETHBalances />
    </Default>
  );
};

export default ETH;
