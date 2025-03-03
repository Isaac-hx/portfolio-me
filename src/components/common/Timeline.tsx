import React,{useState,useEffect} from "react"
import { useInView } from 'react-intersection-observer';
import { dataExperience } from "../../data";

interface CardProps {
    jobTitle:string;
    company:string;
    startDate:string;
    endDate:string;
    isVisible:boolean;
}
const RightCard:React.FC<CardProps> = ({jobTitle,company,startDate,endDate,isVisible}) =>{
    return(
        <div className={`flex md:contents flex-row-reverse`}>
            <div
                className={`relative p-4 my-6 text-gray-800 bg-pink-800 rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto transition-all duration-1000 ease-in-out ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                <h3 className="text-lg text-white font-semibold lg:text-xl">{jobTitle}</h3>
                <h4 className="text-sm text-white mt-4 font-medium ">{company}</h4>
                <h4 className="text-md text-white font-medium">{startDate} - {endDate}</h4>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-gray-300 rounded-t-full bg-gradient-to-b from-gray-400 to-gray-300">
                    </div>
                </div>
                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-gray-400 rounded-full top-1/2"></div>
            </div>
        </div>
    )
}

const LeftCard:React.FC<CardProps> = ({jobTitle,company,startDate,endDate,isVisible}) =>{
    return(
        <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-gray-300"></div>
                </div>
                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-gray-400 rounded-full top-1/2"></div>
            </div>
            <div className={`relative p-4 my-6 text-gray-800 bg-pink-800 rounded-xl col-start-6 col-end-10 mr-auto transition-all duration-1000 ease-in-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <h3 className="text-lg text-white font-semibold lg:text-xl">{jobTitle}</h3>
                <h4 className="text-sm text-white mt-4 font-medium ">{company}</h4>
                <h4 className="text-md text-white font-medium">{startDate} - {endDate}</h4>
            </div>
        </div>
    )
}

const Timeline:React.FC =()=>{
      const [isVisible, setIsVisible] = useState(false);

    // Menggunakan useInView untuk mendeteksi saat elemen masuk/keluar viewport
    const { ref, inView } = useInView({
        threshold: 0.1, // Aktifkan animasi saat 10% elemen terlihat
        triggerOnce: false, // Animasi dapat dipicu ulang saat elemen masuk/keluar viewport
    });

    // Mengaktifkan/menonaktifkan animasi saat elemen terlihat/tidak terlihat
    useEffect(() => {
        setIsVisible(inView);
    }, [inView]);
    return(
    <div ref={ref} id="experience" className="bg-grey-50 py-8 my-8">
        <h1 className=" ml-8 text-3xl font-bold mb-12">Experience</h1>
        <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
        {dataExperience.map((experience,index)=>(
            index%2 == 0 ? <RightCard isVisible={isVisible} jobTitle={experience.JobTitle} company={experience.Company} startDate={experience.StartDate} endDate={experience.EndDate}/>:<LeftCard isVisible={isVisible} jobTitle={experience.JobTitle} company={experience.Company} startDate={experience.StartDate} endDate={experience.EndDate}/> 
        ))}


    </div>
</div>
    )
}



export default Timeline