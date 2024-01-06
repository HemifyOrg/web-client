import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SettingsContextData {
  feedBackModel: boolean;
  setFeedBackModel: React.Dispatch<React.SetStateAction<boolean>>;
  shareHemify: boolean;
  setShareHemify: React.Dispatch<React.SetStateAction<boolean>>;
  followHemify: boolean;
  setFollowHemify: React.Dispatch<React.SetStateAction<boolean>>;
  xLink: boolean;
  setXlink: React.Dispatch<React.SetStateAction<boolean>>;
  telegramModal: boolean;
  setTelegramModal: React.Dispatch<React.SetStateAction<boolean>>;
  
}

const SettingsContext = createContext<SettingsContextData | undefined>(undefined);

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
  //Modals
  const [feedBackModel, setFeedBackModel] = useState(false);
  const [shareHemify, setShareHemify] = useState(false);
  const [followHemify, setFollowHemify] = useState(false);
  //edit profile modal link
  const [xLink, setXlink] = useState(false);
  const [telegramModal, setTelegramModal] = useState(false);

  const settingsContextData: SettingsContextData = {
    feedBackModel,
    setFeedBackModel,
    shareHemify,
    setShareHemify,
    followHemify,
    setFollowHemify,
    xLink,
    setXlink,
    telegramModal, 
    setTelegramModal
  };

  return <SettingsContext.Provider value={settingsContextData}>{children}</SettingsContext.Provider>;
};

export const useSettingsContext = (): SettingsContextData => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettingsContext must be used within a SettingsProvider');
  }
  return context;
};
export default SettingsContext;