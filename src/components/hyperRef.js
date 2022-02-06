import React from 'react';
import Link from 'next/link';

export default function HyperRef({ link, value }) {
  return <text className="text-primary font-bold"><Link href={link}>{value}</Link></text>
}