import { KeyboardEvent, useState } from 'react';

import { BsSearch } from 'react-icons/bs';
import { SearchProps } from '../../types/search';

import classes from './Search.module.css';

const Search = ({ loadUser }: SearchProps) => {
  const [username, setUsername] = useState('');

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      loadUser(username);
    }
  };

  return (
    <div className={classes.search}>
      <h2>Busque por um usuário:</h2>
      <p>Conheça os melhores repositórios</p>
      <div className={classes.search_container}>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(username)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
