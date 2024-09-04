import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/CategoriesSlice';

function SideBar(props) {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);


  useEffect(() => {
      dispatch(getCategories());
    }, [dispatch],
  );
  return (
    <div>
      SideBar
    </div>
  );
}

export default SideBar;