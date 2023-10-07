import { Typography, useTheme } from '@mui/material';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography fontWeight="700" fontSize="1.9rem">
      Flix<span style={{ color: theme.palette.secondary.main }}>xit</span>
    </Typography>
  );
};

export default Logo;