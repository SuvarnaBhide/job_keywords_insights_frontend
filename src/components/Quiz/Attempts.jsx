/* eslint-disable no-unused-vars */
import React , { useEffect, useState } from 'react';
import '../../styles/index.css';
import '../../styles/QuizType.css';
import useQuizDetails from '../../app/hooks/useQuizDetails';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { setHasFetchedQuestions } from '../../app/redux/slices/quizSlice';
import MUIDataTable from 'mui-datatables';
import { dataTableOptions } from '../../theme/MuiDataTable/dataTableOptions';
import getMuiDataTableTheme from '../../theme/MuiDataTable/dataTableTheme';
import { allAttemptsColumnData } from '../common/MuiDataTable/dataTableColumnData';
import { ThemeProvider } from '@emotion/react';
import CustomDialog from '../common/Dialogs/CustomDialog';
import AttemptDetailsDialog from '../common/Dialogs/AttemptDetailsDialog';

const Attempts = () => {
  const { attempts, quizID, hasFetchedAttempts } = useSelector((state) => state.quiz);
  const { getAttempts, loading, setAttemptsArray, attemptsArray } = useQuizDetails();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const [currentAttempt, setCurrentAttempt] = useState(null);
  const [attemptIndex, setAttemptIndex] = useState(null);

  useEffect(() => {
    dispatch(setHasFetchedQuestions(false));

    if (!hasFetchedAttempts) {
      getAttempts();
    } else {
      const data = attempts.map(attempt => [attempt.attemptDate, attempt.quizName, attempt.quizScore, 'View Details']); 
      setAttemptsArray(data);
    }
  }, [hasFetchedAttempts, getAttempts, dispatch, attempts, setAttemptsArray]);

  const handleCellClick = (attemptIndex) => {
    setAttemptIndex(attemptIndex);
    setCurrentAttempt(attempts[attemptIndex]);
    setOpenDialog(true);
  };

  const columnsWithClickHandling = allAttemptsColumnData.map((column) => ({
    ...column,
    options: {
        ...column.options,
        customBodyRender: (value, tableMeta, updateValue) => {
            if (column.name === 'Details') {
                return (
                    <div
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleCellClick(tableMeta.rowIndex)}
                    >
                        {column.options.customBodyRender ? column.options.customBodyRender(value, tableMeta, updateValue) : value}
                    </div>
                );
            }
            return column.options?.customBodyRender ? column.options.customBodyRender(value, tableMeta, updateValue) : value;
        }
    }
  }));

  const options = {
    ...dataTableOptions,
    tableBodyHeight: '350px',
    tableBodyMaxHeight: '350px',
  };

  return (
    <section>
      <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 lg">
        <div className="flex flex-col gap-7 lg:grid-cols-2 lg:gap-x-16">
          <h1 className="text-xl font-bold mt-6">Previous Attempts</h1>

          {
            loading ? (
              <div className="flex justify-center items-center">
                <CircularProgress />
              </div>
            ) : (
              <div className="flex flex-row flex-wrap gap-4">
                <ThemeProvider theme={getMuiDataTableTheme()}>
                  <MUIDataTable 
                    data={attemptsArray}
                    columns={columnsWithClickHandling}
                    options={options}
                  />

                </ThemeProvider>
              </div>
            ) 
          }

          <CustomDialog
            openDialog={openDialog}
            handleCloseDialog={() => setOpenDialog(false)}
            padding="36px 40px"
            crossIconBtnStyle={{ top: '8px', right: '8px' }}
            crossIconStyle={{ width: '10px', height: '10px' }}
          >
            <AttemptDetailsDialog
              handleCloseDialog={() => setOpenDialog(false)}
              attemptDetails={currentAttempt}
              attemptIndex={attemptIndex}
            />
          </CustomDialog>
        </div>
      </div>
    </section>
  );
};

export default Attempts;
