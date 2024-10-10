import { CloudFog, Facebook, Github, Instagram, Linkedin, Search, Twitter, Coffee } from 'lucide-react';
import React from 'react';

export default function Layout() {
  return (
    <html lang="en">
      <body className='bg-[#2e2e2e]'>
        <div className="flex justify-center mt-20 text-6xl">
          <CloudFog color="gray" size={96} />
          <h1 className='text-white'>WeatherApp</h1>

        </div>
        <div className='flex justify-center position mt-10 '>
          <input className='rounded-lg h-12 w-[340px]'></input>
          <Search className='absolute end-[56.5rem] mt-3' color="gray" size={20} />
        </div>
        <div className='flex justify-center gap-4 mt-14 '>
          <Facebook className='bg-blue-900 rounded-3xl p-1.5 border opacity-60' color="white" size={40} />
          <Twitter className='bg-blue-300 rounded-3xl p-1.5 border opacity-60' color="white" size={40} />
          <Github className='bg-[#2e2e2e] rounded-3xl p-1.5 border opacity-60' color="white" size={40} />
          <Linkedin className='bg-blue-600 rounded-3xl p-1.5 border opacity-60' color="white" size={40} />
          <Instagram className='bg-purple-600 rounded-3xl p-1.5 border opacity-60' color="white" size={40} />
        </div>
        <div>
          <p></p>
          <h1></h1>
          < Coffee className='bg-[#2e2e2e] rounded-3xl p-1.5 border opacity-60' color="white" size={5} />

        </div>
      </body>
    </html>
  );
}
