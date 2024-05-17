import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectProduct } from '../../features/product/productSlice';
import { useDispatch } from 'react-redux';
import {
  deleteProductById,
  getCategories,
  getProducts,
  getProductsByCategories,
} from '../../features/product/productAPI';
import { Link } from 'react-router-dom';

export const Prodcuts: React.FC = React.memo((): JSX.Element => {
  const { products, categories } = useAppSelector(selectProduct);
  const dispatch = useAppDispatch();
  console.log(products, categories);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);

  return (
    <div>
      <select
        onChange={(e) => dispatch(getProductsByCategories(e.target.value))}
      >
        <option value="" hidden>
          Choose Categorie
        </option>
        {categories.map((elm, i) => {
          return (
            <option key={i} value={elm}>
              {elm}
            </option>
          );
        })}
      </select>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>description</th>
            <th>category</th>
            <th>see</th>
            <th>&times;</th>
          </tr>
        </thead>
        <tbody>
          {products.map((elm) => {
            return (
              <tr key={elm.id}>
                <td>{elm.title}</td>
                <td>{elm.description}</td>
                <td>{elm.category}</td>
                <td>

                <Link to={'/detailsProduct/' + elm.id}>see</Link>
                </td>
                <td>

                <button
                  onClick={()=>dispatch(deleteProductById(elm.id))
                    .unwrap()
                    .then((res) => {
                      console.log(res);
                    })
                    .catch(console.warn)}
                >
                  &times;
                </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
});
