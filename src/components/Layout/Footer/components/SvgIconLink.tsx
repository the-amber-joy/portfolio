import { Center, Link, useColorMode } from '@chakra-ui/react';

import clsx from 'clsx';
import styles from '../Footer.module.css';

type SvgIconLinkProps = {
  url: string;
  title: string;
  children: React.ReactNode;
  filled?: boolean;
  strokeWidth?: number;
  viewBox?: string;
  preserveAspectRatio?: string;
};

const SvgIconLink = (props: SvgIconLinkProps) => {
  const { colorMode } = useColorMode();
  const {
    url,
    title,
    children,
    filled = false,
    strokeWidth = 2,
    viewBox = '0 0 24 24',
    preserveAspectRatio = 'xMidYMid meet',
  } = props;

  return (
    <Link
      href={url}
      target="_blank"
      className={
        colorMode === 'dark' ? styles.iconLinkDark : styles.iconLinkLight
      }
      style={{ padding: '5px 5px 0 5px' }}
      fontSize="sm"
      rel="me"
    >
      <Center>
        <i
          className={clsx(styles.icon, {
            [styles.iconDark]: colorMode === 'dark',
            [styles.iconLight]: colorMode === 'light',
          })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox}
            fill={filled ? 'currentColor' : 'none'}
            stroke={filled ? 'none' : 'currentColor'}
            strokeWidth={filled ? undefined : strokeWidth}
            strokeLinecap={filled ? undefined : 'round'}
            strokeLinejoin={filled ? undefined : 'round'}
            preserveAspectRatio={preserveAspectRatio}
            className={styles.iconSvg}
          >
            {children}
          </svg>
        </i>
      </Center>
      {title}
    </Link>
  );
};

export default SvgIconLink;
