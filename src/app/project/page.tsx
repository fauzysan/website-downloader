import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
const page = () => {
  return (
    <div className="py-10 md:my-52">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Project</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Youtube Downloader</h3>
            <p>Download video dari youtube hanya menggunakan url video saja</p>
            <Button className='my-5'>
              <Link href="/project/ytdl">Klik Disini <FontAwesomeIcon icon={faChevronRight} className='fa-solid fa-chevron-right'></FontAwesomeIcon></Link>
            </Button>
          </div>
          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Spotify Downloader</h3>
            <p>Download Lagu dari Spotify dengan gratis hanya menggunakan URL.</p>
            <Button className='my-5'>
              <Link href="/project/spotify">Klik Disini <FontAwesomeIcon icon={faChevronRight} className='fa-solid fa-chevron-right'></FontAwesomeIcon></Link>
            </Button>
          </div>
          <div className="p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">TikTok Downloader</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum officiis nostrum consequatur excepturi dolorem amet.</p>
            <Button className='my-5'>
              <Link href="/project/ttdl">Klik Disini <FontAwesomeIcon icon={faChevronRight} className='fa-solid fa-chevron-right'></FontAwesomeIcon></Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page