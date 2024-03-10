import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const WaveLogo = () => {
    const { colorMode } = useColorMode();

    return (
      <Image
        src={colorMode === 'dark' ? '/Wavewallet-DarkBG.svg' : '/Wavewallet-LightBG.svg'}
        height={45}
        width={150}
        alt="wavewallet"
      />
    );
  };

  export default WaveLogo;