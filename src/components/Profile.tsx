import { useState } from "react"
import { FaCamera } from "react-icons/fa";


const Profile = () => {

    const [bannerUrl, setBannerUrl] = useState<string>("https://placehold.co/1500x400");
  
    const [profileUrl, setProfileUrl] = useState("https://placehold.co/100");

    const [subscribed, setSubscribed] = useState<boolean>(false);

    const handleBannerChange = (event: any) => {
       const file = event.target.files[0];
       
       if (file) {
            setBannerUrl(URL.createObjectURL(file));
       }
    }

    const handleProfileChange = (event: any) => {
       const file = event.target.files[0];
       
       if (file) {
            setProfileUrl(URL.createObjectURL(file));
       }
    }

  return (
    <div className="relative w-[94%] ml-[5rem]">
        <div className="relative">
            <img src={bannerUrl} alt="bakground image" className="w-full h-60 object-cover"/>

            <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
                <label htmlFor="banner-upload" className="cursor-pointer">
                    <FaCamera size={24} />
                </label>

                <input type="file" id="banner-upload" accept="image/*" className="hidden" onChange={handleBannerChange}/>
            </button>
        </div>

        {/*Channel Logo*/}
        <div className="flex items-center ml-4 mt-[2rem]">
            <img src={profileUrl} alt="Channel Logo" className="w-40 h-40 object-cover rounded-full border-white relative"/>

            <button className="absolute ml-[3.6rem] mt-[10rem] bg-gray-800 text-white p-2 rounded-full hovering:bg-gray-600">
                <label htmlFor="profile-upload" className="cursor-pointer">
                    <FaCamera size={24} />
                </label>

                <input type="file" id="profile-upload" accept="image/*" className="hidden" onChange={handleProfileChange}/>
            </button>

            {/*Ended Here*/}
            <div className="ml-4 mt-4">
                <h1 className="text-2xl font-bold ml-[1rem]">Moses V</h1>
                <p className="mt-2 ml-[1rem]">1M Views</p>
                <p className="mt-2 ml-[1rem]">
                    Description of Channel.....
                </p>
                
                
                {subscribed ?
                    <button onClick={() => setSubscribed(current => !current)} className="mt-4 bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-500">Unsubscribe</button>
                : 
                    <button onClick={() => setSubscribed(current => !current)} className="mt-4 bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-500">Subscribe</button>
                }
            
            </div>

        </div>


    </div>
  )
}

export default Profile