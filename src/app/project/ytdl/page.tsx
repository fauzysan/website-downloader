"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import React from 'react'
import { useState} from 'react';
import axios from 'axios';
import Link from 'next/link';

const page = () => {
    const [url, setUrl] = useState('');
    const [data, setData] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [submitted, setSubmitted] = useState(false); 


    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault(); 
        setLoading(true);   
        setError(null);
        setSubmitted(true)
        try {
            const response = await axios.get('https://api.ryzendesu.vip/api/downloader/ytmp4', {
                params: {url}
            });
            setData(response.data.url)

        } catch (err) {
            
        } finally {
            setLoading(false)
        }
    }

  return (
    <div>
        <div className='container mx-auto my-52'>
            <div className='text-center my-20'>
                <p className='text-4xl font-bold'>YOUTUBE DOWNLOADER</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className=' flex justify-center'>
                    
                        <Input  type='text' placeholder='Masukan Video URL' value={url} onChange={(e) => setUrl(e.target.value)} className='w-1/2 p-5 mx-5'/>
                        <Button type='submit' disabled={loading || !url} className=''>{loading ? 'Loading...' : 'Submit'}</Button>
                    
                </div>
            </form>
            <div className='mx-auto text-center my-20'>
                {loading && <p className=''>Loading...</p>}
                {error && <p className="text-red-500">Error: {error}</p>}
                {submitted && !loading && !error && data && ( 
                    <Button>
                        <Link href={data}>Download disini</Link>
                    </Button>
                )}

            </div>
            
        </div>
        
    </div>
    
  )
}

export default page