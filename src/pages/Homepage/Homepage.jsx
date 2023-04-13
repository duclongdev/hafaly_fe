import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';

import classes from '../Homepage/Homepage.module.scss';
import Login from '../Login-SignUp/Login';

//Import Layout
import DefaultPublicLayout from '../../components/layout/DefaultLayout/DefaultLayoutPublic';
//Import Router
import {useNavigate} from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Homepage() {
  const naviagte = useNavigate();
  return (

    
      <div className={classes.Homepage}>


        <div className={classes.main_ct}>
          <div className={classes.main_1}>
            <div className={classes.framer_1}>
              <h1>The ultiimate solution<br /> for managing your family</h1>
            </div>
            <div className={classes.framer_2}>
              <h3>
                Welcome to our website, your ultimate guide to managing your family effectively.<br /> Our mission is to empower families and help them build strong and healthy relationships through effective management strategies.
              </h3>
            </div>
            <div className={classes.framer_3_buttons}>
              <div className={classes.button_ct}>
                <button>Start for free</button>
                <button onClick={()=>naviagte('/dashboard')}>Request a demo</button>
              </div>

            </div>
          </div>
          <div className={classes.main_2}>
            <div className={classes.img_ct}>
              {/* <motion.img
        src="src\assets\home\pexels-mikhail-nilov-6957556.jpg"
        alt="Image 1"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      /> */}
              <motion.img

                src="src\assets\home\Meal plan.png"
                alt="Image 2"
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              />
            </div>

          </div>
        </div>





      </div>
    

  )
}
