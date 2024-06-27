import { useSearchParams } from "react-router-dom"
import Button from "../components/Button"

function EmailVerification() {

    const [searchParams, setSearchParams] = useSearchParams()

  return (
    <div className="flex flex-col items-center justify-center gap-4 px-6 py-4 sm:w-[300px] md:w-[500px] shadow-all rounded-xl">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.4819 21.4287C22.9277 21.7256 23.4573 21.8847 23.9999 21.8847C24.5425 21.8847 25.0722 21.7256 25.5179 21.4287L43.7735 8.28911C43.8983 8.1955 44.0006 8.07724 44.0735 7.94235C44.1465 7.80746 44.1883 7.6591 44.1962 7.50733C44.2042 7.35555 44.178 7.20391 44.1195 7.0627C44.061 6.92149 43.9715 6.794 43.8571 6.68889C42.6444 5.60994 41.0537 5.00722 39.3999 5H8.59992C6.94616 5.00722 5.35548 5.60994 4.14272 6.68889C4.02311 6.79332 3.92907 6.92186 3.86735 7.0653C3.80563 7.20873 3.77777 7.3635 3.78576 7.51849C3.79375 7.67348 3.8374 7.82485 3.91357 7.96174C3.98974 8.09862 4.09655 8.21763 4.22632 8.31022L22.4819 21.4287Z" fill="#5F00D9"/>
        <path d="M28.1536 24.8022C26.9479 25.6477 25.4933 26.1033 24 26.1033C22.5067 26.1033 21.0521 25.6477 19.8464 24.8022L3.76 13.2291C3.59657 13.1115 3.40224 13.0399 3.19879 13.0223C2.99533 13.0047 2.79078 13.0418 2.60807 13.1295C2.42535 13.2171 2.27168 13.3519 2.16428 13.5186C2.05689 13.6854 2 13.8775 2 14.0736V36.6667C2 38.3464 2.69536 39.9573 3.9331 41.145C5.17084 42.3328 6.84957 43 8.6 43H39.4C41.1504 43 42.8292 42.3328 44.0669 41.145C45.3046 39.9573 46 38.3464 46 36.6667V14.0736C46 13.8775 45.9431 13.6854 45.8357 13.5186C45.7283 13.3519 45.5746 13.2171 45.3919 13.1295C45.2092 13.0418 45.0047 13.0047 44.8012 13.0223C44.5978 13.0399 44.4034 13.1115 44.24 13.2291L28.1536 24.8022Z" fill="#5F00D9"/>
        </svg>

        <p className="font-ubuntu font-medium text-lg">Email Verification</p>

        <p className="w-[400px] text-center font-ubuntu text-slate-500">We have sent you an email verification to  <span className="font-bold text-slate-900">{searchParams.get("email")}</span>. If you didn’t receive it, click the button below.</p>

        <Button disabled={false}>Resend Email</Button>
    </div>
  )
}

export default EmailVerification