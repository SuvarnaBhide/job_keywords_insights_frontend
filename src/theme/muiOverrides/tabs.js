export default function Tab(theme) {
    return {
      MuiTabs: {
        styleOverrides: {
          '& .MuiTabs-indicator': {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent'
          },
          '& .MuiTabs-indicatorSpan': {
            width: '100%',
            backgroundColor: theme.palette.primary.dark
          }
        }
      },
      MuiTab: {
        styleOverrides: {
          root: {
            '&.Mui-selected': {
              color: theme.palette.primary.dark
            },
            height: '24px',
            fontWeight: '500',
            fontSize: '16px',
            minHeight: '42px',
            marginRight: '',
            color: theme.palette.text.inactive,
            lineHeight: '24px',
            letterSpacing: '0.4px',
            textTransform: 'uppercase',
            padding: '6px 14px',
            '&.Mui-focusVisible': {
              backgroundColor: theme.palette.primary.dark
            },
            [theme.breakpoints.up('xl')]: {
              padding: '9px 16px'
            }
          }
        }
      }
    };
  }
  