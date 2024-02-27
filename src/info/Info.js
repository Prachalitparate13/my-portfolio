import self from "../img/ppimg.jpg"
import mock1 from "../img/mock1.jpg"
import mock2 from "../img/mock2.jpeg"
import mock3 from "../img/mock3.jpeg"
import mock4 from "../img/mock4.jpeg"
import mock5 from "../img/mock5.jpg"
import mock6 from "../img/mock6.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(149,149,149)", "rgb(149,149,149)"];

/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Prachalit",
    lastName: "Parate",
    initials: "PP", // the example uses first and last, but feel free to use three or more if you like.
    position: "an Associate IT Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        // {
        //     emoji: '☕',
        //     text: 'Fueled by coffee'
        // },
        {
            emoji: "💼",
            text: "Associate IT Developer at Veritas Technologies"
            
        },
        {
            emoji: '🌎',
            text: 'Based in Pune-India'
        },
        {
            emoji: "📧",
            text: "prachalitparate13@gmail.com"
        }
    ],
    expirence:[
        {
            emoji:'⌨️',
            role:'IT Intern (Enterprise Application Developer)',
            company:'Veritas Technologies',
            duration:"6 Months"
        },
        {
            emoji:'🔍',
            role:'Research Intern',
            company:'KernelPI',
            duration:"6 Months"
        },
        {
            emoji:'📊',
            role:'Analyst Intern',
            company:'IE Capital',
            duration:"4 Months"
        }
    ],
    socials: [
       
        {
            link: "https://www.linkedin.com/in/prachalit-parate/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://github.com/Prachalitparate13",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.instagram.com/jr_parate_13/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },


    ],
    // bio: `Hello! I'm Prachalit. I am Innovative and rigorously scientific with a foundation in Mathematics and Computer and a considerable amount of project and internship experience. I have discovered the significance of having an iterative and hypothesis-oriented approach towards analysis and modelling form tackling difficult problems via the creation of personal projects and a worthwhile internships. `,
   bio:`Prachalit Parate is an experienced Associate IT developer at Veritas Technologies, with a 
   strong background in research and analysis. He has previously served as a Research Intern at KernelPI and 
   an Analyst Intern at IE Capital. Prachalit holds a Master's degree in Industrial Mathematics with Computer Application, 
   and he has certifications in Go Lang, Spring Boot Microservices, and Data Science. His expertise includes Java, SpringRest, 
   React, Go Lang, System Design, C++, Python, and he also has an overview of PLSQL, Angular, Oracle EBS, and Python. 
   Prachalit is passionate about software development and continuously strives to enhance his skills and knowledge in the field`,
//    bio:`Prachalit Parate is a dynamic and accomplished Associate IT Developer at Veritas Technologies, possessing a diverse skill set and a strong passion for innovation. With experience as a Research Intern at KernelPI and an Analyst Intern at IE Capital, Prachalit has honed his analytical and problem-solving abilities, making him a valuable asset in any team. His solid educational background includes a Master's degree in Industrial Mathematics with Computer Application, complemented by certifications in Go Lang, Spring Boot Microservices, and Data Science. Prachalit's extensive expertise spans Java, SpringRest, React, Go Lang, System Design, C++, and Python, and he is adept in PLSQL, Angular, Oracle EBS, and Python. A self-motivated learner and a team player, Prachalit is constantly evolving his skills to meet the evolving demands of the industry. He is dedicated to delivering innovative solutions and driving impactful results`,
    // intro:`Highly skilled and motivated Associate IT Developer with a passion for solving complex
    //  problems through innovative technology solutions. I hold a Master's degree in Industrial Mathematics with 
    //  Computer Application, which has provided me with a strong foundation in analytical thinking and problem-solving skills.`,
    intro:` Passionate about leveraging technology to solve complex problems and drive innovation. 
    My expertise spans various domains, including software development, data analysis, and data science.
     I excel in developing scalable solutions that optimize business processes and drive organizational growth.
      Let's connect and explore opportunities to collaborate!`,    
skills:
        {
            proficientWith: ['Javascript', 'React', 'Git', 'GitHub', 'Java',  'C++', 'C','DataScience'],
            exposedTo: ['Golang', 'Python', 'PL/SQL','Angular','SpringBoot','OracleEBS']
        }
    ,
    hobbies: [
        {
            label: 'Reading Manga',
            emoji: '📖'
        },
        {
            label:'Road Trip',
            emoji:'🏍️'
        },
        {
            label: 'Treak',
            emoji: '🏔️'
        },
        {
            label: 'Movies',
            emoji: '🎥'
        },
        {
            label: 'Cooking',
            emoji: '🌶'
        },
        
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
        portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Geo-Spatial-Encryption-Using-Mathematical-Algorithms",
            source: "https://drive.google.com/file/d/1z_ec_hep0O628sg5R5r5F9eXOF0Vkfrk/view?usp=drive_link",
            image: mock5,
            discription:`We have developed a model that encrypts a GIS imagery using segmentation and an encryption 
            algorithm to safeguard our country's essential infrastructure.
            As the original picture and the encrypted image show a strong positive correlation with each 
            other in this model, differentiation is difficult.`
        },
        {
            title: "A-New-Scheme-For-RGB-Video-Encryption-using-Mathematical-Algorithms",
            source: "https://docs.google.com/document/d/1X7RD9OjP9pMgJOg5cLYe8ZcWIZKKAigp/edit?usp=sharing&ouid=107226712791848979505&rtpof=true&sd=true",
            image: mock4,
            discription:`To create the most secure video possible, a double encryption procedure is 
            applied to a video that is split into three channels with four sections permuted inside each channel.
             This, across all channels, has a mean squared error of 7636.33.`
        },
        {
            title: "Student-Mentoring-Data-Analysis",
            source: "https://drive.google.com/file/d/1ulUq-oQKDIgFkRZY7jqgAtOHC7QMaJoN/view?usp=sharing",
            image: mock6,
            discription:`
            This project involved analyzing mentorship data gathered by the Psychology Department. It revealed that 45% of
             students lacked self-assurance in their strengths and weaknesses. As a result, the data analysis led to the redesign
              of the form, making certain fields mandatory for additional input.`
        },
        {
            title: "Total-Cost-for-Medical-Insurance",
            source: "https://github.com/Prachalitparate13/Total-Cost-for-Medical-Insurance", 
            image: mock1,
            discription:`The objective is to analyze the total cost of medical insurance across various demographic groups 
            and geographical regions, capturing a comprehensive view of the financial implications for different populations 
            and areas`
        },
        {
            title: "Crop-Recommendation",
            source: "https://github.com/Prachalitparate13/Crop-Recommendation",
            image: mock2,
            discription:`The aim is to develop a tool or application that assists farmers and users in making informed
             decisions about crop selection based on the unique soil quality and climatic conditions of their agricultural area
             . This technology would streamline the cultivation process and optimize agricultural productivity by aligning crop
              choices with local environmental factors`
        },
        {
            title: "N-Beats-Algorithm-Implementation",
            source: "https://github.com/Prachalitparate13/N-Beats-Algorithm-Implementation",
            image: mock3,
            discription:`N-Beats is a deep learning algorithm that predicts time series data, particularly suited for tasks 
            like forecasting. It's designed to handle complex, high-dimensional data and can capture seasonal patterns 
            efficiently. N-Beats uses a stack of neural networks called "blocks," each specialized in capturing different 
            patterns within the data.`
        },
       
    ]
}