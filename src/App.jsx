import React, { useState } from 'react';
import { Splash } from './components/onboarding/Splash';
import { ChatScreen } from './components/chat/ChatScreen';
import { DailyRecap } from './components/daily/DailyRecap';
import { CalendarView } from './components/calendar/CalendarView';
import { PatternsView } from './components/analytics/PatternsView';
import { ProfileScreen } from './components/profile/ProfileScreen';
import { BottomNav } from './components/shared/BottomNav';

function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');

  const renderScreen = () => {
    switch(currentScreen) {
      case 'splash':
        return <Splash onStart={() => setCurrentScreen('chat')} />;
      case 'chat':
        return <ChatScreen />;
      case 'daily':
        return <DailyRecap onCalendarClick={() => setCurrentScreen('calendar')} />;
      case 'calendar':
        return <CalendarView />;
      case 'patterns':
        return <PatternsView />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <Splash onStart={() => setCurrentScreen('chat')} />;
    }
  };

  return (
    <div className="device-wrapper">
      {renderScreen()}
      {currentScreen !== 'splash' && (
        <BottomNav 
          activeTab={currentScreen} 
          onChangeTab={setCurrentScreen} 
        />
      )}
    </div>
  );
}

export default App;
