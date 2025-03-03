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

interface Projects {
    imageLink:string;
    role:string;
    linkUrl:string;
    projectTitle:string;

}

const dataProject:Projects[] = [
    {
        projectTitle:"Boomerce",
        imageLink:"https://firebasestorage.googleapis.com/v0/b/storage-news.appspot.com/o/cdn-portfolio%2Fboomerce.jpeg?alt=media&token=ce75d9bf-badd-4d2b-9484-f6fea7012805https://firebasestorage.googleapis.com/v0/b/storage-news.appspot.com/o/cdn-portfolio%2Fboomerce.jpeg?alt=media&token=ce75d9bf-badd-4d2b-9484-f6fea7012805",
        role:"Lead Team & Backend",
        linkUrl:"https://boomerce.vercel.app/"
    },
      {
        projectTitle:"Tokomiko",
        imageLink:"https://firebasestorage.googleapis.com/v0/b/storage-news.appspot.com/o/cdn-portfolio%2Ftokomiko.png?alt=media&token=2ab04254-0d0f-4dc0-bbad-5b2e42690fa5",
        role:"Web Developer & Data Entry",
        linkUrl:"https://tokomiko.com/"
    },
        {
        projectTitle:"Credit Scoring",
        imageLink:"https://firebasestorage.googleapis.com/v0/b/storage-news.appspot.com/o/cdn-portfolio%2Fcreditscoring.jpeg?alt=media&token=4b17e2a2-5f8f-4768-8636-097760d8e067",
        role:"Web Developer",
        linkUrl:"https://credit-scoring-nine.vercel.app/"
    },
       {
        projectTitle:"Landing Page",
        imageLink:"https://firebasestorage.googleapis.com/v0/b/storage-news.appspot.com/o/cdn-portfolio%2Flandingpage.png?alt=media&token=7b048237-8f9b-4688-8053-157bfcd8bcde",
        role:"Web Developer",
        linkUrl:"https://apta.ac.id/"
    },
       {
        projectTitle:"OLAP Data Ketenagakerjaan",
        imageLink:"https://firebasestorage.googleapis.com/v0/b/storage-news.appspot.com/o/cdn-portfolio%2Folap.png?alt=media&token=44a20469-42d8-4ace-ac16-68c179eb8151",
        role:"Technical Writer",
        linkUrl:"https://kemnaker.go.id/"
    },
    
]
const dataExperience:Experience[] = [
    {
        id:0,
        JobTitle:"Assistant Trainer",
        Company:"Yayasan Komunitas Open Source",
        StartDate:"June 2022",
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
        StartDate:"December 2024",
        EndDate:"January 2025",
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
        StartDate:"July 2023",
        EndDate:"July 2023",
        Province:"Central Jakarta",
        ImageBanner:"",

        Region:"Indonesia",
        JobDescription:{
            desc1:"sada",
            desc2:"sdsds"
        }
    },

]

export {
    dataExperience,
    dataProject
}