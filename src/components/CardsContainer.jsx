import React from 'react'
import ProfileCard from './ProfileCard'
import profilesData from "../assets/data.json";
const CardsContainer = () => {
  return (
    <div className='w-full grid md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6'>
        {profilesData?.data?.map(profile => <ProfileCard key={profile.id} profile={profile}/>)}
        
    </div>
  )
}

export default CardsContainer