import React from 'react';
import GIF from "./Images/GIF.gif";
import styled from 'styled-components';
import ProgressBar from './Progress';
import { useContractRead } from 'wagmi'
import { useState, useEffect } from "react";
import { ethers, BigNumber} from 'ethers';
import GameBoyzColorClubTestFinal from '../GameBoyzColorClubTestFinal.json';

const VideoContainer = styled.div`



`


const CoverVideo = () => {
  const [supplyData, setSupplyData] = useState(0);

  const { data: totalSupplyData} = useContractRead({
    address: '0xfB03f8cf7c8C3A59937D183eEc9f15d81C877a72',
    abi: GameBoyzColorClubTestFinal.abi,
    functionName: "totalSupply",
    watch: true,
  });

  useEffect(() => {
    if (totalSupplyData) {
      let temp = totalSupplyData / (1);
      setSupplyData(temp);
    }
  }, [totalSupplyData]);

  return (
    


   <VideoContainer>
<h1>On-chain Data:</h1>
<ProgressBar value={supplyData} max={100} />
<p>Nfts Minted: {supplyData}%</p>
   </VideoContainer>
  )
}

export default CoverVideo