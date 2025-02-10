import Image from 'next/image'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const LatestBlog = ({image}:any) => {
  return (

    <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={image}
          alt="Blog Thumbnail"
          width={400}
          height={250}
          className="w-full rounded-lg h-64 object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 pl-4">
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <span className="flex items-center mr-4">
          <FontAwesomeIcon icon={faPenNib} className="text-pink-500 mr-1" />
            SaberAli
          </span>
          <span className="flex items-center">
          <FontAwesomeIcon icon={faCalendarAlt} className="text-yellow-400 mr-1" />
            21 August, 2020
          </span>
        </div>
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          Top Essential Trends in 2021
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          More off this less hello samlande lied much over tightly circa horse
          taped mightly
        </p>
        <a
          href="#"
          className="text-pink-500 font-medium hover:underline"
        >
          Read More
        </a>
      </div>
    </div>

  )
}

export default LatestBlog