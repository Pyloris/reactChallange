import SideNav from "../components/SideNav";
import Navbar from "../components/Navbar";
import FullCard from "../components/FullCard";
import SmallLabel from "../components/labels/SmallLabel";
import Button from "../components/Button";
import HalfCard from "../components/HalfCard";
import ButtonBig from "../components/ButtonBig";
import Chart from "../components/Chart";
import BigLabel from "../components/labels/BigLabel";

function Dashboard() {
  return (
    <div className="w-full h-screen bg-light-gray">

      <Navbar />
      <SideNav />

      <div className="flex">

        <div className="ml-[20%] mt-[80px] w-9/12 mx-auto flex flex-col gap-7"> 
        {/* top level card */}
          <FullCard>
            <div className="w-full h-full flex">
              <div className="w-9/12 flex gap-[100px]">
                <div className="flex flex-col gap-3 justify-center items-start">
                  <p className="font-bold flex gap-4 justify-center items-center text-graytext">Total Portfolio Value <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0C5.61553 0 4.26215 0.410543 3.11101 1.17971C1.95987 1.94888 1.06266 3.04213 0.532846 4.32121C0.00303299 5.6003 -0.13559 7.00776 0.134506 8.36563C0.404603 9.7235 1.07129 10.9708 2.05026 11.9497C3.02922 12.9287 4.2765 13.5954 5.63437 13.8655C6.99224 14.1356 8.3997 13.997 9.67879 13.4672C10.9579 12.9373 12.0511 12.0401 12.8203 10.889C13.5895 9.73784 14 8.38447 14 7C13.9978 5.14417 13.2596 3.36498 11.9473 2.05271C10.635 0.740435 8.85583 0.002223 7 0V0ZM7.875 10.5C7.875 10.7321 7.78281 10.9546 7.61872 11.1187C7.45463 11.2828 7.23207 11.375 7 11.375C6.76794 11.375 6.54538 11.2828 6.38128 11.1187C6.21719 10.9546 6.125 10.7321 6.125 10.5V7.7C6.125 7.46793 6.21719 7.24537 6.38128 7.08128C6.54538 6.91719 6.76794 6.825 7 6.825C7.23207 6.825 7.45463 6.91719 7.61872 7.08128C7.78281 7.24537 7.875 7.46793 7.875 7.7V10.5ZM7 5.6C6.72311 5.6 6.45243 5.51789 6.2222 5.36406C5.99198 5.21022 5.81253 4.99157 5.70657 4.73576C5.60061 4.47994 5.57288 4.19845 5.6269 3.92687C5.68092 3.6553 5.81426 3.40584 6.01005 3.21005C6.20585 3.01426 6.4553 2.88092 6.72688 2.8269C6.99845 2.77288 7.27994 2.80061 7.53576 2.90657C7.79157 3.01253 8.01023 3.19197 8.16406 3.4222C8.31789 3.65243 8.4 3.92311 8.4 4.2C8.4 4.5713 8.2525 4.9274 7.98995 5.18995C7.7274 5.4525 7.3713 5.6 7 5.6Z" fill="#797E82"/></svg></p>
                  <p className="font-bold text-2xl">₹ 27,488,293.89</p>
                </div>
                <div className="flex flex-col gap-3 justify-center items-start">
                  <p className="font-bold flex gap-4 justify-center items-center text-graytext">Wallet Balances </p>
                  <div className="flex gap-[50px]">
                    <p className="font-bold text-2xl flex justify-center items-center gap-3">300.70 <SmallLabel>BTC</SmallLabel></p>
                    <p className="font-bold text-2xl flex justify-center items-center gap-3">₹ 27,488,2.23 <SmallLabel>INR</SmallLabel></p>
                  </div>
                </div>
              </div> 
              <div className="w-3/12 flex items-start justify-end gap-6">
                <Button>
                  <div className="text-white flex justify-center items-center gap-2 font-bold"><span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.4792 10.5676C7.54485 10.6407 7.62515 10.6992 7.71488 10.7392C7.80461 10.7792 7.90175 10.7999 8 10.7999C8.09825 10.7999 8.1954 10.7792 8.28513 10.7392C8.37486 10.6992 8.45516 10.6407 8.5208 10.5676L11.6708 7.0676C11.7611 6.96697 11.8204 6.84233 11.8414 6.70874C11.8624 6.57516 11.8443 6.43835 11.7892 6.31485C11.7341 6.19135 11.6444 6.08645 11.531 6.01283C11.4176 5.93921 11.2852 5.90002 11.15 5.9H9.05V2.05C9.05 1.77152 8.93938 1.50445 8.74247 1.30754C8.54555 1.11062 8.27848 1 8 1C7.72153 1 7.45445 1.11062 7.25754 1.30754C7.06063 1.50445 6.95 1.77152 6.95 2.05V5.9H4.85C4.71478 5.90002 4.58245 5.93921 4.46902 6.01283C4.35559 6.08645 4.26591 6.19135 4.21083 6.31485C4.15574 6.43835 4.13761 6.57516 4.15861 6.70874C4.17962 6.84233 4.23887 6.96697 4.3292 7.0676L7.4792 10.5676Z" fill="white"/><path d="M11.5 12.9H4.49998C4.2215 12.9 3.95443 13.0106 3.75752 13.2075C3.56061 13.4044 3.44998 13.6715 3.44998 13.95C3.44998 14.2284 3.56061 14.4955 3.75752 14.6924C3.95443 14.8893 4.2215 15 4.49998 15H11.5C11.7785 15 12.0455 14.8893 12.2424 14.6924C12.4394 14.4955 12.55 14.2284 12.55 13.95C12.55 13.6715 12.4394 13.4044 12.2424 13.2075C12.0455 13.0106 11.7785 12.9 11.5 12.9Z" fill="white"/></svg></span> Deposit</div>
                </Button>
                <Button>
                  <div className="text-white flex justify-center items-center gap-2 font-bold"><span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.4792 10.5676C7.54485 10.6407 7.62515 10.6992 7.71488 10.7392C7.80461 10.7792 7.90175 10.7999 8 10.7999C8.09825 10.7999 8.1954 10.7792 8.28513 10.7392C8.37486 10.6992 8.45516 10.6407 8.5208 10.5676L11.6708 7.0676C11.7611 6.96697 11.8204 6.84233 11.8414 6.70874C11.8624 6.57516 11.8443 6.43835 11.7892 6.31485C11.7341 6.19135 11.6444 6.08645 11.531 6.01283C11.4176 5.93921 11.2852 5.90002 11.15 5.9H9.05V2.05C9.05 1.77152 8.93938 1.50445 8.74247 1.30754C8.54555 1.11062 8.27848 1 8 1C7.72153 1 7.45445 1.11062 7.25754 1.30754C7.06063 1.50445 6.95 1.77152 6.95 2.05V5.9H4.85C4.71478 5.90002 4.58245 5.93921 4.46902 6.01283C4.35559 6.08645 4.26591 6.19135 4.21083 6.31485C4.15574 6.43835 4.13761 6.57516 4.15861 6.70874C4.17962 6.84233 4.23887 6.96697 4.3292 7.0676L7.4792 10.5676Z" fill="white"/><path d="M11.5 12.9H4.49998C4.2215 12.9 3.95443 13.0106 3.75752 13.2075C3.56061 13.4044 3.44998 13.6715 3.44998 13.95C3.44998 14.2284 3.56061 14.4955 3.75752 14.6924C3.95443 14.8893 4.2215 15 4.49998 15H11.5C11.7785 15 12.0455 14.8893 12.2424 14.6924C12.4394 14.4955 12.55 14.2284 12.55 13.95C12.55 13.6715 12.4394 13.4044 12.2424 13.2075C12.0455 13.0106 11.7785 12.9 11.5 12.9Z" fill="white"/></svg></span> Withdraw</div>
                </Button>
              </div>
            </div>
          </FullCard>

          <div className="flex justify-start gap-5">
            <HalfCard>
              <div className="w-full flex gap-2 justify-between items-start px-6 py-3">
                <div>
                  <p className="text-graytext font-bold text-lg">Current Price</p>
                  <p className="flex gap-3"><p className="text-2xl font-semibold">247483.30</p><span className="text-green-700 flex justify-center items-center gap-2 font-bold"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2559_628)"><path d="M10.6632 6.94466L10.5703 2.37564C10.568 2.25385 10.5416 2.13275 10.4928 2.01927C10.4439 1.90579 10.3736 1.80216 10.2857 1.71431C10.1979 1.62645 10.0942 1.55609 9.98075 1.50726C9.86727 1.45842 9.74617 1.43207 9.62438 1.4297L5.05537 1.33682C4.80921 1.33186 4.5751 1.4249 4.40455 1.59545C4.23399 1.76601 4.14096 2.00012 4.14592 2.24628C4.15087 2.49244 4.25341 2.73048 4.43098 2.90805C4.60855 3.08561 4.84659 3.18815 5.09275 3.19311L7.42142 3.24L1.68783 8.9736C1.51733 9.1441 1.42433 9.37813 1.42928 9.62421C1.43424 9.87029 1.53675 10.1083 1.71425 10.2858C1.89176 10.4633 2.12973 10.5658 2.37581 10.5707C2.62189 10.5757 2.85593 10.4827 3.02643 10.3122L8.76002 4.5786L8.80691 6.90727C8.81187 7.15343 8.91441 7.39148 9.09198 7.56905C9.26954 7.74661 9.50759 7.84915 9.75375 7.85411C9.99991 7.85907 10.234 7.76603 10.4046 7.59548C10.5751 7.42492 10.6682 7.19081 10.6632 6.94466Z" fill="#059669"/></g><defs><clipPath id="clip0_2559_628"><rect width="12" height="12" fill="white"/></clipPath></defs></svg>0.04%</span></p>
                </div>
                <div className="flex items-start gap-4">
                  <Button>
                    <p className="text-white flex justify-center items-center gap-2"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 0C5.61553 0 4.26215 0.410543 3.11101 1.17971C1.95987 1.94888 1.06266 3.04213 0.532846 4.32121C0.00303299 5.6003 -0.13559 7.00776 0.134506 8.36563C0.404603 9.7235 1.07129 10.9708 2.05026 11.9497C3.02922 12.9287 4.2765 13.5954 5.63437 13.8655C6.99224 14.1356 8.3997 13.997 9.67879 13.4672C10.9579 12.9373 12.0511 12.0401 12.8203 10.889C13.5895 9.73784 14 8.38447 14 7C13.9978 5.14417 13.2596 3.36498 11.9473 2.05271C10.635 0.740435 8.85583 0.002223 7 0V0ZM10.15 8.05H8.05V10.15C8.05 10.4285 7.93938 10.6955 7.74246 10.8925C7.54555 11.0894 7.27848 11.2 7 11.2C6.72152 11.2 6.45445 11.0894 6.25754 10.8925C6.06063 10.6955 5.95 10.4285 5.95 10.15V8.05H3.85C3.57153 8.05 3.30445 7.93937 3.10754 7.74246C2.91063 7.54555 2.8 7.27848 2.8 7C2.8 6.72152 2.91063 6.45445 3.10754 6.25754C3.30445 6.06062 3.57153 5.95 3.85 5.95H5.95V3.85C5.95 3.57152 6.06063 3.30445 6.25754 3.10754C6.45445 2.91062 6.72152 2.8 7 2.8C7.27848 2.8 7.54555 2.91062 7.74246 3.10754C7.93938 3.30445 8.05 3.57152 8.05 3.85V5.95H10.15C10.4285 5.95 10.6955 6.06062 10.8925 6.25754C11.0894 6.45445 11.2 6.72152 11.2 7C11.2 7.27848 11.0894 7.54555 10.8925 7.74246C10.6955 7.93937 10.4285 8.05 10.15 8.05Z" fill="white"/>
  </svg>
  BUY</p>
                  </Button>
                  <Button>
                    <p className="text-white flex items-center justify-center gap-2"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 0C5.61553 0 4.26215 0.410543 3.11101 1.17971C1.95987 1.94888 1.06266 3.04213 0.532846 4.32121C0.00303299 5.6003 -0.13559 7.00776 0.134506 8.36563C0.404603 9.7235 1.07129 10.9708 2.05026 11.9497C3.02922 12.9287 4.2765 13.5954 5.63437 13.8655C6.99224 14.1356 8.3997 13.997 9.67879 13.4672C10.9579 12.9373 12.0511 12.0401 12.8203 10.889C13.5895 9.73784 14 8.38447 14 7C13.9978 5.14417 13.2596 3.36498 11.9473 2.05271C10.635 0.740435 8.85583 0.002223 7 0V0ZM10.15 8.05H3.85C3.57153 8.05 3.30445 7.93937 3.10754 7.74246C2.91063 7.54555 2.8 7.27848 2.8 7C2.8 6.72152 2.91063 6.45445 3.10754 6.25754C3.30445 6.06062 3.57153 5.95 3.85 5.95H10.15C10.4285 5.95 10.6955 6.06062 10.8925 6.25754C11.0894 6.45445 11.2 6.72152 11.2 7C11.2 7.27848 11.0894 7.54555 10.8925 7.74246C10.6955 7.93937 10.4285 8.05 10.15 8.05Z" fill="white"/>
  </svg>
  SELL</p>
                  </Button>
                </div>
              </div>
              <div className="text-center">
                <Chart></Chart>
              </div>
            </HalfCard>

            <HalfCard>
              <div className="px-6 py-3 pb-6">
                <div>
                  <p className="font-bold text-slate-600">Recent Transactions</p>
                  <div className="flex flex-col mt-7 mb-4 *:mb-5">
                    <div className="flex gap-3 items-center justify-start">
                       <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="#F3F3F7"/><g clip-path="url(#clip0_2559_571)"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.9997 28.0001C24.418 28.0001 27.9997 24.4184 27.9997 20C27.9997 15.5817 24.418 12 19.9997 12C15.5814 12 11.9996 15.5817 11.9996 20C11.9996 24.4184 15.5814 28.0001 19.9997 28.0001ZM20.71 22.3105C20.5052 22.4812 20.1724 22.5665 19.7116 22.5665C19.2593 22.5665 18.8583 22.494 18.5084 22.3489C18.3633 22.2852 18.2292 22.2186 18.1061 22.149C17.8165 21.9853 17.4317 21.9244 17.2284 22.1878C17.1101 22.3408 17.0364 22.5231 17.0364 22.7329C17.0364 23.0913 17.2284 23.39 17.6124 23.6289C18.0049 23.8593 18.5127 24.0087 19.1356 24.0769V24.3329C19.1356 24.6231 19.2039 24.8236 19.3404 24.9345C19.4855 25.0455 19.7159 25.1009 20.0316 25.1009C20.0902 25.1009 20.1495 25.099 20.2091 25.0952C20.5297 25.0747 20.7484 24.786 20.7484 24.4648V24.0129C21.4737 23.8764 22.0241 23.6076 22.3996 23.2065C22.7751 22.7969 22.9628 22.2977 22.9628 21.7089C22.9628 21.0433 22.7537 20.5143 22.3356 20.1217C21.926 19.7292 21.3372 19.4135 20.5692 19.1745L19.8524 18.9569C19.5623 18.8631 19.3447 18.7607 19.1996 18.6497C19.0631 18.5388 18.9948 18.3937 18.9948 18.2145C18.9948 17.9927 19.0972 17.8135 19.302 17.6769C19.5153 17.5318 19.8353 17.4593 20.262 17.4593C20.646 17.4593 21.0001 17.5105 21.3244 17.6129C21.4252 17.6413 21.5198 17.6717 21.6081 17.7041C21.9291 17.8217 22.3376 17.8384 22.4925 17.5337C22.5553 17.4103 22.5916 17.274 22.5916 17.1265C22.5916 16.8022 22.4209 16.542 22.0796 16.3457C21.7383 16.1409 21.2945 16.0086 20.7484 15.9489V15.6673C20.7484 15.3772 20.6759 15.1766 20.5308 15.0657C20.3943 14.9548 20.1681 14.8993 19.8524 14.8993C19.7939 14.8993 19.7345 14.9012 19.6749 14.9051C19.3544 14.9256 19.1356 15.2142 19.1356 15.5354V16.0001C18.47 16.1281 17.958 16.3841 17.5996 16.7681C17.2412 17.1521 17.062 17.6343 17.062 18.2145C17.062 18.5559 17.1175 18.8503 17.2284 19.0977C17.3393 19.3452 17.4929 19.5585 17.6892 19.7377C17.8855 19.9169 18.1244 20.0705 18.406 20.1985C18.6876 20.3265 19.0033 20.446 19.3532 20.5569L20.0572 20.7873C20.3815 20.8897 20.6247 21.0092 20.7868 21.1457C20.9489 21.2823 21.03 21.4615 21.03 21.6833C21.03 21.9308 20.9233 22.1399 20.71 22.3105Z" fill="#171717"/></g><defs><clipPath id="clip0_2559_571"><rect width="16" height="16" fill="white" transform="translate(12 12)"/></clipPath></defs></svg>
                       <div className="w-full flex justify-between px-3 items-start">
                          <div className="flex flex-col gap-2">
                            <p className="text-slate-700 font-bold text-xl">INR Deposit</p>
                            <p className="text-slate-500">20220-06-09 7:06 PM</p>
                          </div>
                          <p className="font-bold text-xl text-slate-700">+ ₹ 81,2222.20 <p className="text-graytext font-normal text-sm text-end"> + 9348</p></p>
                       </div>
                    </div>
                    <hr className="relative w-[90%] translate-x-[50px]" />
                    <div className="flex gap-3 items-center justify-start">
                       <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="#F3F3F7"/><g clip-path="url(#clip0_2559_571)"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.9997 28.0001C24.418 28.0001 27.9997 24.4184 27.9997 20C27.9997 15.5817 24.418 12 19.9997 12C15.5814 12 11.9996 15.5817 11.9996 20C11.9996 24.4184 15.5814 28.0001 19.9997 28.0001ZM20.71 22.3105C20.5052 22.4812 20.1724 22.5665 19.7116 22.5665C19.2593 22.5665 18.8583 22.494 18.5084 22.3489C18.3633 22.2852 18.2292 22.2186 18.1061 22.149C17.8165 21.9853 17.4317 21.9244 17.2284 22.1878C17.1101 22.3408 17.0364 22.5231 17.0364 22.7329C17.0364 23.0913 17.2284 23.39 17.6124 23.6289C18.0049 23.8593 18.5127 24.0087 19.1356 24.0769V24.3329C19.1356 24.6231 19.2039 24.8236 19.3404 24.9345C19.4855 25.0455 19.7159 25.1009 20.0316 25.1009C20.0902 25.1009 20.1495 25.099 20.2091 25.0952C20.5297 25.0747 20.7484 24.786 20.7484 24.4648V24.0129C21.4737 23.8764 22.0241 23.6076 22.3996 23.2065C22.7751 22.7969 22.9628 22.2977 22.9628 21.7089C22.9628 21.0433 22.7537 20.5143 22.3356 20.1217C21.926 19.7292 21.3372 19.4135 20.5692 19.1745L19.8524 18.9569C19.5623 18.8631 19.3447 18.7607 19.1996 18.6497C19.0631 18.5388 18.9948 18.3937 18.9948 18.2145C18.9948 17.9927 19.0972 17.8135 19.302 17.6769C19.5153 17.5318 19.8353 17.4593 20.262 17.4593C20.646 17.4593 21.0001 17.5105 21.3244 17.6129C21.4252 17.6413 21.5198 17.6717 21.6081 17.7041C21.9291 17.8217 22.3376 17.8384 22.4925 17.5337C22.5553 17.4103 22.5916 17.274 22.5916 17.1265C22.5916 16.8022 22.4209 16.542 22.0796 16.3457C21.7383 16.1409 21.2945 16.0086 20.7484 15.9489V15.6673C20.7484 15.3772 20.6759 15.1766 20.5308 15.0657C20.3943 14.9548 20.1681 14.8993 19.8524 14.8993C19.7939 14.8993 19.7345 14.9012 19.6749 14.9051C19.3544 14.9256 19.1356 15.2142 19.1356 15.5354V16.0001C18.47 16.1281 17.958 16.3841 17.5996 16.7681C17.2412 17.1521 17.062 17.6343 17.062 18.2145C17.062 18.5559 17.1175 18.8503 17.2284 19.0977C17.3393 19.3452 17.4929 19.5585 17.6892 19.7377C17.8855 19.9169 18.1244 20.0705 18.406 20.1985C18.6876 20.3265 19.0033 20.446 19.3532 20.5569L20.0572 20.7873C20.3815 20.8897 20.6247 21.0092 20.7868 21.1457C20.9489 21.2823 21.03 21.4615 21.03 21.6833C21.03 21.9308 20.9233 22.1399 20.71 22.3105Z" fill="#171717"/></g><defs><clipPath id="clip0_2559_571"><rect width="16" height="16" fill="white" transform="translate(12 12)"/></clipPath></defs></svg>
                       <div className="w-full flex justify-between px-3 items-start">
                          <div className="flex flex-col gap-2">
                            <p className="text-slate-700 font-bold text-xl">BTC Sell</p>
                            <p className="text-slate-500">20220-06-09 7:06 PM</p>
                          </div>
                          <p className="font-bold text-xl text-slate-700">- 23 BTC<p className="text-graytext font-normal text-sm text-end"> + 9348</p></p>
                       </div>
                    </div>
                    <hr className="relative w-[90%] translate-x-[50px]" />
                    <div className="flex gap-3 items-center justify-start">
                       <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="20" fill="#F3F3F7"/><g clip-path="url(#clip0_2559_571)"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.9997 28.0001C24.418 28.0001 27.9997 24.4184 27.9997 20C27.9997 15.5817 24.418 12 19.9997 12C15.5814 12 11.9996 15.5817 11.9996 20C11.9996 24.4184 15.5814 28.0001 19.9997 28.0001ZM20.71 22.3105C20.5052 22.4812 20.1724 22.5665 19.7116 22.5665C19.2593 22.5665 18.8583 22.494 18.5084 22.3489C18.3633 22.2852 18.2292 22.2186 18.1061 22.149C17.8165 21.9853 17.4317 21.9244 17.2284 22.1878C17.1101 22.3408 17.0364 22.5231 17.0364 22.7329C17.0364 23.0913 17.2284 23.39 17.6124 23.6289C18.0049 23.8593 18.5127 24.0087 19.1356 24.0769V24.3329C19.1356 24.6231 19.2039 24.8236 19.3404 24.9345C19.4855 25.0455 19.7159 25.1009 20.0316 25.1009C20.0902 25.1009 20.1495 25.099 20.2091 25.0952C20.5297 25.0747 20.7484 24.786 20.7484 24.4648V24.0129C21.4737 23.8764 22.0241 23.6076 22.3996 23.2065C22.7751 22.7969 22.9628 22.2977 22.9628 21.7089C22.9628 21.0433 22.7537 20.5143 22.3356 20.1217C21.926 19.7292 21.3372 19.4135 20.5692 19.1745L19.8524 18.9569C19.5623 18.8631 19.3447 18.7607 19.1996 18.6497C19.0631 18.5388 18.9948 18.3937 18.9948 18.2145C18.9948 17.9927 19.0972 17.8135 19.302 17.6769C19.5153 17.5318 19.8353 17.4593 20.262 17.4593C20.646 17.4593 21.0001 17.5105 21.3244 17.6129C21.4252 17.6413 21.5198 17.6717 21.6081 17.7041C21.9291 17.8217 22.3376 17.8384 22.4925 17.5337C22.5553 17.4103 22.5916 17.274 22.5916 17.1265C22.5916 16.8022 22.4209 16.542 22.0796 16.3457C21.7383 16.1409 21.2945 16.0086 20.7484 15.9489V15.6673C20.7484 15.3772 20.6759 15.1766 20.5308 15.0657C20.3943 14.9548 20.1681 14.8993 19.8524 14.8993C19.7939 14.8993 19.7345 14.9012 19.6749 14.9051C19.3544 14.9256 19.1356 15.2142 19.1356 15.5354V16.0001C18.47 16.1281 17.958 16.3841 17.5996 16.7681C17.2412 17.1521 17.062 17.6343 17.062 18.2145C17.062 18.5559 17.1175 18.8503 17.2284 19.0977C17.3393 19.3452 17.4929 19.5585 17.6892 19.7377C17.8855 19.9169 18.1244 20.0705 18.406 20.1985C18.6876 20.3265 19.0033 20.446 19.3532 20.5569L20.0572 20.7873C20.3815 20.8897 20.6247 21.0092 20.7868 21.1457C20.9489 21.2823 21.03 21.4615 21.03 21.6833C21.03 21.9308 20.9233 22.1399 20.71 22.3105Z" fill="#171717"/></g><defs><clipPath id="clip0_2559_571"><rect width="16" height="16" fill="white" transform="translate(12 12)"/></clipPath></defs></svg>
                       <div className="w-full flex justify-between px-3 items-start">
                          <div className="flex flex-col gap-2">
                            <p className="text-slate-700 font-bold text-xl">INR Deposit</p>
                            <p className="text-slate-500">20220-06-09 7:06 PM</p>
                          </div>
                          <p className="font-bold text-xl text-slate-700">+ ₹ 81,2222.20</p>
                       </div>
                    </div>
                  </div>
                </div>
                <ButtonBig>View All</ButtonBig>
              </div>
            </HalfCard>
          </div>

          <div className="relative flex gap-3 justify-center">
            <HalfCard>
              <div className="relative w-full h-[110px] bg-pattern bg-no-repeat bg-right bg-clip-border overflow-hidden rounded-xl">
                <div className="absolute bottom-0 left-0 right-0 top-0 w-full h-full overflow-hidden bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(255,255,255,1)]"></div>
                
                <div className="absolute -top-3 py-7 px-4 w-full h-full">
                  <BigLabel style="bg-purp">Contact</BigLabel>
                  <div className="w-[500px] font-bold text-[18px] mt-2">Learn more about our real estate, mortgage, and  corporate account services</div>
                </div>
              </div>
            </HalfCard>

            <HalfCard>
              <div className="rounded-xl absolute bottom-0 left-0 right-0 top-0 w-full h-full overflow-hidden bg-purp bg-boxes">
                <div className="absolute bottom-0 left-0 right-0 top-0 w-full h-full overflow-hidden bg-gradient-to-bl from-[rgba(0,0,0,0.3)] from-5% via-purp to-purp"></div>
                
                <div className="absolute -top-3 py-7 px-4 w-full h-full">
                  <BigLabel style="bg-white text-purp">Loans</BigLabel>
                  <div className="w-[500px] font-bold text-[18px] mt-2 text-white">Learn more about Loans – Keep your Bitcoin, access it’s value without selling it</div>
                </div>
              </div> 
            </HalfCard>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Dashboard;