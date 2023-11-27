import { ClockIcon } from "@heroicons/react/20/solid";
import { SpeakerWaveIcon } from "@heroicons/react/20/solid";
import { HeartIcon } from "@heroicons/react/20/solid";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";


export default function Music() {
     return <div className=" flex relative w-3/5 px-6 m-auto py-3 * items-center border-gray-300 border-b-2">
          <span className="mr-6">1</span>
          <img src="https://fakeimg.pl/600x400" alt="" className="w-14 h-14 rounded-lg" />
          <p className="ml-6 text-semibold">Tiltle</p>
          <div className="flex absolute right-72 items-center">
               <SpeakerWaveIcon className="h-8 w-8 text-gray-500" />
               <p className="ml-2 text-xl">82,002,369</p>
          </div>
          <div className="flex absolute right-44 items-center">
               <ClockIcon className="h-6 w-6 text-gray-500" />
               <p className="ml-2 text-xl">3:45</p>
          </div>
          <button className="absolute right-24">
               <HeartIcon className="h-6 w-6 text-gray-500" />
          </button>
          <button className="absolute right-6 flex justify-center items-center">
               <EllipsisHorizontalIcon className="h-6 w-6 text-gray-500" />
          </button>
          {/* <hr className="font-bold border-2 border-black " /> */}
     </div>
}