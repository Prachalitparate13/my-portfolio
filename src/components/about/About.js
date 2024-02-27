import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
// import ExpBullet from '../home/ExpBullet';


export default function About() {
    

    function aboutMeText() {
        return <>
           
            <p><h2 style={{color: 'black'}}>About {info.firstName}</h2>
                <Box sx={{color:'black'}} >
                {info.bio}
                </Box>
               
            </p>
        </>;
    }

    function skillsText() {
        return <>
            
            <p><h2 style={{color: 'black'}}>Skills/Tools </h2></p>
            <h3 style={{color: 'black'}}> Proficient With</h3>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index} >
                    <Box component={'span'} mr={'1rem'} sx={{color:'black'}}>{proficiency}</Box></li>)}
            </ul>
            <h3 style={{color: 'black'}}> Exposed To</h3>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => 
                    <li key={index} >
                        <Box component={'span'} mr={'1rem'} sx={{color:'black'}}>{skill}</Box>
                 </li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><h2 style={{color: 'black'}}>
                Hobbies/Interests</h2></p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'} sx={{color:'black'}}>{hobby.emoji} {hobby.label}</Box></li>
                ))}
            </ul>
        </>;
    }

    function experienceText(){
        return <>
            <p>
                <h2 style={{color: 'black'}}>Expeirence</h2>
            </p>
            <ul>
               {info.expirence.map((bio, index) => (
                  <li key={index}  ><Box component={'span'} mr={'1rem'} sx={{color:'black'}}>{bio.role}  at {bio.company} ({bio.duration})</Box></li>
               ))}
            
            </ul>
        </>;

    }
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            
            <Terminal text={aboutMeText()}/>
            <Terminal text={experienceText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
            
        </Box>
    )
}