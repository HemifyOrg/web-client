import React from 'react'
import EditProfileDetails from './EditProfileDetails'
import { SettingsProvider } from '@/pages/context/SettingsContext';

const index = () => {
  return (
    <div >
        <SettingsProvider >
            <EditProfileDetails />
        </SettingsProvider>
        
    </div>
  )
}

export default index
