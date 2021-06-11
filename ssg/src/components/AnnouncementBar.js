import React, { useState } from 'react'
import styled from 'styled-components'
import TransitionsModal from './TransitionsModal'

import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';


export default function AnnouncementBar({ announcement }) {
  const [open, setOpen] = useState(true)

  return (
    <AnnouncementBarStyles style={ { display: open ? `flex` : `none`, background: announcement.backgroundColor } }>
      <p className="mr-2">{announcement.announcementTitle}</p>
      <TransitionsModal 
        modalButtonText={announcement.announcementLinkText} 
        modalTitle={announcement.announcementTitle} 
        modalContentHTML={announcement.announcementPopup } />

      <IconButton
        edge="start"
        aria-label="close"
        onClick={() => setOpen(false)}
      >
        <CloseIcon fontSize='small'  />
      </IconButton>
    </AnnouncementBarStyles>
  )
}

const AnnouncementBarStyles = styled.div`
  background: var(--primary-light);
  position: relative;
  text-align: center;
  padding: 12px;
  justify-content: center;

  button[aria-label="close"] {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

`
