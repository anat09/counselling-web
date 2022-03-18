export default function Container({ children }) {
  return (
    <div className="bg-white">
      <div className="site-container site-width">
        {children}
      </div>
    </div>
  )
}
