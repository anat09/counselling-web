interface BulletPointProps {
  content: JSX.Element
}

const BulletPoint = ({ content }: BulletPointProps) => {
  return <>&#8226;&#160;&#160;{ content }</>
}
export default BulletPoint;