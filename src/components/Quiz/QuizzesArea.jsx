/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useQuizDetails from '../../app/hooks/useQuizDetails';
import { CircularProgress } from '@mui/material';
import { setQuizID } from '../../app/redux/slices/quizSlice';
import { ThemeProvider } from '@emotion/react';
import getMuiDataTableTheme from '../../theme/MuiDataTable/dataTableTheme';
import MUIDataTable from 'mui-datatables';
import { dataTableOptions } from '../../theme/MuiDataTable/dataTableOptions';
import { allQuizzesColumnData } from '../common/MuiDataTable/dataTableColumnData';
import { useNavigate } from 'react-router-dom';
import CustomDialog from '../common/Dialogs/CustomDialog';
import QuizDetailsDialog from '../common/Dialogs/QuizDetailsDialog';

const QuizzesArea = () => {
  const { quizzes, quizID } = useSelector((state) => state.quiz);
  const { loading, quizzesArray } = useQuizDetails();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(null);

  useEffect(() => {
    dispatch(setQuizID(null));
  }, [dispatch]);

  const handleCellClick = (quizName) => {
    const quiz = quizzes.find(quiz => quiz.name === quizName);

    // dispatch(setQuizID(quiz.id));

    // navigate(`/quiz/${quizName}/quizzz`);
    setCurrentQuiz(quiz);
    setOpenDialog(true);
  };

const columnsWithClickHandling = allQuizzesColumnData.map((column) => ({
  ...column,
  options: {
      ...column.options,
      customBodyRender: (value, tableMeta, updateValue) => {
          if (column.name === 'Details') {
              return (
                  <div
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleCellClick(tableMeta.rowData[0])}
                  >
                      {column.options.customBodyRender ? column.options.customBodyRender(value, tableMeta, updateValue) : value}
                  </div>
              );
          }
          return column.options.customBodyRender ? column.options.customBodyRender(value, tableMeta, updateValue) : value;
      },
  },
}));

  const options = {
    ...dataTableOptions,
    tableBodyHeight: '350px',
    tableBodyMaxHeight: '350px',
  };


  return (
    <div className='w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 lg'>
      <h2 className='text-xl font-bold mt-6'>Quizzes</h2>
      {loading ? (
        <div className="flex items-center justify-center mt-6">
          <CircularProgress />
        </div>
      ) : (
        <div className='mt-6 flex gap-2 flex-wrap'>
          <ThemeProvider theme={getMuiDataTableTheme()}>
            <MUIDataTable 
              data={quizzesArray}
              columns={columnsWithClickHandling}
              options={options}
            />
          </ThemeProvider>
        </div>
      )}

      <CustomDialog
        openDialog={openDialog}
        handleCloseDialog={() => setOpenDialog(false)}
      >
        <QuizDetailsDialog 
          handleCloseDialog={() => setOpenDialog(false)}
          quizDetails={currentQuiz}
        />
      </CustomDialog>

    </div>
  );
};

export default QuizzesArea;
