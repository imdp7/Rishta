'use client';
import Swipable from '@/components/Swipable';
import Header from '@/components/header';
import SampleComponent from '@/components/sample-component';
import Tags from '@/components/tags';
import React from 'react';
import data from '../../public/data.json';
export default function Home() {
  return (
    <>
      <Header />
      <SampleComponent title="Personal Information" data={data[0]?.personal_information} />
      <SampleComponent title="Additional Information" data={data[0]?.additional_information} />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Swipable />
        <div>
          <SampleComponent title="Family Background" data={data[0]?.family} />
          <SampleComponent title="Education / Work Experience" data={data[0]?.education_work} />
          {data[0]?.interests && <Tags data={data[0]?.interests} title="Interests" color={''} />}
          <SampleComponent data={data[0]?.social} title="Socials" />
        </div>
      </div>
    </>
  );
}
