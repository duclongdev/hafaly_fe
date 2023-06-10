import React from 'react';

import FeatImage01 from "./images/features-03-image-01.png"
import FeatImage02 from './images/features-03-image-02.png';
import FeatImage03 from './images/features-03-image-03.png';

function FeaturesZigzag() {
  return (
    <section>
      <div className=" mx-auto px-4 sm:px-6" style={{maxWidth:"200rem"}}>
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-7xs mx-auto text-center pb-12 md:pb-20">
            <div className="inline-flex text-2xl font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div>
            <h1 className="h2 mb-4 font-bold text-7xl">One product, unlimited solutions</h1>
            <p className="text-3xl text-gray-400">Empowering Families to Stay Organized and Connected.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-2xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width="540" height="405" alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 pl-20" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-3xl text-purple-600 mb-2">More speed. Less spend</div>
                  <h3 className="h3 mb-3 text-6xl font-bold">Keep your task on schedule</h3>
                  <p className="text-3xl text-gray-400 mb-4">Help manage daily work in the most effective way for each family member.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-6 h-6 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span className="text-3xl font-medium">Add and categorize many tasks easily</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-6 h-6 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span className="text-3xl font-medium">Help manage tasks between members effectively.</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-6 h-6 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span className="text-3xl font-medium">Easy to use</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-10 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width="540" height="405" alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 pr-20" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-3xl text-purple-600 mb-2 ">More speed. Less spend</div>
                  <h3 className="h3 mb-3 text-6xl font-bold">Make your schedule better</h3>
                  <p className="text-3xl text-gray-400 mb-4">Manage schedules easily, customize events for different purposes.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-6 h-6 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span className="text-3xl font-medium">Add new event</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-6 h-6 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span className="text-3xl font-medium">Task management with calendar. </span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-6 h-6 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span className="text-3xl font-medium">Notification for each specific task</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width="540" height="405" alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 pl-20" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-3xl text-purple-600 mb-2">More speed. Less spend</div>
                  <h3 className="h3 mb-3 text-6xl font-bold">Keep your Meal's Plan right on track</h3>
                  <p className="text-3xl text-gray-400 mb-4">Help manage daily work in the most effective way for each family member.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-6 h-6 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span className="text-3xl font-medium">Add and categorize many tasks easily</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-6 h-6 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span className="text-3xl font-medium">Help manage tasks between members effectively.</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-6 h-6 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span className="text-3xl font-medium">Easy to use</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesZigzag;