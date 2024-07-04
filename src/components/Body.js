import React, { useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { IMAGE_SCANNER, IMAGE_SIGNATURE, IMAGE_TATA } from "../utils/constants";

const Body = () => {
  const [isLoading, setIsLoading] = useState(false);


  const handleDownloadPdf = () => {
    setIsLoading(true);
    const input = document.getElementById("table");

    // Ensure all images are loaded before capturing the canvas
    const loadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
      });
    };

    Promise.all([
      loadImage(IMAGE_TATA),
      loadImage(IMAGE_SCANNER),
      loadImage(IMAGE_SIGNATURE),
    ]).then(() => {
      html2canvas(input, { useCORS: true }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("invoice.pdf");
        setIsLoading(false);
      });
    });
  };

  return (
    <>
      <div className=" w-[98%] p-10" id="table">
        <div className="flex justify-end border border-gray-950 pb-6 p-3">
          <h1 className="text-3xl mr-[30rem] text-blue-700">Invoice mail</h1>
          <h4 className="table">ORIGNAL FOR RECIPIENT</h4>
        </div>

        {/* 1st section  */}
        <div className="flex w-[99.98%] justify-evenly border border-gray-700">
          <div className="flex border border-gray-900 w-full p-4">
            <div className="image">
              <img className="w-28 h-28" src={IMAGE_TATA} alt="Logo" />
            </div>
            <div className="ml-6">
              <h1 className="text-xl">TATA MOTORS LIMITED</h1>
              <p>GSTIN 27AAACT2727Q1ZW</p>
              <p>Nigadi Bhosari Limited</p>
              <p>Pune 27-MAHARASTRA, 415015</p>
              <p>Mobile 9999999999</p>
            </div>
          </div>
          <div className=" border border-gray-700 w-full">
            <div className="flex justify-evenly  border-y-2 border-gray-700 w-full h-20  ">
              <div className="border-x border-gray-700 w-full">
                <h3 className="ml-4">Invoice #</h3>
                <p className="ml-4">INV-8</p>
              </div>
              <div className="w-full border-x border-gray-700">
                <h3 className="ml-4">Invoice #</h3>
                <p className="ml-4">INV-8</p>
              </div>
            </div>
            <div className="flex justify-evenly  border-y-2 border-gray-700 w-full h-20 ">
              <div className="border-x border-gray-700 w-full">
                <h3 className="ml-4">Invoice #</h3>
                <p className="ml-4">INV-8</p>
              </div>
              <div className="w-full border-x border-gray-700">
                <h3 className="ml-4">Invoice #</h3>
                <p className="ml-4">INV-8</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd section  */}
        <div className="flex justify-normal border border-gray-900 w-full">
          <div className="border border-gray-900 w-[46.8rem] p-5">
            <h2>Customer Details</h2>
            <p>Shaiwini</p>
            <p>Biling address</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
              soluta qui sunt quia.
            </p>
            <p>PH no - 999999999</p>
          </div>
          <div className="flex justify-evenly border border-gray-950">
            <div className="border border-gray-950 p-3">
              <h4>Shopping Add</h4>
              <p>Lorem, ipsum dolor sit amet consectetur.</p>
              <p>Lorem, ipsum dolor sit.</p>
              <p>Lorem, ipsum dolor sit consectetur.</p>
            </div>
            <div className="border border-gray-900 p-5 w-[26.2rem]">
              <h2>Reference</h2>
            </div>
          </div>
        </div>

        {/* 3rd section  */}
        <div className="flex border border-gray-950 h-96">
          <div className="flex flex-col w-[4rem] border border-gray-950">
            <h1 className="ml-2">#</h1>
            <h1 className="mt-6 ml-2">1</h1>
            <h1 className="mt-8 ml-2">2</h1>
          </div>

          <div className="flex flex-col w-[20rem] border-l-1 border-gray-950">
            <h1 className="ml-2 font-bold border-gray-950">Items</h1>
            <h1 className="font-bold text-xl mt-5 ml-3">Tata Neason</h1>
            <h1 className="font-bold text-xl mt-8 ml-3">DECARBONSING GASKET KIT</h1>
            <p>part no - 768787</p>
            <p>VC no - 768787</p>
            <p>Engtime no - 76878776876</p>
          </div>

          <div className="w-[8rem] border border-gray-950">
            <h1 className="ml-2">HSN/SAC</h1>
            <h1 className=" mt-8 ml-3">6998686</h1>
            <h1 className=" mt-5 ml-3">85685666</h1>
          </div>

          <div className="w-[10rem] border border-gray-950">
            <h1 className="ml-2 font-semibold">RATE / RETURN</h1>
            <h1 className=" mt-5 ml-3">85685666</h1>
            <h1 className=" mt-8 ml-3">6998686</h1>
          </div>

          <div className="w-[8rem] border border-gray-950">
          <h1 className="ml-2 font-semibold">QTY</h1>
            <h1 className=" mt-5 ml-3">1</h1>
            <h1 className=" mt-8 ml-3">1</h1>
          </div>

          <div className="w-[15rem] border border-gray-950">
          <h1 className="ml-2 font-semibold">TAXABLE TABLE</h1>
            <h1 className=" mt-5 ml-3">5,77,343.75</h1>
            <h1 className=" mt-8 ml-3">2,177.97</h1>
          </div>
          <div className="w-[16rem] border border-gray-950">
            
          <h1 className="ml-2 font-semibold">TAX AMOUNT</h1>
            <h1 className=" mt-5 ml-3">1,161,548</h1>
            <h1 className=" mt-8 ml-3">7,61,257.2</h1>
          </div>
          <div className="ml-20 ">

          <h1 className="ml-2 font-semibold">AMOUNT</h1>
            <h1 className=" mt-5">7,19,00085</h1>
            <h1 className=" mt-8">1,61,257</h1>
          </div>
        </div>

        {/* 4th section small lines  */}
        <div className="flex justify-between font-bold border border-gray-900">
            <h1 className="border-r-2 border-gray-900 pb-3 pr-10 ml-6">Total items</h1>
            <h1 className="border-r-2 border-gray-900 pb-3 pr-7">Tax Amount</h1>
            <h1>5,80,685.25</h1>
        </div>

        {/* 5th section  */}
        <div className="flex justify-end gap-20 font-medium border items-center border-gray-900 pb-3">
            <h1>NGST 28.0%</h1>
            <h1>1,62,157</h1>
        </div>
        <div className="flex justify-end gap-20 font-bold text-xl font-serif items-center border border-gray-900 pb-3">
            <h1 className="">TOTAL</h1>
            <h1 className="">1,62,157</h1>
        </div>
        <div className="flex justify-end text-xl font-serif border border-gray-900 pb-4">
            <h1 className="">Total amount Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit amet. adipisicing elit. Ratione quod velit ab.</h1>
        </div>
        <div className="flex justify-end font-serif border border-gray-900 pb-4">
            <h1 className="font-bold text-xl">Amount Payable <span className="text-3xl ml-12 font-medium">7,42,479</span></h1>
        </div>

        {/* 6th section it has scanner nd signature */}
        <div className="flex justify-evenly border border-gray-950">
            <div className="border flex justify-start gap-[40rem] border-gray-950 w-full">
                <div className="p-5">
                <h1 className="font-bold text-2xl">Bank Details</h1>
                <p>Bank : <span>Yes B</span></p>
                <p>Account : <span>999999999999</span></p>
                <p>IFSC : <span>Yes 9999999999</span></p>
                <p>Branch : <span>somajiguda</span></p>
                </div>
                <div className="ml-[3rem] p-4">
                <img src={IMAGE_SCANNER} className="w-40 h-40" alt="" />
                </div>
            </div>
            <div className="border border-gray-950 p-5">
                <img src={IMAGE_SIGNATURE} className="w-40 h-40" alt="" />
            </div>
        </div>
        
        {/* 7th section  */}
        <div className="flex justify-evenly border border-gray-950">
            <div className="w-full border border-gray-950 p-6">NOTES:
                <h1>Thank you for the business</h1>
            </div>
            <div className="w-full border border-gray-950">
                <div className="ml-5 p-6">
                    <h1>TERMS & CONDITIONS</h1>
                <h1>1. Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <h1>2. Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <h1>3. Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                </div>
            </div>
        </div>
      </div>
      <div className="flex justify-center pb-10">
      <button onClick={handleDownloadPdf} disabled={isLoading} className="px-2 py-1 bg-black text-white rounded-xl">
        Download as PDF
      </button>
      </div>
    </> 
  );
};

export default Body;
