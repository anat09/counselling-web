import React from 'react';
import Link from 'next/link';

export default function HyperRef({ link, value }) {
  return <Link href={ link }><a className="text-primary font-bold">{ value }</a></Link>
}