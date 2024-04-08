import { Hono } from 'hono'
import { ImageResponse } from 'workers-og'
const app = new Hono()

app.get('/', async (c) => {
  const html = `
  <div style="display: flex;width: 100vw;height: 100vw;position: relative;overflow:hidden;">
  <img height="200" src="https://cdn.shopify.com/s/files/1/0053/3135/3672/files/4_1.svg?format=png" style="z-index: 10;position: absolute; left: 16%; top: -5%; opacity: 100%; width: 65%; height: 65%; transform: rotate(0deg) ">
  <img height="200" src="https://cdn.shopify.com/s/files/1/0053/3135/3672/files/Logo_1_c0da3df1-890a-476f-9ec3-2053cbf4eb71.avif?v=1710503209" style="z-index: 9;position: absolute; left: 42%; top: 47.5%; opacity: 100%; width: 14.2%; height: 1.75%; transform: rotate(0deg) ">
  <img height="200" src="https://cdn.shopify.com/s/files/1/0053/3135/3672/files/filling_ballons_kristall-smaragdgruen.png" style="z-index: 4;position: absolute; left: 49%; top: 35%; opacity: 100%; width: 17%; height: 17%; transform: rotate(18deg) ">
  <img height="200" src="https://cdn.shopify.com/s/files/1/0053/3135/3672/files/filling_ballons_weiss.png" style="z-index: 5;position: absolute; left: 40%; top: 35%; opacity: 100%; width: 17%; height: 17%; transform: rotate(0deg) ">
  <img height="200" src="https://cdn.shopify.com/s/files/1/0053/3135/3672/files/Mini_Ballons_Reflex_Rot.png?v=1709656118" style="z-index: 4;position: absolute; left: 31%; top: 35%; opacity: 100%; width: 17%; height: 17%; transform: rotate(-18deg) ">
  <img height="200" src="https://cdn.shopify.com/s/files/1/0053/3135/3672/files/filling_ballons_weiss.png" style="z-index: 2;position: absolute; left: 25%; top: 29%; opacity: 100%; width: 16%; height: 16%; transform: rotate(-14deg) ">
  <img height="200" src="https://cdn.shopify.com/s/files/1/0053/3135/3672/files/filling_ballons_weiss.png" style="z-index: 1;position: absolute; left: 34%; top: 27%; opacity: 100%; width: 14%; height: 14%; transform: rotate(-9deg) ">
  <img height="200" src="https://cdn.shopify.com/s/files/1/0053/3135/3672/files/filling_ballons_kristall-smaragdgruen.png" style="z-index: 3;position: absolute; left: 41%; top: 26%; opacity: 100%; width: 15%; height: 15%; transform: rotate(0deg) ">
  <img height="200" src="https://cdn.shopify.com/s/files/1/0053/3135/3672/files/filling_ballons_weiss.png" style="z-index: 1;position: absolute; left: 49%; top: 27%; opacity: 100%; width: 14%; height: 14%; transform: rotate(9deg) ">
  <img height="200" src="https://cdn.shopify.com/s/files/1/0053/3135/3672/files/Mini_Ballons_Reflex_Rot.png?v=1709656118" style="z-index: 2;position: absolute; left: 56%; top: 29%; opacity: 100%; width: 16%; height: 16%; transform: rotate(14deg) ">
  <img height="200" src="https://cdn.shopify.com/s/files/1/0053/3135/3672/files/schleife_radio_beige.png" style="z-index: 15;position: absolute; left: 11.5%; top: 11.5%; opacity: 100%; width: 75%; height: 75%; transform: rotate(0deg) ">
  <img height="200" src="https://cdn.shopify.com/s/files/1/0053/3135/3672/files/Tassel_Peach.png?v=1709657734" style="z-index: 4;position: absolute; left: 14.3%; top: 16%; opacity: 100%; width: 70%; height: 70%; transform: rotate(0deg) ">
  <div style="z-index: 8; justify-content: center; align-items: center; position: absolute; display: flex; left: -1%; top: 5.9%; width: 100%; height: 20%; font-family: Calisto;text-transform: uppercase; font-size: 4.7vw; color: #000000; text-align: center; font-weight: normal; font-style: normal; text-decoration: none; text-decoration: none; line-height: 1; letter-spacing: 0px; opacity: 100%; transform: rotate(0deg)">HAPPY</div>
  <div style="z-index: 8; justify-content: center; align-items: center; position: absolute; display: flex; left: -1%; top: 11%; width: 100%; height: 20%; font-family: Calisto;text-transform: uppercase; font-size: 4.7vw; color: #000000; text-align: center; font-weight: normal; font-style: normal; text-decoration: none; text-decoration: none; line-height: 1; letter-spacing: 0px; opacity: 100%; transform: rotate(0deg)">GRADUATION</div>
  <div style="z-index: 8; justify-content: center; align-items: center; position: absolute; display: flex; left: -1%; top: 23%; width: 100%; height: 20%; font-family: Washington; font-size: 9.1vw; color: #000000; text-align: center; font-weight: normal; font-style: normal; text-decoration: none; text-decoration: none; line-height: 1; letter-spacing: 0px; opacity: 100%; transform: rotate(0deg)">Vanessa</div></div>
   `;

    return new ImageResponse(html, {
      width: 1200,
      height: 1200,
    });
})

export default app
