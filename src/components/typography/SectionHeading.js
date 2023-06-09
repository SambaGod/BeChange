import { Typography } from '@mui/material';

export default function SectionHeading({ title }) {
  return (
    <Typography variant='h4' fontWeight={900}>
      {title}
    </Typography>
  );
}
