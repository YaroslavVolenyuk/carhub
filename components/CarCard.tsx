'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { CarProps } from '../types/index';

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  return <div>CarCard</div>;
};

export default CarCard;
