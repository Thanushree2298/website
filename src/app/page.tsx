import React from 'react'
import {Approach} from "@/components/Approach";
import { Hero } from '@/components/Hero';
import { Products } from '@/components/Products';
import ServiceSection from '../components/ServiceSection';


export default function Home() {
  return (
    <div>
      <Hero />
      <ServiceSection />
      <Products />
      <Approach />
    </div>
  );
}
