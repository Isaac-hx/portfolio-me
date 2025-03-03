import { dataProject } from "../../data";
import React,{useState,useEffect} from "react"
import { useInView } from 'react-intersection-observer';
interface cardProps {
    imageLink:string;
    role:string;
    linkUrl:string;
    projectTitle:string;
    isVisible:boolean;
}
const Card:React.FC<cardProps> = ({imageLink,role,linkUrl,projectTitle,isVisible})=>{
    return(
        <div className={`relative group overflow-hidden rounded-lg transition-all duration-1000 ease-in-out ${
        isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
          <img
            src={imageLink}
            alt={projectTitle}
            width={600}
            height={400}
            className="w-full h-60 object-cover transition-all duration-300 group-hover:scale-105"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <a href={linkUrl} target="_blank">
          <div  className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-semibold text-lg">{projectTitle}</p>
            <p className="text-white font-semibold text-md">{role}</p>

          </div>
        </a>
        </div>
 
    )
}

const Project:React.FC = () =>{
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
    <div id="project" ref={ref} className=" bg-white mx-auto p-2 my-8 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold my-4">Projects</h2>
      <p className="text-lg font-medium text-gray-600 my-10">List of projects I have completed.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-6">
        {dataProject.map((item=>(
          <Card isVisible={isVisible}projectTitle={item.projectTitle} role={item.role} imageLink={item.imageLink} linkUrl={item.linkUrl}/>
        )))}
      </div>
    </div>

    )
}

export default Project