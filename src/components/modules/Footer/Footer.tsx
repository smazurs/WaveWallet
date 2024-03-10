import { Box, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const links = {
  github: 'https://github.com/smazurs/wavewallet/',
  forum: 'https://forum.moralis.io/',
  moralis: 'https://moralis.io/?utm_source=wavewallethosted&utm_medium=todo&utm_campaign=wavewallet',
};

const Footer = () => {
  return (
    <Box textAlign={'center'} w="full" p={6}>
      <Text>
        ⭐️ Please star this{' '}
        <Link href={links.github} isExternal alignItems={'center'}>
          wavewallet <ExternalLinkIcon />
        </Link>
        , every star makes us very happy!
      </Text>
      <Text>
        🙋 You have questions? Ask them on the{' '}
        <Link href={links.forum} isExternal alignItems={'center'}>
          Moralis forum <ExternalLinkIcon />
        </Link>
      </Text>
      <Text>
        📖 Read more about{' '}
        <Link href={links.moralis} isExternal alignItems={'center'}>
          Moralis <ExternalLinkIcon />
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
