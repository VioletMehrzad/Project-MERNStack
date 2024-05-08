import { type FC } from 'react';
import { InputBase, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.neutral.tropicalBlue}`,
  margin: theme.spacing(0, 2)
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.neutral.greyBlue,
  minWidth: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(2, 1, 2, 7),
    transition: theme.transitions.create('width'),
    fontSize: '0.75rem',
    fontWeight: '500'
  }
}));

const SearchBar: FC = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search categories or products ..."
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
};

export default SearchBar;
