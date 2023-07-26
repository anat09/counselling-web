import React from 'react';
import Link from 'next/link';

interface HyperRefProps {
  link: string,
  value: string,
}

export default function HyperRef({ link, value }: HyperRefProps) {
  return <Link href={ link } passHref><a className="text-primary font-bold">{ value }</a></Link>
}