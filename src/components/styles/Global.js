import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('http://fonts.cdnfonts.com/css/clash-display');                
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap');

* {
box-sizing: border-box;
margin: 0;                                      
font-family: 'Clash Display', sans-serif;
}

body {  
    margin-top: 80px;
    transition: background 0.2s ease-in-out;
    transition: color 0.2s ease-in-out;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.color};
	background-image: url("data:image/svg+xml,%3Csvg width='1078' height='1551' viewBox='0 0 1078 1551' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.5' filter='url(%23filter0_f_48_28)'%3E%3Cpath d='M218.557 457.237C41.4468 329.788 -244.045 311.349 -328.322 304.49C-336.565 294.47 -381.382 296.835 -494.702 386.457C-608.023 476.079 -621.185 600.757 -613.602 651.894C-324.708 886.599 278.406 1332.31 379.707 1237.51C506.335 1119.01 404.672 1086.51 647.355 879.882C890.037 673.257 741.714 507.868 621.067 466.162C500.421 424.455 395.667 584.686 218.557 457.237Z' fill='url(%23paint0_linear_48_28)'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_f_48_28' x='-915.35' y='0.449219' width='1993.07' height='1550.09' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='150' result='effect1_foregroundBlur_48_28'/%3E%3C/filter%3E%3ClinearGradient id='paint0_linear_48_28' x1='336.908' y1='258.897' x2='-166.404' y2='988.056' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF725E'/%3E%3Cstop offset='1' stop-color='%23B45649'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
    background-repeat: no-repeat;
    
    @media screen and (max-width: 768px) {
        
        background-position: left 85% top 25%;
        
    }
    

}


`;

export default GlobalStyles;
