import React, { useState } from 'react'
import styled from 'styled-components'
import TransitionsModal from './TransitionsModal'

import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';


export default function AnnouncementBar({ title, linkText, modalBlock }) {
  const [open, setOpen] = useState(true)

  return (
    <AnnouncementBarStyles style={{display: open ? `flex` : `none`}}>
      <p style={{ marginBottom: `-6px` }}>{title}</p>
      {linkText && <TransitionsModal 
        modalButtonText={linkText} 
        modalTitle={title} 
        modalBlock={modalBlock} />}

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
  align-items: center;
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
