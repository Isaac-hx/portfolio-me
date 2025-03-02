interface JobDescription {
  desc1: string;
  desc2: string;
}

interface Experience {
  id: number;
  JobTitle: string;
  Company: string;
  StartDate: string;
  EndDate: string;
  Province: string;
  ImageBanner: string;
  Region: string;
  JobDescription: JobDescription;
}
const dataExperience:Experience[] = [
    {
        id:0,
        JobTitle:"Assistant Trainer",
        Company:"Yayasan Komunitas Open Source",
        StartDate:"06/2022",
        EndDate:"present",
        Province:"West Java",
        ImageBanner:"",
        Region:"Indonesia",
        JobDescription:{
            desc1:"sada",
            desc2:"sdsds"
        }
    },
    {
        id:1,
        JobTitle:"IT Support & Data Entry",
        Company:"Toko Helmi",
        StartDate:"12/2024",
        EndDate:"01/2025",
        Province:"West Java",
        ImageBanner:"",
        Region:"Indonesia",
        JobDescription:{
            desc1:"sada",
            desc2:"sdsds"
        }
    }, {
        id:2,
        JobTitle:"Instructor Cyber Security",
        Company:"SMK Negeri 7 Jakarta ",
        StartDate:"07/2023",
        EndDate:"07/2023",
        Province:"Central Jakarta",
        ImageBanner:"",

        Region:"Indonesia",
        JobDescription:{
            desc1:"sada",
            desc2:"sdsds"
        }
    },

]

export default dataExperience