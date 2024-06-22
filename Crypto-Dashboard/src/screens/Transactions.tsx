import SideNav from "../components/SideNav";
import Navbar from "../components/Navbar";
import FullCard from "../components/FullCard";
import BigLabel from "../components/labels/BigLabel";
import SmallLabel from "../components/labels/SmallLabel";
import Button from "../components/Button";

function Transactions() {
  return (
    <div className="w-full h-screen bg-light-gray">

      <Navbar />

      <div className="flex">
        <SideNav />

        <div className="ml-[20%] mt-[80px] w-9/12 mx-auto flex flex-col gap-7">
          <div className="flex items-center justify-end">
            <Button>
              <div className="text-white font-bold text-sm flex gap-3 items-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.58402 7.99291L7.38402 10.8298C7.54877 10.9927 7.76984 11.0838 8.00002 11.0838C8.23021 11.0838 8.45128 10.9927 8.61602 10.8298L11.416 7.99291C11.4994 7.91093 11.5657 7.81282 11.611 7.70439C11.6563 7.59597 11.6796 7.47943 11.6796 7.3617C11.6796 7.24397 11.6563 7.12744 11.611 7.01901C11.5657 6.91058 11.4994 6.81247 11.416 6.7305C11.2348 6.60751 11.017 6.55234 10.8 6.57447H8.86802V1.87943C8.86802 1.64619 8.77657 1.42251 8.61379 1.25758C8.45101 1.09265 8.23023 1 8.00002 1C7.76982 1 7.54904 1.09265 7.38626 1.25758C7.22347 1.42251 7.13203 1.64619 7.13203 1.87943V6.57447H5.20002C5.04577 6.59125 4.89862 6.64896 4.77341 6.74177C4.6482 6.83458 4.54937 6.95921 4.48689 7.10308C4.42441 7.24695 4.40049 7.40498 4.41755 7.56121C4.4346 7.71744 4.49202 7.86635 4.58402 7.99291Z" fill="white"/>
<path d="M13.95 9.68079C13.6715 9.68079 13.4045 9.79287 13.2075 9.99237C13.0106 10.1919 12.9 10.4625 12.9 10.7446V12.5177C12.9 12.6117 12.8631 12.7019 12.7975 12.7684C12.7318 12.8349 12.6428 12.8723 12.55 12.8723H3.45C3.35717 12.8723 3.26815 12.8349 3.20251 12.7684C3.13687 12.7019 3.1 12.6117 3.1 12.5177V10.7446C3.1 10.4625 2.98938 10.1919 2.79246 9.99237C2.59555 9.79287 2.32848 9.68079 2.05 9.68079C1.77152 9.68079 1.50445 9.79287 1.30754 9.99237C1.11062 10.1919 1 10.4625 1 10.7446L1 12.5177C1.00368 13.1749 1.26298 13.8041 1.72165 14.2688C2.18032 14.7335 2.80135 14.9962 3.45 14.9999H12.55C13.1986 14.9962 13.8197 14.7335 14.2784 14.2688C14.737 13.8041 14.9963 13.1749 15 12.5177V10.7446C15 10.4625 14.8894 10.1919 14.6925 9.99237C14.4955 9.79287 14.2285 9.68079 13.95 9.68079Z" fill="white"/>
</svg>

                Export CSV
              </div>
            </Button>
          </div>
          <FullCard>
            <div className="relative">
              <div className="relative w-full flex justify-between mt-5 mb-4 border-b border-b-2">
                <ul className="relative -bottom-[1px] flex *:font-bold *:text-sm ">
                  <li className="border-b border-b-2 border-b-purp pb-4 px-6"><span className="mr-4">All</span> <SmallLabel>349</SmallLabel></li>
                  <li className="px-6"><span className="mr-4">Deposit</span> <SmallLabel>114</SmallLabel></li>
                  <li className="px-6"><span className="mr-4">Withdraw</span> <SmallLabel>213</SmallLabel></li>
                  <li className="px-6"><span className="mr-4">Trade</span> <SmallLabel>22</SmallLabel></li>
                </ul>
                <div className="relative">
                  <svg className="absolute left-0 top-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.3107 11.3756C9.93136 11.6664 9.50954 11.9146 9.04925 12.1103C6.10881 13.3598 2.71204 11.9893 1.46236 9.04893C0.21269 6.10859 1.58337 2.71199 4.5238 1.4624C7.46424 0.2128 10.861 1.58338 12.1107 4.52372C12.9558 6.51228 12.6025 8.70953 11.3756 10.3102L14.7794 13.7143C15.0735 14.0085 15.0735 14.4854 14.7794 14.7795C14.4852 15.0736 14.0083 15.0736 13.7142 14.7794L10.3107 11.3756ZM2.84873 8.45977C1.92448 6.28511 2.93821 3.77296 5.11301 2.84873C7.28781 1.92451 9.80007 2.93823 10.7243 5.11288C11.421 6.75201 11.0166 8.58288 9.84389 9.78099C9.83294 9.79074 9.82221 9.80086 9.81171 9.81136C9.8011 9.82197 9.79087 9.83282 9.78102 9.84389C9.41024 10.2072 8.96664 10.5086 8.46004 10.7239C6.28524 11.6481 3.77298 10.6344 2.84873 8.45977Z" fill="#797E82"/></svg>
                  <input type="text" placeholder="Search ..." className="px-7 appearance-none outline-none" />
                </div>
              </div>

              <table className="w-full h-full">
                <thead className="*:text-slate-500 *:text-start *:pb-4 border-b border-b-2">
                  <th>ID</th>
                  <th>Date & Time <svg className="inline w-7" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.81089 8.3764C6.41175 8.92946 5.58825 8.92946 5.18912 8.37641L2.8139 5.08521C2.3366 4.42384 2.80917 3.5 3.62478 3.5L8.37522 3.5C9.19083 3.5 9.6634 4.42384 9.1861 5.0852L6.81089 8.3764Z" fill="#797E82"/></svg></th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Status</th>
                </thead>

                <tbody className="*:mt-7">
                  <tr colspan="5" className="h-7"></tr>
                  <tr className="*:font-bold">
                    <td>HD82NA2H</td>
                    <td>
                      <span>2022-06-09</span>
                      <span className="block font-normal text-sm text-slate-600">07:06 PM</span>
                    </td>
                    <td>
                      <span>INR Deposit</span>
                      <span className="block font-normal text-sm text-slate-600">E-Transfer</span>
                    </td>
                    <td>+ 81,123.10</td>
                    <td>
                      <BigLabel style="bg-slate-700 text-white">Pending</BigLabel>
                    </td>
                  </tr>

                  <tr colspan="5" className="h-7"></tr>
                  <tr className="*:font-bold">
                    <td>HD82NA2H</td>
                    <td>
                      <span>2022-06-09</span>
                      <span className="block font-normal text-sm text-slate-600">07:06 PM</span>
                    </td>
                    <td>
                      <span>INR Deposit</span>
                      <span className="block font-normal text-sm text-slate-600">E-Transfer</span>
                    </td>
                    <td>+ 81,123.10</td>
                    <td>
                      <BigLabel style="bg-yellow-500 text-white">Processing</BigLabel>
                    </td>
                  </tr>

                  <tr colspan="5" className="h-7"></tr>
                  <tr className="*:font-bold">
                    <td>HD82NA2H</td>
                    <td>
                      <span>2022-06-09</span>
                      <span className="block font-normal text-sm text-slate-600">07:06 PM</span>
                    </td>
                    <td>
                      <span>INR Deposit</span>
                      <span className="block font-normal text-sm text-slate-600">E-Transfer</span>
                    </td>
                    <td>+ 81,123.10</td>
                    <td>
                      <BigLabel style="bg-red-600 text-white">Cancelled</BigLabel>
                    </td>
                  </tr>

                  <tr colspan="5" className="h-7"></tr>
                  <tr className="*:font-bold">
                    <td>HD82NA2H</td>
                    <td>
                      <span>2022-06-09</span>
                      <span className="block font-normal text-sm text-slate-600">07:06 PM</span>
                    </td>
                    <td>
                      <span>Buy</span>
                    </td>
                    <td>
                      <span>+ 12.4851 BTC</span>
                      <span className="text-sm text-slate-600 block">- $81,123.10</span>
                    </td>
                    <td>
                      <BigLabel style="bg-green-600 text-white">Completed</BigLabel>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FullCard>
        </div>
      </div>

    </div>
  );
}

export default Transactions