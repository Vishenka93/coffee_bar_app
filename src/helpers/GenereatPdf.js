import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

function GenereatPdf(dd) {
   //  const dd = {
   //      content: [
   //          "First paragraph",
   //          "Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines",
   //      ],
   //  };


    pdfMake.createPdf(dd).download();
}




export default GenereatPdf;
