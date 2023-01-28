/* Change this file to get your personal Porfolio */

export enum SkillTitle{ 
    Fullstack, BackEnd, FrontEnd, Website_Developer, Game_Developer, Cloud_Engineering, Mobile_Developer, Data_Science,
    Graphics_Design
}

export interface Skill {
    skillName: string;
    iconifyIcon: string;
    style: {
        color: string;
        backgroundColor?: undefined;
    }
}

export interface Skills {
    data: {
        title: SkillTitle;
        skills: string[];
        softwareSkills: Skill[];
    }[];
}

export interface SEO {
    title: string;
    description: string;
    og: {
        title: string;
        type: string;
        url: string;
    };
}

export interface Greeting{
    title: string;
    logo_name: string;
    nickname: string;
    subTitle: string;
    resumeLink: string;
    portfolio_repository: string;
    githubProfile: string;
}

export interface SocialMediaLink {
    name: string;
    link: string;
    iconifyIcon: string;
    backgroundColor: string;
}


// Website related settings
export const settings = {
    isSplash: true, // Change this to false if you don't want Splash screen.
};
  
//SEO Related settings
export const seo: SEO = {
    title: "Nobel Okelekele",
    description:
      "I am a hobbyist and a skilled software development professional bringing enormous talents for software design, development and integration. Offering advanced knowledge of in-demand programming languages. Background writing code and developing systems for software applications.",
    og: {
        title: "Nobel Portfolio",
        type: "website",
        url: "https://nobel-portfolio.netlify.app/",
    },
};
  
  //Home Page
export const greeting: Greeting = {
    title: "Nobel Okelekele",
    logo_name: "Nobel",
    nickname: "bsoft",
    subTitle:
      "I am a hobbyist and a skilled software development professional bringing enormous talents for software design, development and integration. Offering advanced knowledge of in-demand programming languages. Background writing code and developing systems for software applications.",
    resumeLink:
      "https://docs.google.com/document/d/1-gDJ_Fb039hIwubMP4Ec98bIfJ8y7QMV/edit?usp=share_link&ouid=111126313440427114019&rtpof=true&sd=true",
    portfolio_repository: "https://github.com/BsoftLimited/nobel",
    githubProfile: "https://github.com/BsoftLimited",
};
  
export const socialMediaLinks: SocialMediaLink[] = [
    {
        name: "Github",
        link: "https://github.com/BsoftLimited",
        iconifyIcon: "ri:github-fill",
        backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/nobel-okelekele-177446237/",
        iconifyIcon: "ant-design:linkedin-filled",
        backgroundColor: "#5C6BC0", // Reference https://simpleicons.org/?q=linkedin
    },
    {
        name: "Gmail",
        link: "https://okelekelenobel@gmail.com",
        iconifyIcon: "mdi:gmail",
        backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
    },
];
  
export const skills: Skills = {
    data: [
        {
            title: SkillTitle.FrontEnd,
                skills: [
                "⚡ Building responsive website front end using React-Redux",
                "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
                "⚡ Creating beautiful and responsive UI designs",
            ],
            softwareSkills: [
                {
                    skillName: "HTML5",
                    iconifyIcon: "teenyicons:html5-solid",
                    style: {
                        color: "#E34F26",
                    },
                },
                {
                    skillName: "CSS3",
                    iconifyIcon: "bi:filetype-css",
                    style: {
                        color: "#1572B6",
                    },
                },
                {
                    skillName: "Sass",
                    iconifyIcon: "cib:sass-alt",
                    style: {
                        color: "#CC6699",
                    },
                },
                {
                    skillName: "JavaScript",
                    iconifyIcon: "simple-icons:javascript",
                    style: {
                        color: "#F7DF1E",
                    },
                },
                {
                    skillName: "ReactJS",
                    iconifyIcon: "logos:react",
                    style: {
                        color: "#02569B",
                    },
                },
                {
                    skillName: "Flutter",
                    iconifyIcon: "vscode-icons:file-type-flutter",
                    style: {
                        color: "#61DAFB",
                    },
                },
            ],
        },
      {
        title: SkillTitle.BackEnd,
        skills: [
          "⚡ Building scallable database",
          "⚡ Building and Implementation of Restfull ApI",
          "⚡ Creating application backend in Node, Express, Flask, MySQL and FireBase",
        ],
        softwareSkills: [
            {
                skillName: "MySQL",
                iconifyIcon: "grommet-icons:mysql",
                style: {
                    color: "#E34F26",
                },
            },
            {
                skillName: "Firebase",
                iconifyIcon: "file-icons:firebase",
                style: {
                    color: "#FFCA28",
                },
            },
            {
                skillName: "PostgreSQL",
                iconifyIcon: "akar-icons:postgresql-fill",
                style: {
                    color: "#336791",
                },
            },
            {
                skillName: "MongoDB",
                iconifyIcon: "teenyicons:mongodb-outline",
                style: {
                    color: "#47A248",
                },
            },
            {
                skillName: "NodeJS",
                iconifyIcon: "fontisto:nodejs",
                style: {
                    color: "#339933",
                },
            },
            {
                skillName: "NPM",
                iconifyIcon: "logos:npm-icon",
                style: {
                    color: "#CB3837",
                }
            },
            {
                skillName: "Laravel",
                iconifyIcon: "cib:laravel",
                style: {
                    color: "#02569B",
                },
            },
        ]
    },
    {
        title: SkillTitle.Game_Developer,
        skills: [
          "⚡ Experience working on multiple cloud platforms",
          "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
          "⚡ Deploying deep learning models on cloud to use on mobile devices",
          "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
        ],
        softwareSkills: [
          {
            skillName: "LibGDX",
            iconifyIcon: "ph:game-controller-duotone",
            style: {
              color: "#4285F4",
            },
          },
          {
            skillName: "OpenGL",
            iconifyIcon: "file-icons:opengl",
            style: {
              color: "#FF9900",
            },
          },
          {
            skillName: "Unity",
            iconifyIcon: "fontisto:unity",
            style: {
              color: "#0089D6",
            },
          },
          {
            skillName: "Monogame",
            iconifyIcon: "simple-icons:monogames",
            style: {
              color: "#1488C6",
            },
          },
          {
            skillName: "WebGL",
            iconifyIcon: "file-icons:webgl",
            style: {
              color: "#326CE5",
            },
          },
        ],
      },
    ],
  };
  
  // Education Page
  export const competitiveSites = {
    competitiveSites: [
      {
        siteName: "Hackerearth",
        iconifyClassname: "simple-icons:hackerearth",
        style: {
          color: "#323754",
        },
        profileLink: "https://www.hackerearth.com/@okelekelenobel",
      },
    ],
  };
  
  export const degrees = {
    degrees: [
      {
        title: "Niger Delta University",
        subtitle: "B.Tech. in Electrical Electronics Engineering",
        logo_path: "iiitk_logo.png",
        alt_name: "NDU",
        duration: "2014 - 2019",
        descriptions: [
          "⚡ I have studied Electrical Electronics engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
          "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
          "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
        ],
        website_link: "http://iiitk.ac.in",
      },
    ],
  };
  
  export const certifications = {
    certifications: [
      {
        title: "Machine Learning",
        subtitle: "- Andrew Ng",
        logo_path: "stanford_logo.png",
        certificate_link:
          "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
        alt_name: "Stanford University",
        color_code: "#8C151599",
      },
      {
        title: "Deep Learning",
        subtitle: "- Andrew Ng",
        logo_path: "deeplearning_ai_logo.png",
        certificate_link:
          "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
        alt_name: "deeplearning.ai",
        color_code: "#00000099",
      },
      {
        title: "ML on GCP",
        subtitle: "- GCP Training",
        logo_path: "google_logo.png",
        certificate_link:
          "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
        alt_name: "Google",
        color_code: "#0C9D5899",
      },
      {
        title: "Data Science",
        subtitle: "- Alex Aklson",
        logo_path: "ibm_logo.png",
        certificate_link:
          "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
        alt_name: "IBM",
        color_code: "#1F70C199",
      },
      {
        title: "Big Data",
        subtitle: "- Kim Akers",
        logo_path: "microsoft_logo.png",
        certificate_link:
          "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
        alt_name: "Microsoft",
        color_code: "#D83B0199",
      },
      {
        title: "Advanced Data Science",
        subtitle: "- Romeo Kienzler",
        logo_path: "ibm_logo.png",
        certificate_link:
          "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
        alt_name: "IBM",
        color_code: "#1F70C199",
      },
      {
        title: "Advanced ML on GCP",
        subtitle: "- GCP Training",
        logo_path: "google_logo.png",
        certificate_link:
          "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
        alt_name: "Google",
        color_code: "#0C9D5899",
      },
      {
        title: "DL on Tensorflow",
        subtitle: "- Laurence Moroney",
        logo_path: "deeplearning_ai_logo.png",
        certificate_link:
          "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
        alt_name: "deeplearning.ai",
        color_code: "#00000099",
      },
      {
        title: "Fullstack Development",
        subtitle: "- Jogesh Muppala",
        logo_path: "coursera_logo.png",
        certificate_link:
          "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
        alt_name: "Coursera",
        color_code: "#2A73CC",
      },
      {
        title: "Kuberenetes on GCP",
        subtitle: "- Qwiklabs",
        logo_path: "gcp_logo.png",
        certificate_link:
          "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
        alt_name: "GCP",
        color_code: "#4285F499",
      },
      {
        title: "Cryptography",
        subtitle: "- Saurabh Mukhopadhyay",
        logo_path: "nptel_logo.png",
        certificate_link:
          "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
        alt_name: "NPTEL",
        color_code: "#FFBB0099",
      },
      {
        title: "Cloud Architecture",
        subtitle: "- Qwiklabs",
        logo_path: "gcp_logo.png",
        certificate_link:
          "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
        alt_name: "GCP",
        color_code: "#4285F499",
      },
    ],
  };
  
  // Experience Page
  export const experience = {
    title: "Experience",
    subtitle: "Work, Internship and Volunteership",
    description:
      "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
    header_image_path: "experience.svg",
    sections: [
      {
        title: "Work",
        experiences: [
          {
            title: "Associate AI Engineer",
            company: "Legato Health Technology",
            company_url: "https://legatohealthtech.com/",
            logo_path: "legato_logo.png",
            duration: "June 2020 - Aug 2021",
            location: "Hyderabad, Telangana",
            description:
              "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
            color: "#0879bf",
          },
          {
            title: "Android and ML Developer",
            company: "Muffito Incorporation",
            company_url: "https://www.linkedin.com/company/muffito-inc/about/",
            logo_path: "muffito_logo.png",
            duration: "May 2018 - Oct 2018",
            location: "Pune, Maharashtra",
            description:
              "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
            color: "#9b1578",
          },
          {
            title: "Android Developer",
            company: "FreeCopy Pvt. Ltd.",
            company_url: "https://www.linkedin.com/company/freecopy/about/",
            logo_path: "freecopy_logo.png",
            duration: "Nov 2017 - Dec 2017",
            location: "Ahmedabad, Gujarat",
            description:
              "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
            color: "#fc1f20",
          },
        ],
      },
      {
        title: "Internships",
        experiences: [
          {
            title: "Machine Learning Intern",
            company: "TikTok Inc.",
            company_url: "https://www.tiktok.com/en/",
            logo_path: "tiktok_logo.png",
            duration: "May 2022 - Aug 2022",
            location: "San Francisco, USA",
            description:
              "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
            color: "#000000",
          },
          {
            title: "Data Science Research Intern",
            company: "Delhivery Pvt. Ltd.",
            company_url: "https://www.delhivery.com/",
            logo_path: "delhivery_logo.png",
            duration: "May 2019 - Sept 2019",
            location: "Gurgaon, Haryana",
            description:
              "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
            color: "#ee3c26",
          },
          {
            title: "Data Science Intern",
            company: "Intel Indexer LLC",
            company_url:
              "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
            logo_path: "intel_logo.jpg",
            duration: "Nov 2018 - Dec 2018",
            location: "Work From Home",
            description:
              "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
            color: "#0071C5",
          },
        ],
      },
      {
        title: "Volunteerships",
        experiences: [
          {
            title: "Google Explore ML Facilitator",
            company: "Google",
            company_url: "https://about.google/",
            logo_path: "google_logo.png",
            duration: "June 2019 - April 2020",
            location: "Hyderabad, Telangana",
            description:
              "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
            color: "#4285F4",
          },
          {
            title: "Microsoft Student Partner",
            company: "Microsoft",
            company_url: "https://www.microsoft.com/",
            logo_path: "microsoft_logo.png",
            duration: "Aug 2019 - May 2020",
            location: "Hyderabad, Telangana",
            description:
              "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
            color: "#D83B01",
          },
          {
            title: "Mozilla Campus Captain",
            company: "Mozilla",
            company_url: "https://www.mozilla.org/",
            logo_path: "mozilla_logo.png",
            duration: "Oct 2019 - May 2020",
            location: "Kurnool, Andhra Pradesh",
            description:
              "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
            color: "#000000",
          },
          {
            title: "Developer Students Club Member",
            company: "DSC IIITDM Kurnool",
            company_url:
              "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
            logo_path: "dsc_logo.png",
            duration: "Jan 2018 - May 2020",
            location: "Kurnool, Andhra Pradesh",
            description:
              "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
            color: "#0C9D58",
          },
          {
            title: "Developer Program Member",
            company: "Github",
            company_url: "https://github.com/",
            logo_path: "github_logo.png",
            duration: "July 2019 - PRESENT",
            location: "Work From Home",
            description:
              "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
            color: "#181717",
          },
        ],
      },
    ],
  };
  
  // Projects Page
export const projectsHeader = {
    title: "Projects",
    description:
      "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
    avatar_image_path: "projects_image.svg",
  };
  
  export const publicationsHeader = {
    title: "Publications",
    description:
      "I have worked on and published a few research papers and publications of my own.",
    avatar_image_path: "projects_image.svg",
  };
  
  export const publications = {
    data: [
      {
        id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
        name: "Artificial Intelligence Paper",
        createdAt: "2020-03-06T16:26:54Z",
        description: "Paper Written on Artificial Intelligence published in xyz ",
        url:
          "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
      },
      {
        id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
        name: "Artificial Intelligence Paper",
        createdAt: "2020-03-06T16:26:54Z",
        description: "Paper Written on Artificial Intelligence published in xyz ",
        url:
          "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
      },
      {
        id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
        name: "Artificial Intelligence Paper",
        createdAt: "2020-03-06T16:26:54Z",
        description: "Paper Written on Artificial Intelligence published in xyz ",
        url:
          "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
      },
      {
        id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
        name: "Artificial Intelligence Paper",
        createdAt: "2020-03-06T16:26:54Z",
        description: "Paper Written on Artificial Intelligence published in xyz ",
        url:
          "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
      },
      {
        id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
        name: "Artificial Intelligence Paper",
        createdAt: "2020-03-06T16:26:54Z",
        description: "Paper Written on Artificial Intelligence published in xyz ",
        url:
          "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
      },
    ],
  };
  
  // Contact Page
  export const contactPageData = {
    contactSection: {
      title: "Contact Me",
      profile_image_path: "ceo.jpg",
      description:
        "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
    },
    blogSection: {
      title: "Blogs",
      subtitle:
        "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
      link: "https://blogs.ashutoshhathidara.com/",
      
    },
    addressSection: {
      title: "Address",
      subtitle:
        "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
      location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
    },
    phoneSection: {
      title: "Phone Number",
      subtitle: "+234 708 795 2034",
    },
  };