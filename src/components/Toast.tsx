import React from 'react'
import './Toast.css'

export default function Toast({ message, type = 'success' }: { message: string; type?: 'success' | 'error' | 'info' }) {
  return (
    <div className={`toast ${type}`} role="status">
      <div className="toast-message">{message}</div>
    </div>
  )
}
