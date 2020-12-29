function formatKeys(keyString) {
  keyString.toString().replace(/\s/gi, '-').toLowerCase()
}

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export { formatKeys, ErrorFallback }
