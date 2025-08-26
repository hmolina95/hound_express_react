import React, { useState } from 'react';
import Header from './Components/Header/Header';
import TrackingForm from './Components/TrackingForm/TrackingForm';
import StatusPanel from './Components/StatusPanel/StatusPanel';
import TrackingList from './Components/TrackingList/TrackingList';
import Footer from './Components/Footer/Footer';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Themes/GlobalStyles';
import Theme from './Themes';
import { Guide, GuideStatus } from "../src/Interfaces/types";
import HistoryModal from './Components/HistoryModal/HistoryModal';

const App: React.FC = () => {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [selectedHistory, setSelectedHistory] = useState<Guide | null>(null);

  const addGuide = (newGuide: Guide) => {
    setGuides(prev => [...prev, newGuide]);
  };

  const updateGuideStatus = (index: number, newStatus: GuideStatus) => {
    setGuides(prev => {
      const updated = [...prev];
      const guide = updated[index];
      if (guide.status !== newStatus) {
        guide.status = newStatus;
        guide.history.push({
          status: newStatus,
          timestamp: new Date().toLocaleString(),
        });
      }
      return updated;
    });
  };

  const updateAllStatuses = (statuses: GuideStatus[]) => {
    setGuides(prev =>
      prev.map((guide, i) => {
        if (guide.status !== statuses[i]) {
          return {
            ...guide,
            status: statuses[i],
            history: [
              ...guide.history,
              { status: statuses[i], timestamp: new Date().toLocaleString() },
            ],
          };
        }
        return guide;
      })
    );
  };

  const getStatusCounts = () => ({
    totalActive: guides.filter(g => g.status !== "delivered").length,
    inTransit: guides.filter(g => g.status === "in-transit").length,
    delivered: guides.filter(g => g.status === "delivered").length,
  });

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Header />
        <TrackingForm guides={guides} onAddGuide={addGuide} />
        <StatusPanel counts={getStatusCounts()} />
        <TrackingList 
          guides={guides}
          onUpdateStatus={updateGuideStatus}
          onUpdateAll={updateAllStatuses}
          onShowHistory={setSelectedHistory}
        />
        {selectedHistory && (
          <HistoryModal guide={selectedHistory} onClose={() => setSelectedHistory(null)} />
        )}
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
