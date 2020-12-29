import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba f7 b--green bg-lightest-blue'
        type='search'
        placeholder='Digite o nome de um Robô'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;