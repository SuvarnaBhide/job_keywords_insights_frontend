/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addDataAction
} from '../services/dataService';

const useDataStorageOperations = () => {
  const dispatch = useDispatch();

  // const {
  //   allData
  // } = useSelector((state) => state.dataStorage);

  const [loading, setLoading] = useState(false);

  const addData = (payload) => {
    const SUCCESS_MESSAGE = { ok: true, message: 'Data added successfully.' };
    const ERROR_MESSAGE = { ok: false, message: 'Failed to add the data.' };

    return dispatch(addDataAction(payload))
      .unwrap()
      .then((res) => {
        if (res.success) return SUCCESS_MESSAGE;
        else return ERROR_MESSAGE;
      })
      .catch((err) => {
        console.log(err);

        return ERROR_MESSAGE;
      });
  };

  return {
    loading,
    setLoading,
    addData
  };
};

export default useDataStorageOperations;
