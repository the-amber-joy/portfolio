import { Box, Center, useColorMode, useTheme } from '@chakra-ui/react';
import clsx from 'clsx';

import BlueskyLink from './components/BlueskyLink';
import EmailLink from './components/EmailLink';
import GithubLink from './components/GithubLink';
import LinkedInLink from './components/LinkedInLink';
import MastodonLink from './components/MastodonLink';
import RavelryLink from './components/RavelryLink';
import ResumeLink from './components/ResumeLink';
import styles from './Footer.module.css';

const Footer = () => {
  const { colorMode } = useColorMode();
  const { colors } = useTheme();

  return (
    <Box
      position="fixed"
      bottom="0px"
      w="100%"
      bgColor={
        colorMode === 'dark'
          ? colors.brand.ajBlueLvls['100']
          : colors.brand.ajOrangeLvls['900']
      }
      px={4}
      className={clsx(styles.footerContainer, {
        [styles.footerDark]: colorMode === 'dark',
        [styles.footerLight]: colorMode === 'light',
      })}
    >
      <Center
        className="footer-contents"
        justifyContent={{ base: 'center', md: 'space-evenly' }}
        flexWrap={{ base: 'wrap', md: 'nowrap' }}
        columnGap={{ base: 3, md: 0 }}
        rowGap={{ base: 1, md: 0 }}
        alignItems="flex-end"
        maxW="1280px"
        margin="auto"
        my={1}
      >
        <RavelryLink />
        <BlueskyLink />
        <MastodonLink />
        <GithubLink />
        <LinkedInLink />
        <ResumeLink />
        <EmailLink />
      </Center>
    </Box>
  );
};

export default Footer;
