import React from 'react';
import { saveAs } from 'file-saver';

const XMLReport = ({ reportData }) => {
  const generateXML = () => {
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

    const seriousnessMapping = {
      "Death": "E.i.3.2a",
      "Life threatening": "E.i.3.2b",
      "Hospitalization": "E.i.3.2c",
      "Disability": "E.i.3.2d",
    };

    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
    <Field>
    <Front_end_Fields>Patient_initials</Front_end_Fields>
    <Element_Number>D.1</Element_Number>
    <Element_Name>${initials}</Element_Name>
    </Field>
    <Field>
    <Front_end_Fields>Country</Front_end_Fields>
    <Element_Number>C.2.r.3</Element_Number>
    <Element_Name>${country}</Element_Name>
    </Field>
    <Field>
    <Front_end_Fields>Date_of_Birth</Front_end_Fields>
    <Element_Number>D.2.1</Element_Number>
    <Element_Name>${dob}</Element_Name>
    </Field>
    <Field>
    <Front_end_Fields>Age</Front_end_Fields>
    <Element_Number>D.2.2a</Element_Number>
    <Element_Name>${age}</Element_Name>
    </Field>
    <Field>
    <Front_end_Fields>Age_Unit</Front_end_Fields>
    <Element_Number>D.2.2b</Element_Number>
    <Element_Name>${ageUnit}</Element_Name>
    </Field>
    <Field>
    <Front_end_Fields>Sex</Front_end_Fields>
    <Element_Number>D.5</Element_Number>
    <Element_Name>${sex}</Element_Name>
    </Field>
    <Field>
    <Front_end_Fields>Reaction_Onset</Front_end_Fields>
    <Element_Number>E.i.4</Element_Number>
    <Element_Name>${reactionOnset}</Element_Name>
    </Field>
    <Field>
    <Front_end_Fields>Reaction</Front_end_Fields>
    <Element_Number>E.i.1</Element_Number>
    <Element_Name>${reaction}</Element_Name>
    </Field>
    <Field>
    <Front_end_Fields>Seriousness_criteria</Front_end_Fields>
    <Element_Number>${seriousnessMapping[seriousness]}</Element_Number>
    <Element_Name>${seriousness}</Element_Name>
    </Field>
    `;

    const blob = new Blob([xmlContent], { type: 'application/xml' });
    saveAs(blob, 'report.xml');
  };

  return (
    <button type="button" onClick={generateXML}>
      Generate XML Report
    </button>
  );
};

export default XMLReport;
