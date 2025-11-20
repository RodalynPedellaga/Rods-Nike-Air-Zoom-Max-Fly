import React, { Component, ErrorInfo, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

type State = {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Log to console — replace with external logging if desired
    // eslint-disable-next-line no-console
    console.error('Uncaught error:', error, info)
  }

  handleReload = () => {
    // simple recovery: reload the page
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', color: 'var(--muted)', padding: 24 }}>
          <div style={{ maxWidth: 720, textAlign: 'center', background: 'var(--panel)', padding: 28, borderRadius: 12, boxShadow: '0 12px 40px rgba(0,0,0,0.6)' }}>
            <h2 style={{ color: 'var(--accent)', marginTop: 0 }}>Something went wrong</h2>
            <p style={{ color: 'var(--muted)' }}>An unexpected error occurred. You can reload the page to try again.</p>
            <div style={{ marginTop: 18 }}>
              <button onClick={this.handleReload} style={{ background: 'var(--accent)', color: '#071018', padding: '10px 16px', borderRadius: 8, border: 'none', cursor: 'pointer', fontWeight: 700 }}>Reload</button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
