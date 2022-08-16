import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetingApi } from '../redux/greetings/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetingApi());
  }, [dispatch]);
  const message = useSelector((state) => state.greetingsReducer);

  return (
    <div className="bg-slate-200 mt-20 flex flex-col items-center my-4 mx-12 border p-5">
      <p className="text-2xl">{ message }</p>
    </div>
  );
};

export default Greeting;
