/* 
    Creates a "@Public()" decorator that can be used to make an endpoint publicly accessible (no login required).
*/

import { SetMetadata } from '@nestjs/common';
import { jwtConstants } from './constants';

export const IS_PUBLIC_KEY = jwtConstants.IS_PUBLIC_KEY;

export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
