import React, { createContext, useCallback, useContext, useState } from 'react'
import Toast from '../components/Toast'

type NotifyType = 'success' | 'error' | 'info'

type Notification = {
  id: number
  message: string
  type: NotifyType
}

type ContextShape = {
  notify: (message: string, type?: NotifyType) => void
}

const NotificationContext = createContext<ContextShape>({ notify: () => {} })

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Notification[]>([])

  const notify = useCallback((message: string, type: NotifyType = 'success') => {
    const id = Date.now() + Math.floor(Math.random() * 10000)
    setToasts((t) => [...t, { id, message, type }])
    // auto remove after 3.5s
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3500)
  }, [])

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      <div className="toast-portal" aria-live="polite">
        {toasts.map((t) => (
          <Toast key={t.id} message={t.message} type={t.type} />
        ))}
      </div>
    </NotificationContext.Provider>
  )
}

export const useNotification = () => useContext(NotificationContext)

export default NotificationContext
