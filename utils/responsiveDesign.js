/*
 * Author: Ankur Gupta(ankurg22)
 */

import {
    widthPercentageToDP as wp2dp,
    heightPercentageToDP as hp2dp,
  } from 'react-native-responsive-screen';
  
  /**
   * Width-Percentage
   * Converts width dimension to percentage
   * 360, 760 - design were made using this scale
   * @param dimension directly taken from design wireframes
   * @returns {string} percentage string e.g. '25%'
   */
  export const wp = value => {
    const dimension = (value / 414) * 100
    return wp2dp(`${dimension}%`);
  };
  
  /**
   * Height-Percentage
   * Converts width dimension to percentage
   * * 360, 760 - design were made using this scale
   * @param dimension directly taken from design wireframes
   * @returns {string} percentage string e.g. '25%'
   */
  export const hp = value => {
    const dimension = (value / 896) * 100
    return hp2dp(`${dimension}%`);
  };