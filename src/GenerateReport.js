import React from 'react';
import htmlToPdfmake from 'html-to-pdfmake';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const GenerateReport = ({ reportData }) => {
  const generatePDF = () => {
    const {
      initials,
      country,
      dob,
      age,
      ageUnit,
      sex,
      reactionOnset,
      reaction,
      seriousness,
      dobDay,
      dobMonth,
      dobYear,
      reactionOnsetDay,
      reactionOnsetMonth,
      reactionOnsetYear,
    } = reportData;

    const checked = `<svg width="10px" height="10px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <title>ic_fluent_checkbox_checked_24_regular</title>
    <desc>Created with Sketch.</desc>
    <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="ic_fluent_checkbox_checked_24_regular" fill="#212121" fill-rule="nonzero">
            <path d="M18.25,3 C19.7687831,3 21,4.23121694 21,5.75 L21,18.25 C21,19.7687831 19.7687831,21 18.25,21 L5.75,21 C4.23121694,21 3,19.7687831 3,18.25 L3,5.75 C3,4.23121694 4.23121694,3 5.75,3 L18.25,3 Z M18.25,4.5 L5.75,4.5 C5.05964406,4.5 4.5,5.05964406 4.5,5.75 L4.5,18.25 C4.5,18.9403559 5.05964406,19.5 5.75,19.5 L18.25,19.5 C18.9403559,19.5 19.5,18.9403559 19.5,18.25 L19.5,5.75 C19.5,5.05964406 18.9403559,4.5 18.25,4.5 Z M10,14.4393398 L16.4696699,7.96966991 C16.7625631,7.6767767 17.2374369,7.6767767 17.5303301,7.96966991 C17.7965966,8.23593648 17.8208027,8.65260016 17.6029482,8.94621165 L17.5303301,9.03033009 L10.5303301,16.0303301 C10.2640635,16.2965966 9.84739984,16.3208027 9.55378835,16.1029482 L9.46966991,16.0303301 L6.46966991,13.0303301 C6.1767767,12.7374369 6.1767767,12.2625631 6.46966991,11.9696699 C6.73593648,11.7034034 7.15260016,11.6791973 7.44621165,11.8970518 L7.53033009,11.9696699 L10,14.4393398 L16.4696699,7.96966991 L10,14.4393398 Z" id="🎨Color">
</path>
        </g>
    </g>
</svg>`
    const unchecked = `<svg width="10px" height="10px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <title>ic_fluent_checkbox_unchecked_24_filled</title>
    <desc>Created with Sketch.</desc>
    <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="ic_fluent_checkbox_unchecked_24_filled" fill="#212121" fill-rule="nonzero">
            <path d="M6,3 L18,3 C19.6568542,3 21,4.34314575 21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 Z M6,5 C5.44771525,5 5,5.44771525 5,6 L5,18 C5,18.5522847 5.44771525,19 6,19 L18,19 C18.5522847,19 19,18.5522847 19,18 L19,6 C19,5.44771525 18.5522847,5 18,5 L6,5 Z" id="🎨Color">
</path>
        </g>
    </g>
</svg>`

    // Create HTML content for the report
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CIOMS Form</title>
        <style>
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          }
          th,
          td {
            border: 1px solid black;
            padding: 5px;
            text-align: center;
            font-size: 5px;
          }
          .des_rec {
            border: 1px solid black;
            vertical-align: top; 
            text-align: left;
            font-size: 5px;
          }
          .check_all {
            border: 1px solid black;
            vertical-align: top; 
            text-align: left;
            padding: 5px;
            font-size: 5px;
          }
          .checkbox {
            display: flex;
            align-items: center;
          }
          .checkbox input {
            margin-right: 5px;
          }
        </style>
      </head>
      <body>
        <div style="text-align: right;">CIOMS FORM</div>
        <table style="width:100%">
          <tr>
            <td   style="height:100px; text-align: center; font-size:10px; margin:50px; " rowspan="4" colspan="20"><text>SUSPECT ADVERSE REACTION REPORT</text></td>
            <td style="height:33px" colspan="30"></td>
          </tr>
          <tr><td style="height:33px" colspan="30"></td></tr>
          <tr style="height:30px">
            <td colspan="14"></td>
            <td colspan="1"></td>
            <td colspan="1"></td>
            <td colspan="1"></td>
            <td colspan="1"></td>
            <td colspan="1"></td>
            <td colspan="1"></td>
            <td colspan="1"></td>
            <td colspan="1"></td>
            <td colspan="1"></td>
            <td colspan="1"></td>
            <td colspan="1"></td>
            <td colspan="1"></td>
            <td colspan="1"></td>
            <td colspan="1"></td>
            <td colspan="1"></td>
            <td colspan="1"></td>
          </tr>
        </table>
    
        <table>
          <caption>I. REACTION INFORMATION</caption>
          <tr>
            <td style="font-size:10px" colspan="3" rowspan="2">1. PATIENT INITIALS <br/>(first, last)<br/> ${initials}</td>
            <td style="font-size:10px" colspan="3" rowspan="2">1a. COUNTRY<br/>${country}</td>
            <td style="font-size:10px" colspan="3">2. DATE OF BIRTH</td>
            <td style="font-size:10px" colspan="3" rowspan="2">2a. AGE <br/>${ageUnit}<br/>${age}</td>
            <td style="font-size:10px" colspan="3" rowspan="2">3. SEX<br/>${sex}</td>
            <td style="font-size:10px" colspan="3">4-6. REACTION ONSET</td>
            <td style="font-size:10px" class="check_all" colspan="6" rowspan="4">
              <div style="font-size:10px" >8-12 CHECK ALL APPROPRIATE TO ADVERSE REACTION</div>
              <div type="checkbox"/> ${seriousness.includes('Death') ? checked : unchecked} PATIENT DIED<br/>
              <div type="checkbox"/> ${seriousness.includes('Hospitalization') ? checked : unchecked} INVOLVED OR PROLONGED INPATIENT HOSPITALISATION<br/>
              <div type="checkbox"/> ${seriousness.includes('Disability') ? checked : unchecked} INVOLVED PERSISTENCE OR SIGNIFICANT DISABILITY OR INCAPACITY<br/>
              <div type="checkbox"/> ${seriousness.includes('Life threatening') ? checked : unchecked} LIFE THREATENING
              
           </td>
          </tr>
          <tr>
          <td style="font-size:10px">Date<br/>${dobDay}</td>
          <td style="font-size:10px">Month<br/>${dobMonth}</td>
          <td style="font-size:10px">Year<br/>${dobYear}</td>
          <td style="font-size:10px">Date<br/>${reactionOnsetDay}</td>
          <td style="font-size:10px">Month<br/>${reactionOnsetMonth}</td>
          <td style="font-size:10px">Year<br/>${reactionOnsetYear}</td>
          </tr>
          <tr>
            <td style="font-size:10px" class="des_rec" colspan="18" rowspan="3">
              7 + 13. DESCRIBE REACTION(S) (including relevant tests/lab data)<br/>${reaction}
            </td>
          </tr>
        </table>
      </body>
    </html>
    
    `

    // Convert HTML to pdfMake format
    const pdfContent = htmlToPdfmake(htmlContent,{
        tableAutoSize:true,
      });

    const docDefinition = {
      content: pdfContent,
    };

    // Generate PDF
    pdfMake.createPdf(docDefinition).download('report.pdf');
  };

  return (
    <button type="button" onClick={generatePDF}>
      Generate Report
    </button>
  );
};

export default GenerateReport;
