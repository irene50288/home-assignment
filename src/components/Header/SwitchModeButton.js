import IconButton from '@mui/material/IconButton';
import styled from '@emotion/styled';

export default styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  '& svg': {
    transform: 'rotate(135deg)'
  }
}));
