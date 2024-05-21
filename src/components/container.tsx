interface ContainerProps {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="bg-w#FCFBF4">
      <div className="site-container site-width">
        {children}
      </div>
    </div>
  )
}
