import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { IoTrashOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { HiOutlineArrowRight } from "react-icons/hi";
import profile from "../../Images/profile.jpg";

// Example items, to simulate fetching from another resources.

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <tr className="border-b-[1px] ">
            <td className="w-fit">
              <input
                type="checkbox"
                className="text-[#E4E7EC] border-[#E4E7EC] border-[1px] ml-5 w-fit"
              />
            </td>
            <td className="font-Poppins-Regular text-black items-center text-base font-semibold py-6 flex mt-2 ">
              <img src={profile} className="rounded-full w-8 h-8 mr-2" />
              <p>{item.name}</p>
            </td>
            <td className="font-Poppins-Regular text-black text-base font-semibold py-6 ">
              {item.phone}
            </td>
            <td className="font-Poppins-Regular text-black text-base font-semibold py-6 pl-2">
              {item.address}
            </td>
            <td className="font-Poppins-Regular text-black text-base font-semibold py-6">
              {item.code}
            </td>

            <td>
              <div className="flex space-x-2 py-4">
                <IoTrashOutline className="text-2xl text-[#F04438] cursor-pointer" />
              </div>
            </td>
          </tr>
        ))}
    </>
  );
}

function LabPangration({ itemsPerPage, Data }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [OpenOutProduct, setOpenOutProduct] = useState(false);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = Data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(Data.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % Data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );

    setItemOffset(newOffset);
  };

  return (
    <div className="overflow-x-scroll">
      <table className="w-full h-full mt-8 bg-white rounded-t-2xl ">
        <tr className="border-b-[1px] w-full">
          <td className="w-[5%] pr-2 lg:pr-0">
            <input
              type="checkbox"
              className="text-[#E4E7EC] border-[#E4E7EC] border-[1px] ml-5 "
            />
          </td>
          <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2 pl-2 pr-20 lg:pr-0">
            Lab name
          </td>
          <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2 pr-20 lg:pr-0 ">
            Phone number
          </td>
          <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2 w-[26%] pr-20 lg:pr-0">
            Address
          </td>
          <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2   pr-20 lg:pr-0">
            Code
          </td>
          <td className="text-sm text-[#98A2B3] font-Poppins-Regular py-2 w-[9%] pr-20 lg:pr-0">
            Action
          </td>
        </tr>
        <Items currentItems={currentItems} className="w-full bg-white" />
      </table>

      <ReactPaginate
        breakLabel={<BsThreeDots />}
        nextLabel={
          <div className="bg-white py-[0.4rem] px-2  rounded-lg">
            <HiOutlineArrowRight className="bg-white text-xl" />
          </div>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel={
          <div className="bg-white py-[0.4rem] px-2  rounded-lg">
            <HiOutlineArrowLeft className="bg-white text-xl" />
          </div>
        }
        pageClassName="bg-white  font-Poppins-Regular py-1 px-3 rounded-lg"
        containerClassName="flex justify-center space-x-5 mb-2 border-gray-400 w-full  bottom-0   items-center mt-10"
        activeClassName="bg-[#B7C835] text-[#FFFFFF] "
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
export default LabPangration;
