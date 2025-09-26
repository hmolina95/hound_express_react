import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Components/Header/Header';
import TrackingForm from './Components/TrackingForm/TrackingForm';
import StatusPanel from './Components/StatusPanel/StatusPanel';
import TrackingList from './Components/TrackingList/TrackingList';
import Footer from './Components/Footer/Footer';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Themes/GlobalStyles';
import Theme from './Themes';
import { RootState } from './store/store';
import HistoryModal from './Components/HistoryModal/HistoryModal';
import { setSelectedHistory } from './store/guidesSlice';

const App: React.FC = () => {
  const selectedHistory = useSelector((state: RootState) => state.guides.selectedHistory);
  const dispatch = useDispatch();

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Header />
        <TrackingForm />
        <StatusPanel />
        <TrackingList />
        {selectedHistory && (
          <HistoryModal guide={selectedHistory} onClose={() => dispatch(setSelectedHistory(null))} />
        )}
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;