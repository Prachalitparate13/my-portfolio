import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/ppimg.jpg';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import ExpBullet from './ExpBullet';

export default function Home() {

   return (
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient}} component={'img'} src={me} width={{xs: '35vh', md: '40vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box  display={"block"} justifyContent={'center'}>
            <h1>Hi, I'm {info.firstName}<span className={Style.hand}>🤚</span>
            </h1>
            {/* <h2>I'm {info.position}.</h2> */}
            <Box component={'ul'} p={'0.8rem'} display={'flex'} gap={'1.5rem'} justifyContent={'center'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
               ))}
            </Box>
            <Box fontSize={{xs: '0.1rem', md: '1rem'}} p={'0.4rem'}  gap={'45rem'} alignContent={"center"}height={80}
      width={900}>
               {info.intro}
            </Box>   
            <Box fontSize={{xs: '1rem', md: '1.5rem'}} p={'0.8rem'}  gap={'1.5rem'} >
              <h3>Experience</h3> 
            </Box>
            <Box component={'ul'} p={'0.8rem'}>
               {info.expirence.map((bio, index) => (
                  <ExpBullet key={index} emoji={bio.emoji} role={bio.role} company={bio.company}/>
               ))}
            </Box>
           
          
            
         </Box>
      </Box>
   )
}