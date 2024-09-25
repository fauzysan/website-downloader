"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faDownload } from '@fortawesome/free-solid-svg-icons';

const page = () => {
  const [url, setUrl] = useState('');
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false); 
  const [title, setTitle] = useState('');
  const [artists, setArtists] = useState('');
  const [cover, setCover] = useState('');


  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSubmitted(true);
    try {
      const response = await axios.get("https://api.ryzendesu.vip/api/downloader/spotify", {
        params: {url}
      });
      setData(response.data.link)
      setTitle(response.data.metadata.title)
      setArtists(response.data.metadata.artists)
      setCover(response.data.metadata.cover)
    } catch (err) {
      setError("Masukan URL Yang Valid!")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
        <div className='container mx-auto md:my-52'>
            <div className='text-center my-20'>
                <p className='text-4xl font-bold'>Spotify DOWNLOADER</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className=' flex justify-center'>
                    
                        <Input  type='text' placeholder='Masukan URL Video' value={url} onChange={(e) => setUrl(e.target.value)} className='md:w-1/2 p-5 mx-5'/>
                        <Button type='submit' disabled={loading || !url} className=''>{loading ? 'Loading...' : 'Submit'}</Button>
                    
                </div>
            </form>
            <div className='my-10 p-5 items-center flex justify-center'>
            {loading && <p className=''>Loading...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            {submitted && !loading && !error && data && (
              <div className='items-center'>
                <img src={cover} alt="" width={"500px"} height={"500px"} className='rounded-lg my-5' />
                <p className='font-lg font-bold my-5'><FontAwesomeIcon icon={faMusic}></FontAwesomeIcon> {title} - {artists}</p>
                <Button>
                  <Link href={data}>Download Disini <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></Link>
                </Button>
              </div>
              
             
            )}   
            </div>
        </div>
    </div>
  )
}

export default page