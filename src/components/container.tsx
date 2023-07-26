interface ContainerProps {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="bg-white">
      <div className="site-container site-width">
        {children}
      </div>
    </div>
  )
}
