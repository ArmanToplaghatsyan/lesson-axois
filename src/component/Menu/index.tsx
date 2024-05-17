import React from 'react';
import { Link } from 'react-router-dom';

export const Menu: React.FC = React.memo((): JSX.Element => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to={'/'}>Products</Link></li>
          <li><Link to={'/addProducts'}>Add Products</Link></li>
        </ul>
      </nav>
    </div>
  );
});
