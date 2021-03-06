import React from 'react';
import { Icon } from 'evergreen-ui';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchForm = styled.form`
  position: absolute;
  top: 20px;
  left: 30px;
  display: flex;
  align-items: center;
  opacity: 0.4;
`;

const Input = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  box-shadow: none;
  width: 150px;
  font-size: 16px;
  color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
  margin-left: -25px;
  padding-left: 35px;
  height: 40px;
  border-bottom: 2px ${(props) => (props.isDarkMode ? '#dbdbdb' : ' #242424 ')} solid;
  opacity: 0;

  &:hover {
    opacity: 0.4;
  }
  &.active {
    opacity: 0.8;
  }
`;

const SearchInput = (props) => {
  const { engineOption, value, focused, onFocus, onBlur, onChange, isDarkMode } = props;
  const iconColor = isDarkMode ? 'white' : null;
  return (
    <SearchForm action={engineOption.split('?')[0]}>
      <Icon id="jizhi-search-icon" icon="search" size={16} color={iconColor} />
      <Input
        className={focused || value ? 'active' : null}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        name={engineOption.split('.')[1] === 'baidu' ? 'wd' : 'q'}
        autoComplete="off"
        isDarkMode={isDarkMode}
      />
    </SearchForm>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  focused: PropTypes.bool,
  engineOption: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  isDarkMode: PropTypes.bool,
};

export default SearchInput;
