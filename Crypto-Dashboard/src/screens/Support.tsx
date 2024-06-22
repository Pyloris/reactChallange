import SideNav from "../components/SideNav";
import Navbar from "../components/Navbar";
import FullCard from "../components/FullCard";
import ButtonBig from "../components/ButtonBig";
import HalfCard from "../components/HalfCard";
import BigLabel from "../components/labels/BigLabel";

function Support() {
  return (
    <div className="w-full h-screen bg-light-gray">

      <Navbar />

      <div className="flex">
        <SideNav />

        <div className="ml-[20%] mt-[80px] w-9/12 mx-auto flex flex-col gap-7">
          <div className="w-full flex gap-4">
            <div className="inline-block w-6/12">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.241 10.7143C11.4639 10.8628 11.7287 10.9424 12 10.9424C12.2713 10.9424 12.5361 10.8628 12.759 10.7143L21.8868 4.14456C21.9492 4.09775 22.0003 4.03862 22.0368 3.97118C22.0733 3.90373 22.0942 3.82955 22.0982 3.75366C22.1021 3.67778 22.089 3.60196 22.0598 3.53135C22.0305 3.46074 21.9858 3.397 21.9286 3.34444C21.3222 2.80497 20.5269 2.50361 19.7 2.5H4.29999C3.47311 2.50361 2.67777 2.80497 2.07139 3.34444C2.01158 3.39666 1.96456 3.46093 1.93371 3.53265C1.90285 3.60437 1.88892 3.68175 1.89291 3.75924C1.89691 3.83674 1.91873 3.91242 1.95682 3.98087C1.9949 4.04931 2.04831 4.10882 2.11319 4.15511L11.241 10.7143Z" fill="#5F00D9"/>
              <path d="M14.0768 12.4011C13.474 12.8239 12.7466 13.0517 12 13.0517C11.2534 13.0517 10.526 12.8239 9.9232 12.4011L1.88 6.61459C1.79829 6.55578 1.70112 6.51997 1.59939 6.51117C1.49766 6.50236 1.39539 6.52092 1.30403 6.56475C1.21267 6.60859 1.13584 6.67597 1.08214 6.75934C1.02844 6.84272 1 6.9388 1 7.03681V18.3334C1 19.1732 1.34768 19.9787 1.96655 20.5725C2.58542 21.1664 3.42479 21.5 4.3 21.5H19.7C20.5752 21.5 21.4146 21.1664 22.0335 20.5725C22.6523 19.9787 23 19.1732 23 18.3334V7.03681C23 6.9388 22.9716 6.84272 22.9179 6.75934C22.8642 6.67597 22.7873 6.60859 22.696 6.56475C22.6046 6.52092 22.5023 6.50236 22.4006 6.51117C22.2989 6.51997 22.2017 6.55578 22.12 6.61459L14.0768 12.4011Z" fill="#5F00D9"/>
              </svg>
              <h2 className="text-4xl my-4 font-bold">Contact Us</h2>
              <p className="text-md text-slate-700 w-[400px]">Have a question or just want to know more? Feel free to reach out to us</p>
            </div> 
            <div className="inline-block w-6/12">
              <FullCard>
                <div className="w-full h-full p-1">
                  <p className="font-bold text-sm">You will receive response within 24 hours of time of submit</p>

                  <form action="" className="mt-7 flex flex-col gap-4">
                    <div className="w-full grid grid-cols-2 gap-7">
                      <div className="flex flex-col gap-3">
                        <label htmlFor="name" className="font-bold">Name</label>
                        <input className="border border-1 border-grayish px-2 py-1 rounded-md" type="text" name="name" id='name' placeholder="Shoaib" />
                      </div>
                      <div className="flex flex-col gap-3">
                        <label htmlFor="name" className="font-bold">Surname</label>
                        <input className="border border-1 border-grayish px-2 py-1 rounded-md" type="text" name="name" id='name' placeholder="Wani" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <label htmlFor="name" className="font-bold">Email</label>
                      <input className="border border-1 border-grayish px-2 py-1 rounded-md" type="text" name="name" id='name' placeholder="name@example.com" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label htmlFor="message" className="font-bold">Message</label>
                      <textarea rows={10} className="border border-1 border-grayish px-2 py-1 rounded-md" name="message" id="message" placeholder="Write your message here"></textarea>
                    </div>
                    <div className="flex gap-3">
                      <input type="checkbox" />
                      <p>I agree with <span className="text-purp font-bold">Terms & Conditions</span></p>
                    </div>
                    <ButtonBig>Send a Message</ButtonBig>
                    <ButtonBig>Book a Meeting</ButtonBig>
                  </form>
                </div>
              </FullCard> 
            </div>
          </div>

          <div className="flex">
            <div className="inline-block w-6/12 m-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.44904 2.50055C8.13525 1.51669 10.0535 0.998766 12.0066 1C13.6891 1.00095 15.3489 1.38716 16.8584 2.12894C18.3679 2.87071 19.6868 3.94827 20.7137 5.27871C21.7405 6.60915 22.448 8.15702 22.7816 9.80322C23.1152 11.4494 23.0661 13.1501 22.638 14.7743C22.2099 16.3986 21.4143 17.9032 20.3123 19.1724C19.2104 20.4415 17.8314 21.4414 16.2816 22.0951C14.7318 22.7488 13.0524 23.0389 11.3727 22.9431C9.69299 22.8473 8.05767 22.368 6.59257 21.5423L2.46112 22.9412C2.26215 23.009 2.04789 23.0184 1.84373 22.9683C1.63957 22.9183 1.45405 22.8108 1.30915 22.6588C1.16425 22.5068 1.06602 22.3164 1.02612 22.1104C0.986208 21.9043 1.00629 21.6912 1.08397 21.4962L2.60412 17.6904C1.5885 16.025 1.03539 14.1197 1.00164 12.1702C0.967893 10.2208 1.45471 8.29756 2.41208 6.59814C3.36945 4.89872 4.76283 3.48441 6.44904 2.50055Z" fill="#5F00D9"/>
              </svg>
              <h1 className="my-4 font-bold text-4xl">Live Chat</h1>
              <p className="text-md text-slate-700">Don't have time to wait for the answer? Chat with us now.</p>
            </div>
            <HalfCard>
              <div className="rounded-xl absolute bottom-0 left-0 right-0 top-0 w-full h-full overflow-hidden bg-purp bg-boxes">
                <div className="absolute bottom-0 left-0 right-0 top-0 w-full h-full overflow-hidden bg-gradient-to-bl from-[rgba(0,0,0,0.3)] from-5% via-purp to-purp"></div>
                <div className="absolute -top-3 py-7 px-4 w-full h-full">
                  <BigLabel style="bg-white text-purp">Chatbot</BigLabel>
                  <div className="w-[500px] font-bold text-[18px] mt-2 text-white">Chat with us now</div>
                </div>
              </div> 
            </HalfCard>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Support