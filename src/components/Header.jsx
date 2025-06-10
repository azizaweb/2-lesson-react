import React from 'react'
import Logo from '../assets/next.jpg'
import Image from '../assets/image.png'
import Logos from '../assets/logos.png'
import Icon from '../assets/icon.png'
import National from '../assets/national.png'
import Groups from '../assets/groups.png'
import Frame from '../assets/frame.png'

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between items-center ml-8 h-[80px]">
        <img src={Logo} className="w-[120px] h-[20px]" alt="Logo" />
        <ul className="flex gap-6 items-center mr-8">
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Pricing</a></li>
          <li>
            <a className="p-4 bg-green-800  rounded-2xl text-white" href="#">Register Now</a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-between px-10  bg-gray-100">

  <div className="max-w-xl  m-7 ">
    <h1 className="text-4xl font-bold  text-gray-700 ">
      Lessons and insights <br />
      <span className="text-green-800 font-bold text-4xl block mt-2">from 8 years</span>
    </h1>
    <p className="mt-8 text-gray-700">
      Where to grow your business as a photographer: site or social media?
    </p>
    <button className="p-4  rounded-2xl bg-green-800 text-white mt-6">Register</button>
  </div>
  <div>
    <img src={Image} alt="image" className="w-[500px] h-auto" />
  </div>
</div>
      <div className="mt-10 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">Our Clients</h3>
        <p className="mt-2 text-gray-600">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className='flex justify-center  items-center mt-4'>
    <img src={Logos} alt="logos" className=" w-[800px] " />
  </div>
  <div className='py-16 bg-white'>
    <div className='text-center mb-12' >
    <h2 className="text-4xl font-bold text-gray-800">
      Manage your entire community <br /> in a single system
    </h2>
     
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
    <div className="text-center p-6 shadow-lg rounded-lg">
         <img src={Icon} alt="icon" className="mx-auto mb-4 w-12 h-12"/>
           <h3 className="text-2xl font-semibold text-gray-800 mb-2">
        Membership <br /> Organisations
      </h3>
      <p className="text-gray-600">
        Our membership management software provides full automation of membership renewals and payments.
      </p>
    </div>
        <div className="text-center p-6 shadow-lg rounded-lg">
      <img
        src={National}alt="National Associations"className="mx-auto mb-4 w-12 h-12"/>
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">
        National <br /> Associations
      </h3>
      <p className="text-gray-600">
        Our membership management software provides full automation of membership renewals and payments.
      </p>
    </div>
      <div className="text-center p-6 shadow-lg rounded-lg">
      <img src={Groups}alt="Clubs and Groups" className="mx-auto mb-4 w-12 h-12"/>
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">
        Clubs And <br /> Groups
      </h3>
      <p className="text-gray-600">
        Our membership management software provides full automation of membership renewals and payments.
      </p>
      </div>
    </div>
    </div>
 <div className="flex items-center justify-between px-30  gap-12">
  <div>
    <img src={Frame} alt="frame" className="w-[500px] h-auto" />
  </div>
  <div className="max-w-xl">
    <h3 className="text-4xl font-bold text-gray-800 mb-6">
      The unseen of spending three years at Pixelgrade
    </h3>
    <p className="text-gray-700">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dolores nostrum dolorem corporis iure aperiam,
      atque a laborum distinctio culpa reprehenderit rerum explicabo accusantium
      quasi minima praesentium dolor aspernatur suscipit.
    </p>
    <button className="p-4 bg-green-800 rounded-2xl text-white mt-6">
      Learn More
    </button>
  </div>
</div>

    </header>
  )
}

export default Header