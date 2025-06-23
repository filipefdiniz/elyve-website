import React from 'react';
import Logo from '@/assets/logo-icon-green.png';
import Image from 'next/image';
export function ElyveLogo({ className }: { className?: string }) {
  return (
    <div className={`font-headline font-bold text-2xl text-primary ${className}`}>
      <Image src={Logo} alt='logo'/>
    </div>
  );
}
