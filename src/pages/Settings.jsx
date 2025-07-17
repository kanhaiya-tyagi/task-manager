import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import ThemeColorPicker from '../components/ThemeColorPicker'
import { FaLinkedin, FaTwitter, FaInstagram, FaGlobe, FaGithub, FaEnvelope } from 'react-icons/fa';

const Settings = () => {
    const upiId = 'kanhaiya.tyagi.2006@oksbi'

    const copyUPI=()=>{
        navigator.clipboard.writeText(upiId);
        alert("UPI ID copied to clipboard!");
    }

    const links = [
        { icon: <FaGlobe />, label: 'Portfolio', url: 'https://portfolio-eta-umber-goizd5n3hn.vercel.app' },
        { icon: <FaEnvelope />, label: 'Mail', url: 'mailto:kanhaiya.tyagi.2006@gmail.com' },
        { icon: <FaLinkedin />, label: 'LinkedIn', url: 'https://linkedin.com/in/kanhaiya-tyagi' },
        { icon: <FaTwitter />, label: 'Twitter', url: 'https://twitter.com/Kanhaiya__Tyagi' },
        { icon: <FaInstagram />, label: 'Instagram', url: 'https://instagram.com/kanhaiya__tyagi' },
        { icon: <FaGithub />, label: 'GitHub', url: 'https://github.com/kanhaiya-tyagi' },
    ]

    return (
        <div className='w-full'>
            <div className='border-b-2 pb-12'>
                <h2 className='mb-12 font-bold' style={{marginLeft: '4vw', fontSize: '2rem'}}>Settings</h2>
                <div className='ml-8 md:ml-20 lg:ml-40 flex-col'>
                    <ThemeToggle />
                    <ThemeColorPicker />
                </div>
            </div>
            <div className='border-b-2 pb-12'>
                <h2 className='mt-12 font-bold' style={{marginLeft: '4vw', fontSize: '1.7rem'}}>Contact the Developer</h2>
                <div className='ml-8 md:ml-20 lg:ml-40'>
                    <div className="flex flex-col gap-3 py-12">
                        {links.map(({ icon, label, url }) => (
                        <a
                            key={label}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 hover:text-blue-500"
                        >
                            <span className="text-xl">{icon}</span> {label}
                        </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className='pb-12'>
                <div className="p-4 space-y-4 text-center">
                    <h2 className="text-2xl font-semibold">Support My Work 💛</h2>
                    <p className="text-sm text-gray-500">If this app helped you, consider supporting me!</p>

                    <img
                        src="/src/assets/upiQr.jpg"
                        alt="UPI QR Code"
                        className="w-48 mx-auto rounded shadow mt-8"
                    />

                    <p className="text-lg font-mono mt-8">{upiId}</p>
                    <button
                        onClick={copyUPI}
                        className="px-4 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Copy UPI ID
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Settings
