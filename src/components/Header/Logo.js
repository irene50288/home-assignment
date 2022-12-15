import styled from '@emotion/styled';

export default styled('h1')(({ theme }) => ({
  background: `url('/images/${
    theme.palette.mode === 'dark' ? 'logo_dark_mode' : 'logo_light_mode'
  }.svg') no-repeat left top`,
  color: 'transparent',
  width: '212px',
  height: '33px',
  marginRight: '36px'
}));
