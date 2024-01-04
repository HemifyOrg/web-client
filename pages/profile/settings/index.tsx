import React from 'react'
import Settings from './settings';
import { SettingsProvider } from '@/pages/context/SettingsContext';

const SettingsPage = () => {
  return (
      <SettingsProvider >
      <Settings />
      </SettingsProvider>
  )
}

export default SettingsPage
