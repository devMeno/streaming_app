import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import { SpeakerWaveIcon } from "@heroicons/react/20/solid";
import { CheckIcon } from "@heroicons/react/20/solid";


export default function Banner() {
     return <div className="w-3/5 mt-8 m-auto px-6 text-white">
          <div className="h-80 px-10 py-16  bg-[url('https://wallpapercg.com/download/ed-sheeran-3135x2096-9761.jpg')] rounded-xl items-center justify-center">
               <div className="flex mb-2 items-center">
                    <CheckBadgeIcon className="h-8 w-8 text-blue-500" />
                    <p className="ml-3 text-xl">Verified artist</p>
               </div>
               <p className="text-5xl font-semibold">Ed Sheeran</p>
               <div className="flex my-3">
                    <SpeakerWaveIcon className="h-8 w-8 text-white" />
                    <p className="ml-3 text-xl">82,002,369 monthly listeners</p>
               </div>
               <div className="flex">
                    <button className="bg-green-500 px-4 py-2 rounded-full text-xl">PLAY</button>
                    <button className="bg-transparent flex px-4 py-2 rounded-full text-xl ml-3 border-2 border-white">
                         <CheckIcon className="h-6 w-6 text-white mr-2" />
                         <span>FOLLOWING</span>
                    </button>
               </div>
          </div>
     </div>
}