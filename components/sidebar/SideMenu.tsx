import * as React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import MuiListItemButton from '@material-ui/core/ListItemButton';
import Image from 'next/image';
import { styled } from '@material-ui/core/styles';
import { usePage } from '../../hooks/usePage';

interface Props {
  href: string;
  title: string;
  selectIcon: string;
  icon: string;
  end: boolean;
}

const ListItemButton = styled(MuiListItemButton)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: theme.spacing(10),
  height: theme.spacing(10),
}));

function SideMenu(props: Props): JSX.Element {
  const { selectedPage } = usePage();
  const { relativeUrl } = selectedPage || '/documents/document';
  const { href, title, selectIcon, icon, end } = props;
  const t = useTranslations();
  return (
    <>
      <Link href={href} passHref key={title}>
        <ListItemButton
          sx={{
            bgcolor: href === relativeUrl ? '#FFFFFF' : '#EEEEEE',
          }}
        >
          <Image
            src={href === relativeUrl ? selectIcon : icon}
            alt={title}
            width="32"
            height="32"
          />
          <ListItemText
            primary={t(title)}
            primaryTypographyProps={{
              color: href === relativeUrl ? '#0199EB' : 'rgba(0, 0, 0, 0.54)',
              fontWeight: href === relativeUrl ? 'bold' : 400,
            }}
          />
        </ListItemButton>
      </Link>
      {!end && <Divider sx={{ borderColor: '#e3e3e3', mx: 0.75 }} />}
    </>
  );
}

export default React.memo(SideMenu);
