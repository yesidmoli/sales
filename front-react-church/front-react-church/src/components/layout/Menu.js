import React from "react";
import { Link } from "react-router-dom";

function Menu ({clase}){
    return(
        // inicio balance client deuda
        <footer className={clase}>
            <Link to="/"> <svg width="38" height="52" viewBox="0 0 38 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.27557 42.2727V51H4.95881V42.2727H6.27557ZM9.36506 47.1136V51H8.09091V44.4545H9.31392V45.5199H9.39489C9.54545 45.1733 9.78125 44.8949 10.1023 44.6847C10.4261 44.4744 10.8338 44.3693 11.3253 44.3693C11.7713 44.3693 12.1619 44.4631 12.4972 44.6506C12.8324 44.8352 13.0923 45.1108 13.277 45.4773C13.4616 45.8437 13.554 46.2969 13.554 46.8366V51H12.2798V46.9901C12.2798 46.5156 12.1563 46.1449 11.9091 45.8778C11.6619 45.608 11.3224 45.473 10.8906 45.473C10.5952 45.473 10.3324 45.5369 10.1023 45.6648C9.875 45.7926 9.6946 45.9801 9.56108 46.2273C9.4304 46.4716 9.36506 46.767 9.36506 47.1136ZM15.2628 51V44.4545H16.5369V51H15.2628ZM15.9062 43.4446C15.6847 43.4446 15.4943 43.3707 15.3352 43.223C15.179 43.0724 15.1009 42.8935 15.1009 42.6861C15.1009 42.4759 15.179 42.2969 15.3352 42.1491C15.4943 41.9986 15.6847 41.9233 15.9062 41.9233C16.1278 41.9233 16.3168 41.9986 16.473 42.1491C16.6321 42.2969 16.7116 42.4759 16.7116 42.6861C16.7116 42.8935 16.6321 43.0724 16.473 43.223C16.3168 43.3707 16.1278 43.4446 15.9062 43.4446ZM21.0082 51.1321C20.3746 51.1321 19.8292 50.9886 19.3718 50.7017C18.9173 50.4119 18.5678 50.0128 18.3235 49.5043C18.0792 48.9957 17.957 48.4134 17.957 47.7571C17.957 47.0923 18.082 46.5057 18.332 45.9972C18.582 45.4858 18.9343 45.0866 19.3888 44.7997C19.8434 44.5128 20.3789 44.3693 20.9954 44.3693C21.4925 44.3693 21.9357 44.4616 22.3249 44.6463C22.7141 44.8281 23.0281 45.0838 23.2667 45.4134C23.5082 45.7429 23.6516 46.1278 23.6971 46.5682H22.457C22.3888 46.2614 22.2326 45.9972 21.9883 45.7756C21.7468 45.554 21.4229 45.4432 21.0167 45.4432C20.6616 45.4432 20.3505 45.5369 20.0835 45.7244C19.8192 45.9091 19.6133 46.1733 19.4656 46.517C19.3178 46.858 19.244 47.2614 19.244 47.7273C19.244 48.2045 19.3164 48.6165 19.4613 48.9631C19.6062 49.3097 19.8107 49.5781 20.0749 49.7685C20.342 49.9588 20.6559 50.054 21.0167 50.054C21.2582 50.054 21.4769 50.0099 21.6729 49.9219C21.8718 49.831 22.038 49.7017 22.1715 49.5341C22.3079 49.3665 22.4031 49.1648 22.457 48.929H23.6971C23.6516 49.3523 23.5138 49.7301 23.2837 50.0625C23.0536 50.3949 22.7454 50.6562 22.359 50.8466C21.9755 51.0369 21.5252 51.1321 21.0082 51.1321ZM25.0597 51V44.4545H26.3338V51H25.0597ZM25.7031 43.4446C25.4815 43.4446 25.2912 43.3707 25.1321 43.223C24.9759 43.0724 24.8977 42.8935 24.8977 42.6861C24.8977 42.4759 24.9759 42.2969 25.1321 42.1491C25.2912 41.9986 25.4815 41.9233 25.7031 41.9233C25.9247 41.9233 26.1136 41.9986 26.2699 42.1491C26.429 42.2969 26.5085 42.4759 26.5085 42.6861C26.5085 42.8935 26.429 43.0724 26.2699 43.223C26.1136 43.3707 25.9247 43.4446 25.7031 43.4446ZM30.805 51.1321C30.1914 51.1321 29.6559 50.9915 29.1985 50.7102C28.7411 50.429 28.386 50.0355 28.1332 49.5298C27.8803 49.0241 27.7539 48.4332 27.7539 47.7571C27.7539 47.0781 27.8803 46.4844 28.1332 45.9759C28.386 45.4673 28.7411 45.0724 29.1985 44.7912C29.6559 44.5099 30.1914 44.3693 30.805 44.3693C31.4187 44.3693 31.9542 44.5099 32.4116 44.7912C32.869 45.0724 33.2241 45.4673 33.4769 45.9759C33.7298 46.4844 33.8562 47.0781 33.8562 47.7571C33.8562 48.4332 33.7298 49.0241 33.4769 49.5298C33.2241 50.0355 32.869 50.429 32.4116 50.7102C31.9542 50.9915 31.4187 51.1321 30.805 51.1321ZM30.8093 50.0625C31.207 50.0625 31.5366 49.9574 31.7979 49.7472C32.0593 49.5369 32.2525 49.2571 32.3775 48.9077C32.5053 48.5582 32.5692 48.1733 32.5692 47.7528C32.5692 47.3352 32.5053 46.9517 32.3775 46.6023C32.2525 46.25 32.0593 45.9673 31.7979 45.7543C31.5366 45.5412 31.207 45.4347 30.8093 45.4347C30.4087 45.4347 30.0763 45.5412 29.8121 45.7543C29.5508 45.9673 29.3562 46.25 29.2283 46.6023C29.1033 46.9517 29.0408 47.3352 29.0408 47.7528C29.0408 48.1733 29.1033 48.5582 29.2283 48.9077C29.3562 49.2571 29.5508 49.5369 29.8121 49.7472C30.0763 49.9574 30.4087 50.0625 30.8093 50.0625Z" fill="white"/>
                <path d="M14.8624 10.6176C14.8624 9.6235 14.0564 8.8176 13.0624 8.8176C12.0683 8.8176 11.2624 9.6235 11.2624 10.6176H14.8624ZM25.9359 10.6176C25.9359 9.6235 25.13 8.8176 24.136 8.8176C23.1419 8.8176 22.3359 9.6235 22.3359 10.6176H25.9359ZM11.2627 10.5867C11.2456 11.5806 12.0375 12.4002 13.0314 12.4173C14.0255 12.4344 14.8451 11.6425 14.8621 10.6485L11.2627 10.5867ZM14.8861 9.25171C14.9032 8.25775 14.1114 7.43815 13.1173 7.42106C12.1234 7.40398 11.3038 8.1959 11.2867 9.18989L14.8861 9.25171ZM14.8084 11.0555C15.0503 10.0912 14.4647 9.1135 13.5004 8.87167C12.5361 8.62985 11.5583 9.21547 11.3165 10.1797L14.8084 11.0555ZM12.6855 12.12L14.4272 12.5748L14.4316 12.5579L12.6855 12.12ZM5.22491 13.7824C4.408 13.216 3.28653 13.419 2.72005 14.2358C2.15358 15.0528 2.3566 16.1743 3.17353 16.7407L5.22491 13.7824ZM5.99913 15.2801C6.00933 14.286 5.21173 13.4719 4.21768 13.4617C3.2236 13.4515 2.40952 14.249 2.39932 15.2431L5.99913 15.2801ZM4.06722 28.1424L5.8671 28.164L5.86713 28.1609L4.06722 28.1424ZM13.7992 34.8C14.7932 34.8 15.5992 33.9941 15.5992 33C15.5992 32.0059 14.7932 31.2 13.7992 31.2V34.8ZM3.16905 16.7376C3.98425 17.3066 5.10633 17.107 5.67527 16.2917C6.24424 15.4766 6.04461 14.3544 5.2294 13.7856L3.16905 16.7376ZM1.98882 9.2208L0.301478 8.59404C0.281462 8.6479 0.264038 8.70269 0.249278 8.75822L1.98882 9.2208ZM3.99282 3.8256L5.68019 4.45236C5.69754 4.40566 5.71293 4.35826 5.72634 4.31026L3.99282 3.8256ZM6.65442 1.8V0H6.64922L6.65442 1.8ZM30.5415 1.8L30.5468 0H30.5415V1.8ZM33.2032 3.8256L31.4696 4.31028C31.4831 4.35816 31.4984 4.40549 31.5157 4.45212L33.2032 3.8256ZM35.2071 9.2232L36.9469 8.76082C36.932 8.7053 36.9147 8.65054 36.8946 8.59668L35.2071 9.2232ZM31.9684 13.7861C31.1533 14.3556 30.9544 15.4776 31.5236 16.2926C32.0932 17.1074 33.2154 17.3064 34.0302 16.7371L31.9684 13.7861ZM11.9992 33C11.9992 33.9941 12.8051 34.8 13.7992 34.8C14.7932 34.8 15.5992 33.9941 15.5992 33H11.9992ZM21.5992 33C21.5992 33.9941 22.4051 34.8 23.3992 34.8C24.3932 34.8 25.1992 33.9941 25.1992 33H21.5992ZM13.7992 31.2C12.8051 31.2 11.9992 32.0059 11.9992 33C11.9992 33.9941 12.8051 34.8 13.7992 34.8V31.2ZM23.3992 34.8C24.3932 34.8 25.1992 33.9941 25.1992 33C25.1992 32.0059 24.3932 31.2 23.3992 31.2V34.8ZM22.3362 10.6392C22.3482 11.6333 23.1637 12.4294 24.1578 12.4175C25.1516 12.4055 25.948 11.59 25.9359 10.596L22.3362 10.6392ZM25.9191 9.19915C25.9072 8.20512 25.0916 7.40897 24.0976 7.42092C23.1035 7.4329 22.3074 8.24842 22.3194 9.24245L25.9191 9.19915ZM25.8887 10.1778C25.6458 9.21377 24.6673 8.62925 23.7035 8.87218C22.7394 9.1151 22.1548 10.0935 22.3979 11.0574L25.8887 10.1778ZM24.52 12.1128L22.7744 12.5527L22.7783 12.5669L24.52 12.1128ZM34.0225 16.7424C34.8402 16.1774 35.0452 15.0564 34.4802 14.2385C33.915 13.4205 32.7939 13.2156 31.976 13.7807L34.0225 16.7424ZM34.7991 15.2441C34.7896 14.25 33.9759 13.452 32.9819 13.4617C31.9878 13.4713 31.1898 14.285 31.1994 15.2791L34.7991 15.2441ZM33.124 28.1424L31.3242 28.1599V28.164L33.124 28.1424ZM23.3992 31.2C22.4051 31.2 21.5992 32.0059 21.5992 33C21.5992 33.9941 22.4051 34.8 23.3992 34.8V31.2ZM11.2624 10.6176C11.2624 14.6695 14.5472 17.9544 18.5992 17.9544V14.3544C16.5354 14.3544 14.8624 12.6814 14.8624 10.6176H11.2624ZM18.5992 17.9544C22.6513 17.9544 25.9359 14.6695 25.9359 10.6176H22.3359C22.3359 12.6814 20.6629 14.3544 18.5992 14.3544V17.9544ZM14.8621 10.6485L14.8861 9.25171L11.2867 9.18989L11.2627 10.5867L14.8621 10.6485ZM11.3165 10.1797L10.9397 11.6821L14.4316 12.5579L14.8084 11.0555L11.3165 10.1797ZM10.944 11.6653C10.6371 12.8408 9.77548 13.7923 8.63615 14.214L9.88595 17.5901C12.1279 16.7602 13.8234 14.8879 14.4272 12.5748L10.944 11.6653ZM8.63615 14.214C7.4968 14.6359 6.22329 14.4746 5.22491 13.7824L3.17353 16.7407C5.13805 18.103 7.64401 18.4202 9.88595 17.5901L8.63615 14.214ZM2.39932 15.2431L2.26732 28.1239L5.86713 28.1609L5.99913 15.2801L2.39932 15.2431ZM2.26737 28.1208C2.24617 29.8848 2.93219 31.584 4.17222 32.839L6.73295 30.3086C6.16929 29.7382 5.85748 28.9658 5.8671 28.164L2.26737 28.1208ZM4.17222 32.839C5.41228 34.0939 7.10313 34.8002 8.86737 34.8L8.86722 31.2C8.06529 31.2 7.29659 30.8791 6.73295 30.3086L4.17222 32.839ZM8.86737 34.8H13.7992V31.2H8.86722L8.86737 34.8ZM5.2294 13.7856C3.91677 12.8694 3.31701 11.2303 3.72837 9.68338L0.249278 8.75822C-0.550906 11.7673 0.615735 14.9556 3.16905 16.7376L5.2294 13.7856ZM3.67619 9.84756L5.68019 4.45236L2.30548 3.19884L0.301478 8.59404L3.67619 9.84756ZM5.72634 4.31026C5.84346 3.89136 6.22465 3.60125 6.65963 3.6L6.64922 0C4.60319 0.005928 2.81022 1.37047 2.2593 3.34094L5.72634 4.31026ZM6.65442 3.6H30.5415V0H6.65442V3.6ZM30.5365 3.6C30.9714 3.60125 31.3525 3.89136 31.4696 4.31028L34.9367 3.34092C34.3859 1.37047 32.5928 0.005928 30.5468 0L30.5365 3.6ZM31.5157 4.45212L33.5197 9.84972L36.8946 8.59668L34.8906 3.19908L31.5157 4.45212ZM33.4676 9.68558C33.8785 11.2317 33.2795 12.8698 31.9684 13.7861L34.0302 16.7371C36.5812 14.9546 37.7461 11.7683 36.9469 8.76082L33.4676 9.68558ZM15.5992 33V25.8H11.9992V33H15.5992ZM15.5992 25.8C15.5992 25.4686 15.868 25.2 16.1992 25.2V21.6C13.8796 21.6 11.9992 23.4804 11.9992 25.8H15.5992ZM16.1992 25.2H20.9992V21.6H16.1992V25.2ZM20.9992 25.2C21.3306 25.2 21.5992 25.4686 21.5992 25.8H25.1992C25.1992 23.4804 23.3188 21.6 20.9992 21.6V25.2ZM21.5992 25.8V33H25.1992V25.8H21.5992ZM13.7992 34.8H23.3992V31.2H13.7992V34.8ZM25.9359 10.596L25.9191 9.19915L22.3194 9.24245L22.3362 10.6392L25.9359 10.596ZM22.3979 11.0574L22.7744 12.5527L26.2655 11.673L25.8887 10.1778L22.3979 11.0574ZM22.7783 12.5669C23.3809 14.8786 25.0736 16.7506 27.3131 17.5822L28.5663 14.2075C27.4283 13.7848 26.5681 12.8334 26.2619 11.6587L22.7783 12.5669ZM27.3131 17.5822C29.5525 18.414 32.0569 18.1006 34.0225 16.7424L31.976 13.7807C30.9771 14.4708 29.7044 14.6302 28.5663 14.2075L27.3131 17.5822ZM31.1994 15.2791L31.3242 28.1599L34.924 28.1249L34.7991 15.2441L31.1994 15.2791ZM31.3242 28.164C31.3338 28.9658 31.022 29.7382 30.4583 30.3086L33.0191 32.839C34.2592 31.584 34.9451 29.8848 34.924 28.1208L31.3242 28.164ZM30.4583 30.3086C29.8948 30.8791 29.126 31.2 28.3242 31.2L28.3239 34.8C30.0882 34.8002 31.779 34.0939 33.0191 32.839L30.4583 30.3086ZM28.3242 31.2H23.3992V34.8H28.3239L28.3242 31.2Z" fill="white"/>
                </svg></Link>
           
                
            <Link to="/sales-balance">
                <svg width="47" height="51" viewBox="0 0 47 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.958807 50V41.2727H2.27557V45.0653H6.62642V41.2727H7.94744V50H6.62642V46.1946H2.27557V50H0.958807ZM9.76278 50V43.4545H11.0369V50H9.76278ZM10.4062 42.4446C10.1847 42.4446 9.99432 42.3707 9.83523 42.223C9.67898 42.0724 9.60085 41.8935 9.60085 41.6861C9.60085 41.4759 9.67898 41.2969 9.83523 41.1491C9.99432 40.9986 10.1847 40.9233 10.4062 40.9233C10.6278 40.9233 10.8168 40.9986 10.973 41.1491C11.1321 41.2969 11.2116 41.4759 11.2116 41.6861C11.2116 41.8935 11.1321 42.0724 10.973 42.223C10.8168 42.3707 10.6278 42.4446 10.4062 42.4446ZM17.6559 45.0526L16.5011 45.2571C16.4528 45.1094 16.3761 44.9687 16.271 44.8352C16.1687 44.7017 16.0295 44.5923 15.8533 44.5071C15.6772 44.4219 15.457 44.3793 15.1928 44.3793C14.832 44.3793 14.5309 44.4602 14.2894 44.6222C14.0479 44.7812 13.9272 44.9872 13.9272 45.2401C13.9272 45.4588 14.0082 45.6349 14.1701 45.7685C14.332 45.902 14.5934 46.0114 14.9542 46.0966L15.994 46.3352C16.5962 46.4744 17.0451 46.6889 17.3406 46.9787C17.636 47.2685 17.7837 47.6449 17.7837 48.108C17.7837 48.5 17.6701 48.8494 17.4428 49.1562C17.2184 49.4602 16.9045 49.6989 16.5011 49.8722C16.1005 50.0455 15.636 50.1321 15.1076 50.1321C14.3746 50.1321 13.7766 49.9759 13.3136 49.6634C12.8505 49.348 12.5664 48.9006 12.4613 48.321L13.6928 48.1335C13.7695 48.4545 13.9272 48.6974 14.1658 48.8622C14.4045 49.0241 14.7156 49.1051 15.0991 49.1051C15.5167 49.1051 15.8505 49.0185 16.1005 48.8452C16.3505 48.669 16.4755 48.4545 16.4755 48.2017C16.4755 47.9972 16.3988 47.8253 16.2454 47.6861C16.0948 47.5469 15.8633 47.4418 15.5508 47.3707L14.4428 47.1278C13.832 46.9886 13.3803 46.767 13.0877 46.4631C12.7979 46.1591 12.6531 45.7741 12.6531 45.3082C12.6531 44.9219 12.761 44.5838 12.9769 44.294C13.1928 44.0043 13.4911 43.7784 13.8718 43.6165C14.2525 43.4517 14.6886 43.3693 15.18 43.3693C15.8874 43.3693 16.4442 43.5227 16.8505 43.8295C17.2567 44.1335 17.5252 44.5412 17.6559 45.0526ZM22.2401 43.4545V44.4773H18.6648V43.4545H22.2401ZM19.6236 41.8864H20.8977V48.0781C20.8977 48.3253 20.9347 48.5114 21.0085 48.6364C21.0824 48.7585 21.1776 48.8423 21.294 48.8878C21.4134 48.9304 21.5426 48.9517 21.6818 48.9517C21.7841 48.9517 21.8736 48.9446 21.9503 48.9304C22.027 48.9162 22.0866 48.9048 22.1293 48.8963L22.3594 49.9489C22.2855 49.9773 22.1804 50.0057 22.044 50.0341C21.9077 50.0653 21.7372 50.0824 21.5327 50.0852C21.1974 50.0909 20.8849 50.0312 20.5952 49.9062C20.3054 49.7812 20.071 49.5881 19.892 49.3267C19.7131 49.0653 19.6236 48.7372 19.6236 48.3423V41.8864ZM26.3363 50.1321C25.7227 50.1321 25.1871 49.9915 24.7298 49.7102C24.2724 49.429 23.9173 49.0355 23.6644 48.5298C23.4116 48.0241 23.2852 47.4332 23.2852 46.7571C23.2852 46.0781 23.4116 45.4844 23.6644 44.9759C23.9173 44.4673 24.2724 44.0724 24.7298 43.7912C25.1871 43.5099 25.7227 43.3693 26.3363 43.3693C26.9499 43.3693 27.4854 43.5099 27.9428 43.7912C28.4002 44.0724 28.7553 44.4673 29.0082 44.9759C29.261 45.4844 29.3874 46.0781 29.3874 46.7571C29.3874 47.4332 29.261 48.0241 29.0082 48.5298C28.7553 49.0355 28.4002 49.429 27.9428 49.7102C27.4854 49.9915 26.9499 50.1321 26.3363 50.1321ZM26.3406 49.0625C26.7383 49.0625 27.0678 48.9574 27.3292 48.7472C27.5906 48.5369 27.7837 48.2571 27.9087 47.9077C28.0366 47.5582 28.1005 47.1733 28.1005 46.7528C28.1005 46.3352 28.0366 45.9517 27.9087 45.6023C27.7837 45.25 27.5906 44.9673 27.3292 44.7543C27.0678 44.5412 26.7383 44.4347 26.3406 44.4347C25.94 44.4347 25.6076 44.5412 25.3434 44.7543C25.082 44.9673 24.8874 45.25 24.7596 45.6023C24.6346 45.9517 24.5721 46.3352 24.5721 46.7528C24.5721 47.1733 24.6346 47.5582 24.7596 47.9077C24.8874 48.2571 25.082 48.5369 25.3434 48.7472C25.6076 48.9574 25.94 49.0625 26.3406 49.0625ZM30.8097 50V43.4545H32.0412V44.4943H32.1094C32.2287 44.142 32.4389 43.8651 32.7401 43.6634C33.044 43.4588 33.3878 43.3565 33.7713 43.3565C33.8509 43.3565 33.9446 43.3594 34.0526 43.3651C34.1634 43.3707 34.25 43.3778 34.3125 43.3864V44.6051C34.2614 44.5909 34.1705 44.5753 34.0398 44.5582C33.9091 44.5384 33.7784 44.5284 33.6477 44.5284C33.3466 44.5284 33.0781 44.5923 32.8423 44.7202C32.6094 44.8452 32.4247 45.0199 32.2884 45.2443C32.152 45.4659 32.0838 45.7187 32.0838 46.0028V50H30.8097ZM35.4151 50V43.4545H36.6893V50H35.4151ZM36.0586 42.4446C35.837 42.4446 35.6467 42.3707 35.4876 42.223C35.3313 42.0724 35.2532 41.8935 35.2532 41.6861C35.2532 41.4759 35.3313 41.2969 35.4876 41.1491C35.6467 40.9986 35.837 40.9233 36.0586 40.9233C36.2802 40.9233 36.4691 40.9986 36.6254 41.1491C36.7844 41.2969 36.864 41.4759 36.864 41.6861C36.864 41.8935 36.7844 42.0724 36.6254 42.223C36.4691 42.3707 36.2802 42.4446 36.0586 42.4446ZM40.3082 50.1449C39.8935 50.1449 39.5185 50.0682 39.1832 49.9148C38.848 49.7585 38.5824 49.5327 38.3864 49.2372C38.1932 48.9418 38.0966 48.5795 38.0966 48.1506C38.0966 47.7812 38.1676 47.4773 38.3097 47.2386C38.4517 47 38.6435 46.8111 38.8849 46.6719C39.1264 46.5327 39.3963 46.4276 39.6946 46.3565C39.9929 46.2855 40.2969 46.2315 40.6065 46.1946C40.9986 46.1491 41.3168 46.1122 41.5611 46.0838C41.8054 46.0526 41.983 46.0028 42.0938 45.9347C42.2045 45.8665 42.2599 45.7557 42.2599 45.6023V45.5724C42.2599 45.2003 42.1548 44.9119 41.9446 44.7074C41.7372 44.5028 41.4276 44.4006 41.0156 44.4006C40.5866 44.4006 40.2486 44.4957 40.0014 44.6861C39.7571 44.8736 39.5881 45.0824 39.4943 45.3125L38.2969 45.0398C38.4389 44.642 38.6463 44.321 38.919 44.0767C39.1946 43.8295 39.5114 43.6506 39.8693 43.5398C40.2273 43.4261 40.6037 43.3693 40.9986 43.3693C41.2599 43.3693 41.5369 43.4006 41.8295 43.4631C42.125 43.5227 42.4006 43.6335 42.6562 43.7955C42.9148 43.9574 43.1264 44.1889 43.2912 44.4901C43.456 44.7884 43.5384 45.1761 43.5384 45.6534V50H42.294V49.1051H42.2429C42.1605 49.2699 42.0369 49.4318 41.8722 49.5909C41.7074 49.75 41.4957 49.8821 41.2372 49.9872C40.9787 50.0923 40.669 50.1449 40.3082 50.1449ZM40.5852 49.1222C40.9375 49.1222 41.2386 49.0526 41.4886 48.9134C41.7415 48.7741 41.9332 48.5923 42.0639 48.3679C42.1974 48.1406 42.2642 47.8977 42.2642 47.6392V46.7955C42.2188 46.8409 42.1307 46.8835 42 46.9233C41.8722 46.9602 41.7259 46.9929 41.5611 47.0213C41.3963 47.0469 41.2358 47.071 41.0795 47.0938C40.9233 47.1136 40.7926 47.1307 40.6875 47.1449C40.4403 47.1761 40.2145 47.2287 40.0099 47.3026C39.8082 47.3764 39.6463 47.483 39.5241 47.6222C39.4048 47.7585 39.3452 47.9403 39.3452 48.1676C39.3452 48.483 39.4616 48.7216 39.6946 48.8835C39.9276 49.0426 40.2244 49.1222 40.5852 49.1222ZM46.5096 41.2727V50H45.2354V41.2727H46.5096Z" fill="white"/>
                    <path d="M14 23.9167V28.6667C14 29.0866 14.1844 29.4893 14.5126 29.7863C14.8408 30.0832 15.2859 30.25 15.75 30.25H35C35.4641 30.25 35.9092 30.0832 36.2374 29.7863C36.5656 29.4893 36.75 29.0866 36.75 28.6667V3.33333C36.75 2.91341 36.5656 2.51068 36.2374 2.21375C35.9092 1.91681 35.4641 1.75 35 1.75H15.75C15.2859 1.75 14.8408 1.91681 14.5126 2.21375C14.1844 2.51068 14 2.91341 14 3.33333V8.08333" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.75 16C22.75 17.5658 22.2368 19.0964 21.2754 20.3983C20.3139 21.7002 18.9473 22.7149 17.3485 23.3141C15.7496 23.9133 13.9903 24.07 12.293 23.7646C10.5956 23.4591 9.03653 22.7051 7.81282 21.5979C6.58911 20.4908 5.75575 19.0802 5.41813 17.5445C5.08051 16.0088 5.25379 14.417 5.91606 12.9704C6.57832 11.5239 7.69983 10.2874 9.13876 9.41754C10.5777 8.54765 12.2694 8.08334 14 8.08334M22.75 16C22.75 13.9004 21.8281 11.8867 20.1872 10.4021C18.5462 8.91742 16.3206 8.08334 14 8.08334M22.75 16H14V8.08334" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </Link>
                
            <Link to="/list-debts">
                <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.78409 47H0.958807V38.2727H3.87358C4.72869 38.2727 5.46307 38.4474 6.0767 38.7969C6.69034 39.1435 7.16051 39.642 7.48722 40.2926C7.81676 40.9403 7.98153 41.7173 7.98153 42.6236C7.98153 43.5327 7.81534 44.3139 7.48295 44.9673C7.15341 45.6207 6.67614 46.1236 6.05114 46.4759C5.42614 46.8253 4.67045 47 3.78409 47ZM2.27557 45.8494H3.71165C4.37642 45.8494 4.92898 45.7244 5.36932 45.4744C5.80966 45.2216 6.1392 44.8565 6.35795 44.3793C6.5767 43.8991 6.68608 43.3139 6.68608 42.6236C6.68608 41.9389 6.5767 41.358 6.35795 40.8807C6.14205 40.4034 5.8196 40.0412 5.39062 39.794C4.96165 39.5469 4.42898 39.4233 3.79261 39.4233H2.27557V45.8494ZM12.3377 47.1321C11.6928 47.1321 11.1374 46.9943 10.6715 46.7188C10.2085 46.4403 9.8505 46.0497 9.59766 45.5469C9.34766 45.0412 9.22266 44.4489 9.22266 43.7699C9.22266 43.0994 9.34766 42.5085 9.59766 41.9972C9.8505 41.4858 10.2028 41.0866 10.6545 40.7997C11.109 40.5128 11.6403 40.3693 12.2482 40.3693C12.6175 40.3693 12.9755 40.4304 13.3221 40.5526C13.6687 40.6747 13.9798 40.8665 14.2553 41.1278C14.5309 41.3892 14.7482 41.7287 14.9073 42.1463C15.0664 42.5611 15.146 43.0653 15.146 43.6591V44.1108H9.94283V43.1562H13.8974C13.8974 42.821 13.8292 42.5241 13.6928 42.2656C13.5565 42.0043 13.3647 41.7983 13.1175 41.6477C12.8732 41.4972 12.5863 41.4219 12.2567 41.4219C11.8988 41.4219 11.5863 41.5099 11.3192 41.6861C11.055 41.8594 10.8505 42.0866 10.7056 42.3679C10.5636 42.6463 10.4925 42.9489 10.4925 43.2756V44.0213C10.4925 44.4588 10.5692 44.831 10.7227 45.1378C10.8789 45.4446 11.0962 45.679 11.3746 45.8409C11.6531 46 11.9783 46.0795 12.3505 46.0795C12.592 46.0795 12.8121 46.0455 13.011 45.9773C13.2099 45.9062 13.3817 45.8011 13.5266 45.6619C13.6715 45.5227 13.7823 45.3509 13.859 45.1463L15.065 45.3636C14.9684 45.7187 14.7951 46.0298 14.5451 46.2969C14.2979 46.5611 13.9869 46.767 13.6119 46.9148C13.2397 47.0597 12.815 47.1321 12.3377 47.1321ZM20.706 44.2855V40.4545H21.9844V47H20.7315V45.8665H20.6634C20.5128 46.2159 20.2713 46.5071 19.9389 46.7401C19.6094 46.9702 19.1989 47.0852 18.7074 47.0852C18.2869 47.0852 17.9148 46.9929 17.5909 46.8082C17.2699 46.6207 17.017 46.3438 16.8324 45.9773C16.6506 45.6108 16.5597 45.1577 16.5597 44.6179V40.4545H17.8338V44.4645C17.8338 44.9105 17.9574 45.2656 18.2045 45.5298C18.4517 45.794 18.7727 45.9261 19.1676 45.9261C19.4063 45.9261 19.6435 45.8665 19.8793 45.7472C20.1179 45.6278 20.3153 45.4474 20.4716 45.206C20.6307 44.9645 20.7088 44.6577 20.706 44.2855ZM26.1467 47.1278C25.6183 47.1278 25.1467 46.9929 24.7319 46.723C24.32 46.4503 23.9961 46.0625 23.7603 45.5597C23.5273 45.054 23.4109 44.4474 23.4109 43.7401C23.4109 43.0327 23.5288 42.4276 23.7646 41.9247C24.0032 41.4219 24.3299 41.0369 24.7447 40.7699C25.1594 40.5028 25.6296 40.3693 26.1552 40.3693C26.5614 40.3693 26.8881 40.4375 27.1353 40.5739C27.3853 40.7074 27.5785 40.8636 27.7148 41.0426C27.854 41.2216 27.962 41.3793 28.0387 41.5156H28.1154V38.2727H29.3896V47H28.1452V45.9815H28.0387C27.962 46.1207 27.8512 46.2798 27.7063 46.4588C27.5643 46.6378 27.3683 46.794 27.1183 46.9276C26.8683 47.0611 26.5444 47.1278 26.1467 47.1278ZM26.4279 46.0412C26.7944 46.0412 27.104 45.9446 27.3569 45.7514C27.6126 45.5554 27.8058 45.2841 27.9364 44.9375C28.07 44.5909 28.1367 44.1875 28.1367 43.7273C28.1367 43.2727 28.0714 42.875 27.9407 42.5341C27.81 42.1932 27.6183 41.9276 27.3654 41.7372C27.1126 41.5469 26.8001 41.4517 26.4279 41.4517C26.0444 41.4517 25.7248 41.5511 25.4691 41.75C25.2134 41.9489 25.0202 42.2202 24.8896 42.5639C24.7617 42.9077 24.6978 43.2955 24.6978 43.7273C24.6978 44.1648 24.7631 44.5582 24.8938 44.9077C25.0245 45.2571 25.2177 45.5341 25.4734 45.7386C25.7319 45.9403 26.0501 46.0412 26.4279 46.0412ZM33.1129 47.1449C32.6982 47.1449 32.3232 47.0682 31.9879 46.9148C31.6527 46.7585 31.3871 46.5327 31.1911 46.2372C30.9979 45.9418 30.9013 45.5795 30.9013 45.1506C30.9013 44.7812 30.9723 44.4773 31.1143 44.2386C31.2564 44 31.4482 43.8111 31.6896 43.6719C31.9311 43.5327 32.201 43.4276 32.4993 43.3565C32.7976 43.2855 33.1016 43.2315 33.4112 43.1946C33.8033 43.1491 34.1214 43.1122 34.3658 43.0838C34.6101 43.0526 34.7876 43.0028 34.8984 42.9347C35.0092 42.8665 35.0646 42.7557 35.0646 42.6023V42.5724C35.0646 42.2003 34.9595 41.9119 34.7493 41.7074C34.5419 41.5028 34.2322 41.4006 33.8203 41.4006C33.3913 41.4006 33.0533 41.4957 32.8061 41.6861C32.5618 41.8736 32.3928 42.0824 32.299 42.3125L31.1016 42.0398C31.2436 41.642 31.451 41.321 31.7237 41.0767C31.9993 40.8295 32.3161 40.6506 32.674 40.5398C33.032 40.4261 33.4084 40.3693 33.8033 40.3693C34.0646 40.3693 34.3416 40.4006 34.6342 40.4631C34.9297 40.5227 35.2053 40.6335 35.4609 40.7955C35.7195 40.9574 35.9311 41.1889 36.0959 41.4901C36.2607 41.7884 36.343 42.1761 36.343 42.6534V47H35.0987V46.1051H35.0476C34.9652 46.2699 34.8416 46.4318 34.6768 46.5909C34.5121 46.75 34.3004 46.8821 34.0419 46.9872C33.7834 47.0923 33.4737 47.1449 33.1129 47.1449ZM33.3899 46.1222C33.7422 46.1222 34.0433 46.0526 34.2933 45.9134C34.5462 45.7741 34.7379 45.5923 34.8686 45.3679C35.0021 45.1406 35.0689 44.8977 35.0689 44.6392V43.7955C35.0234 43.8409 34.9354 43.8835 34.8047 43.9233C34.6768 43.9602 34.5305 43.9929 34.3658 44.0213C34.201 44.0469 34.0405 44.071 33.8842 44.0938C33.728 44.1136 33.5973 44.1307 33.4922 44.1449C33.245 44.1761 33.0192 44.2287 32.8146 44.3026C32.6129 44.3764 32.451 44.483 32.3288 44.6222C32.2095 44.7585 32.1499 44.9403 32.1499 45.1676C32.1499 45.483 32.2663 45.7216 32.4993 45.8835C32.7322 46.0426 33.0291 46.1222 33.3899 46.1222ZM42.945 42.0526L41.7901 42.2571C41.7418 42.1094 41.6651 41.9687 41.56 41.8352C41.4577 41.7017 41.3185 41.5923 41.1424 41.5071C40.9663 41.4219 40.7461 41.3793 40.4819 41.3793C40.1211 41.3793 39.82 41.4602 39.5785 41.6222C39.337 41.7812 39.2163 41.9872 39.2163 42.2401C39.2163 42.4588 39.2972 42.6349 39.4592 42.7685C39.6211 42.902 39.8825 43.0114 40.2433 43.0966L41.283 43.3352C41.8853 43.4744 42.3342 43.6889 42.6296 43.9787C42.9251 44.2685 43.0728 44.6449 43.0728 45.108C43.0728 45.5 42.9592 45.8494 42.7319 46.1562C42.5075 46.4602 42.1935 46.6989 41.7901 46.8722C41.3896 47.0455 40.9251 47.1321 40.3967 47.1321C39.6637 47.1321 39.0657 46.9759 38.6026 46.6634C38.1396 46.348 37.8555 45.9006 37.7504 45.321L38.9819 45.1335C39.0586 45.4545 39.2163 45.6974 39.4549 45.8622C39.6935 46.0241 40.0046 46.1051 40.3881 46.1051C40.8058 46.1051 41.1396 46.0185 41.3896 45.8452C41.6396 45.669 41.7646 45.4545 41.7646 45.2017C41.7646 44.9972 41.6879 44.8253 41.5344 44.6861C41.3839 44.5469 41.1523 44.4418 40.8398 44.3707L39.7319 44.1278C39.1211 43.9886 38.6694 43.767 38.3768 43.4631C38.087 43.1591 37.9421 42.7741 37.9421 42.3082C37.9421 41.9219 38.0501 41.5838 38.266 41.294C38.4819 41.0043 38.7802 40.7784 39.1609 40.6165C39.5415 40.4517 39.9776 40.3693 40.4691 40.3693C41.1765 40.3693 41.7333 40.5227 42.1396 40.8295C42.5458 41.1335 42.8143 41.5412 42.945 42.0526Z" fill="white"/>
                    <path d="M28.5 27.1875L33.75 33M33.75 33L39 27.1875M33.75 33V21.375M39 11.6875H4M39 15.5625V8.2C39 6.02981 39 4.94469 38.6185 4.11579C38.283 3.38667 37.7475 2.79387 37.089 2.42236C36.3404 2 35.3602 2 33.4 2H9.6C7.63982 2 6.65972 2 5.91104 2.42236C5.25248 2.79385 4.71703 3.38665 4.38148 4.11579C4 4.94469 4 6.02981 4 8.2V22.925C4 25.0952 4 26.1804 4.38148 27.0093C4.71703 27.7383 5.25246 28.3312 5.91104 28.7026C6.65972 29.125 7.63982 29.125 9.6 29.125H21.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </Link>

            <Link to="/list-clients">
                <svg width="47" height="54" viewBox="0 0 47 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 23.2063C19.5375 23.2063 15.6 19.0938 15.6 13.8063C15.6 8.51876 19.275 4.70001 24 4.70001C28.4625 4.70001 32.4 8.81251 32.4 14.1C32.4 19.3875 28.4625 23.2063 24 23.2063ZM24 6.75626C20.5875 6.75626 17.7 9.98751 17.7 13.8063C17.7 17.625 20.325 20.8563 24 20.8563C27.675 20.8563 30.3 17.625 30.3 13.8063C30.3 9.98751 27.4125 6.75626 24 6.75626Z" fill="white"/>
                    <path d="M37.125 39.6563C37.125 29.9625 31.0875 22.325 23.7375 22.325C16.3875 22.325 10.35 29.9625 10.35 39.6563H37.125Z" fill="white"/>
                    <path d="M37.125 40.8312H9.03751V39.6562C9.03751 29.375 15.6 21.15 23.475 21.15C31.35 21.15 37.9125 29.375 37.9125 39.3625V40.5375L37.125 40.8312ZM11.1375 38.4812H36.075C35.8125 30.2562 30.3 23.5 23.7375 23.5C16.9125 23.5 11.6625 30.2562 11.1375 38.4812ZM32.1375 22.9125C31.6125 22.9125 31.0875 22.325 31.0875 21.7375C31.0875 21.15 31.6125 20.5625 32.1375 20.5625C34.7625 20.5625 37.125 18.2125 37.125 14.9812C37.125 12.6312 35.8125 10.575 33.7125 9.69374C33.1875 9.39999 32.925 8.81249 33.1875 8.22499C33.45 7.63749 33.975 7.34374 34.5 7.63749C37.3875 8.51874 39.225 11.4562 39.225 14.9812C38.9625 19.3875 35.8125 22.9125 32.1375 22.9125Z" fill="white"/>
                    <path d="M42.6375 37.0125H40.275C39.75 37.0125 39.225 36.425 39.225 35.8375C39.225 35.25 39.75 34.6625 40.275 34.6625H41.5875C41.0625 28.2 36.8625 23.2063 31.875 23.2063C31.35 23.2063 30.825 22.6188 30.825 22.0313C30.825 21.4438 31.35 20.8563 31.875 20.8563C38.4375 20.8563 43.6875 27.6125 43.6875 35.8375V37.0125H42.6375Z" fill="white"/>
                    <path d="M15.3375 22.9125C15.075 22.9125 15.075 22.9125 15.3375 22.9125C13.5 22.9125 11.6625 22.325 10.35 20.8562C9.0375 19.3875 8.5125 17.3312 8.5125 15.275C8.5125 12.0437 10.35 9.10625 13.2375 7.93125C13.7625 7.6375 14.2875 7.93125 14.55 8.51875C14.8125 9.10625 14.55 9.69375 14.025 9.9875C11.6625 10.8687 10.35 12.925 10.35 15.275C10.35 16.7437 10.875 18.2125 11.6625 19.0937C12.45 20.2687 13.7625 20.5625 15.075 20.8562C15.8625 20.8562 16.125 21.4437 16.125 22.0312C16.125 22.6187 15.8625 22.9125 15.3375 22.9125Z" fill="white"/>
                    <path d="M6.67499 37.0125H3.52499V35.8375C3.52499 27.6125 8.77499 21.15 15.3375 21.15C15.8625 21.15 16.3875 21.7375 16.3875 22.325C16.3875 22.9125 15.8625 23.5 15.3375 23.5C10.35 23.5 6.14999 28.4937 5.62499 34.9562H6.93749C7.46249 34.9562 7.98749 35.5437 7.98749 36.1312C7.72499 36.425 7.46249 37.0125 6.67499 37.0125Z" fill="white"/>
                    <path d="M8.20739 47.1108H6.87784C6.8267 46.8267 6.73153 46.5767 6.59233 46.3608C6.45313 46.1449 6.28267 45.9616 6.08097 45.8111C5.87926 45.6605 5.65341 45.5469 5.40341 45.4702C5.15625 45.3935 4.89347 45.3551 4.61506 45.3551C4.11222 45.3551 3.66193 45.4815 3.2642 45.7344C2.86932 45.9872 2.55682 46.358 2.3267 46.8466C2.09943 47.3352 1.9858 47.9318 1.9858 48.6364C1.9858 49.3466 2.09943 49.946 2.3267 50.4347C2.55682 50.9233 2.87074 51.2926 3.26847 51.5426C3.66619 51.7926 4.11364 51.9176 4.6108 51.9176C4.88636 51.9176 5.14773 51.8807 5.39489 51.8068C5.64489 51.7301 5.87074 51.6179 6.07244 51.4702C6.27415 51.3224 6.4446 51.142 6.58381 50.929C6.72585 50.7131 6.82386 50.4659 6.87784 50.1875L8.20739 50.1918C8.13636 50.6207 7.99858 51.0156 7.79403 51.3764C7.59233 51.7344 7.33239 52.044 7.0142 52.3054C6.69886 52.5639 6.33807 52.7642 5.93182 52.9062C5.52557 53.0483 5.08239 53.1193 4.60227 53.1193C3.84659 53.1193 3.1733 52.9403 2.58239 52.5824C1.99148 52.2216 1.52557 51.706 1.18466 51.0355C0.846591 50.3651 0.677557 49.5653 0.677557 48.6364C0.677557 47.7045 0.848011 46.9048 1.18892 46.2372C1.52983 45.5668 1.99574 45.0526 2.58665 44.6946C3.17756 44.3338 3.84943 44.1534 4.60227 44.1534C5.06534 44.1534 5.49716 44.2202 5.89773 44.3537C6.30114 44.4844 6.66335 44.6776 6.98438 44.9332C7.3054 45.1861 7.57102 45.4957 7.78125 45.8622C7.99148 46.2259 8.13352 46.642 8.20739 47.1108ZM10.9549 44.2727V53H9.68075V44.2727H10.9549ZM12.669 53V46.4545H13.9432V53H12.669ZM13.3125 45.4446C13.0909 45.4446 12.9006 45.3707 12.7415 45.223C12.5852 45.0724 12.5071 44.8935 12.5071 44.6861C12.5071 44.4759 12.5852 44.2969 12.7415 44.1491C12.9006 43.9986 13.0909 43.9233 13.3125 43.9233C13.5341 43.9233 13.723 43.9986 13.8793 44.1491C14.0384 44.2969 14.1179 44.4759 14.1179 44.6861C14.1179 44.8935 14.0384 45.0724 13.8793 45.223C13.723 45.3707 13.5341 45.4446 13.3125 45.4446ZM18.4783 53.1321C17.8335 53.1321 17.2781 52.9943 16.8121 52.7188C16.3491 52.4403 15.9911 52.0497 15.7383 51.5469C15.4883 51.0412 15.3633 50.4489 15.3633 49.7699C15.3633 49.0994 15.4883 48.5085 15.7383 47.9972C15.9911 47.4858 16.3434 47.0866 16.7951 46.7997C17.2496 46.5128 17.7809 46.3693 18.3888 46.3693C18.7582 46.3693 19.1161 46.4304 19.4627 46.5526C19.8093 46.6747 20.1204 46.8665 20.396 47.1278C20.6715 47.3892 20.8888 47.7287 21.0479 48.1463C21.207 48.5611 21.2866 49.0653 21.2866 49.6591V50.1108H16.0835V49.1562H20.038C20.038 48.821 19.9698 48.5241 19.8335 48.2656C19.6971 48.0043 19.5053 47.7983 19.2582 47.6477C19.0138 47.4972 18.7269 47.4219 18.3974 47.4219C18.0394 47.4219 17.7269 47.5099 17.4599 47.6861C17.1957 47.8594 16.9911 48.0866 16.8462 48.3679C16.7042 48.6463 16.6332 48.9489 16.6332 49.2756V50.0213C16.6332 50.4588 16.7099 50.831 16.8633 51.1378C17.0195 51.4446 17.2369 51.679 17.5153 51.8409C17.7937 52 18.119 52.0795 18.4911 52.0795C18.7326 52.0795 18.9528 52.0455 19.1516 51.9773C19.3505 51.9062 19.5224 51.8011 19.6673 51.6619C19.8121 51.5227 19.9229 51.3509 19.9996 51.1463L21.2056 51.3636C21.109 51.7187 20.9357 52.0298 20.6857 52.2969C20.4386 52.5611 20.1275 52.767 19.7525 52.9148C19.3803 53.0597 18.9556 53.1321 18.4783 53.1321ZM23.9744 49.1136V53H22.7003V46.4545H23.9233V47.5199H24.0043C24.1548 47.1733 24.3906 46.8949 24.7116 46.6847C25.0355 46.4744 25.4432 46.3693 25.9347 46.3693C26.3807 46.3693 26.7713 46.4631 27.1065 46.6506C27.4418 46.8352 27.7017 47.1108 27.8864 47.4773C28.071 47.8437 28.1634 48.2969 28.1634 48.8366V53H26.8892V48.9901C26.8892 48.5156 26.7656 48.1449 26.5185 47.8778C26.2713 47.608 25.9318 47.473 25.5 47.473C25.2045 47.473 24.9418 47.5369 24.7116 47.6648C24.4844 47.7926 24.304 47.9801 24.1705 48.2273C24.0398 48.4716 23.9744 48.767 23.9744 49.1136ZM32.9276 46.4545V47.4773H29.3523V46.4545H32.9276ZM30.3111 44.8864H31.5852V51.0781C31.5852 51.3253 31.6222 51.5114 31.696 51.6364C31.7699 51.7585 31.8651 51.8423 31.9815 51.8878C32.1009 51.9304 32.2301 51.9517 32.3693 51.9517C32.4716 51.9517 32.5611 51.9446 32.6378 51.9304C32.7145 51.9162 32.7741 51.9048 32.8168 51.8963L33.0469 52.9489C32.973 52.9773 32.8679 53.0057 32.7315 53.0341C32.5952 53.0653 32.4247 53.0824 32.2202 53.0852C31.8849 53.0909 31.5724 53.0312 31.2827 52.9062C30.9929 52.7812 30.7585 52.5881 30.5795 52.3267C30.4006 52.0653 30.3111 51.7372 30.3111 51.3423V44.8864ZM37.0877 53.1321C36.4428 53.1321 35.8874 52.9943 35.4215 52.7188C34.9585 52.4403 34.6005 52.0497 34.3477 51.5469C34.0977 51.0412 33.9727 50.4489 33.9727 49.7699C33.9727 49.0994 34.0977 48.5085 34.3477 47.9972C34.6005 47.4858 34.9528 47.0866 35.4045 46.7997C35.859 46.5128 36.3903 46.3693 36.9982 46.3693C37.3675 46.3693 37.7255 46.4304 38.0721 46.5526C38.4187 46.6747 38.7298 46.8665 39.0053 47.1278C39.2809 47.3892 39.4982 47.7287 39.6573 48.1463C39.8164 48.5611 39.896 49.0653 39.896 49.6591V50.1108H34.6928V49.1562H38.6474C38.6474 48.821 38.5792 48.5241 38.4428 48.2656C38.3065 48.0043 38.1147 47.7983 37.8675 47.6477C37.6232 47.4972 37.3363 47.4219 37.0067 47.4219C36.6488 47.4219 36.3363 47.5099 36.0692 47.6861C35.805 47.8594 35.6005 48.0866 35.4556 48.3679C35.3136 48.6463 35.2425 48.9489 35.2425 49.2756V50.0213C35.2425 50.4588 35.3192 50.831 35.4727 51.1378C35.6289 51.4446 35.8462 51.679 36.1246 51.8409C36.4031 52 36.7283 52.0795 37.1005 52.0795C37.342 52.0795 37.5621 52.0455 37.761 51.9773C37.9599 51.9062 38.1317 51.8011 38.2766 51.6619C38.4215 51.5227 38.5323 51.3509 38.609 51.1463L39.815 51.3636C39.7184 51.7187 39.5451 52.0298 39.2951 52.2969C39.0479 52.5611 38.7369 52.767 38.3619 52.9148C37.9897 53.0597 37.565 53.1321 37.0877 53.1321ZM46.2145 48.0526L45.0597 48.2571C45.0114 48.1094 44.9347 47.9687 44.8295 47.8352C44.7273 47.7017 44.5881 47.5923 44.4119 47.5071C44.2358 47.4219 44.0156 47.3793 43.7514 47.3793C43.3906 47.3793 43.0895 47.4602 42.848 47.6222C42.6065 47.7812 42.4858 47.9872 42.4858 48.2401C42.4858 48.4588 42.5668 48.6349 42.7287 48.7685C42.8906 48.902 43.152 49.0114 43.5128 49.0966L44.5526 49.3352C45.1548 49.4744 45.6037 49.6889 45.8991 49.9787C46.1946 50.2685 46.3423 50.6449 46.3423 51.108C46.3423 51.5 46.2287 51.8494 46.0014 52.1562C45.777 52.4602 45.4631 52.6989 45.0597 52.8722C44.6591 53.0455 44.1946 53.1321 43.6662 53.1321C42.9332 53.1321 42.3352 52.9759 41.8722 52.6634C41.4091 52.348 41.125 51.9006 41.0199 51.321L42.2514 51.1335C42.3281 51.4545 42.4858 51.6974 42.7244 51.8622C42.9631 52.0241 43.2741 52.1051 43.6577 52.1051C44.0753 52.1051 44.4091 52.0185 44.6591 51.8452C44.9091 51.669 45.0341 51.4545 45.0341 51.2017C45.0341 50.9972 44.9574 50.8253 44.804 50.6861C44.6534 50.5469 44.4219 50.4418 44.1094 50.3707L43.0014 50.1278C42.3906 49.9886 41.9389 49.767 41.6463 49.4631C41.3565 49.1591 41.2116 48.7741 41.2116 48.3082C41.2116 47.9219 41.3196 47.5838 41.5355 47.294C41.7514 47.0043 42.0497 46.7784 42.4304 46.6165C42.8111 46.4517 43.2472 46.3693 43.7386 46.3693C44.446 46.3693 45.0028 46.5227 45.4091 46.8295C45.8153 47.1335 46.0838 47.5412 46.2145 48.0526Z" fill="white"/>
                    </svg>
            </Link>
                    
                        
                        
                            
        </footer>
    )
}
export default Menu;