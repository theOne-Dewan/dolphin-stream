import Image from 'next/image';
import logo from '../public/dolphin-stream-logo.png'
import HeaderItem from './header-item';
import { HomeIcon, LightningBoltIcon, BadgeCheckIcon, CollectionIcon, SearchIcon, UserIcon } from '@heroicons/react/outline';

function Header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className='flex flex-grow max-w-2xl justify-evenly'>
                <HeaderItem title='HOME' Icon={HomeIcon}/>
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
                <HeaderItem title='COLLECTIONS' Icon={CollectionIcon}/>
                <HeaderItem title='SEARCH' Icon={SearchIcon}/>
                <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
            </div>
            <Image 
            className='object-contain' 
            src={logo} width={120} height={120}
            />
        </header>
    );
};

export default Header;
