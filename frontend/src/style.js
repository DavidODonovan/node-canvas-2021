import styled, { keyframes, css } from 'styled-components';

export const Container=styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
`;

const imageAnim = keyframes`
	0% {
		transform: translateY(-2048px);
    trans
	}
	100% {
		transform: translateY(0px);
	}
`;

export const StyledImage=styled.div`
  img {
    width: 400px;
    animation: ${imageAnim} 4s ease-in-out;

    image-rendering: optimizeSpeed;             /*                     */
    image-rendering: -moz-crisp-edges;          /* Firefox             */
    image-rendering: -o-crisp-edges;            /* Opera               */
    image-rendering: -webkit-optimize-contrast; /* Chrome (and Safari) */
    image-rendering: pixelated;                 /* Chrome as of 2019   */
    image-rendering: optimize-contrast;         /* CSS3 Proposed       */
    -ms-interpolation-mode: nearest-neighbor;   /* IE8+                */
  }
`;

// css source: // https://superuser.com/questions/530317/how-to-prevent-chrome-from-blurring-small-images-when-zoomed-in

//
//
// export const CircularBells=styled(Circles).attrs((props)=>({
// }))`
//   & circle {
//     cursor: pointer;
//     fill: red;
// 		/* discovered a new filter!*/
// 		filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 1));
//
//     /* use weird $ syntax on props */
//     /* also wrap return value in css helper */
//     ${({$clicked})=>{
//       if($clicked){
//         return css`
// 					animation: ${buttonAnim} .4s linear;
// 					`;
//       }
//     }};
//   }
// `;
