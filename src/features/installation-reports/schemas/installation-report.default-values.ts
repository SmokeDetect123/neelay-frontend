import {
  InstallationReportFormValues,
} from "./installation-report-form.types";

export const installationReportDefaultValues: InstallationReportFormValues =
  {
    reportDate: "",

    customerName: "",

    customerAddress: "",

    note: "",

    customerSignatureUrl: "",

    signedDate: "",

    lineItems: [
      {
        make: "",

        model: "",

        fabricationNo: "",

        fitting: "",

        qty: 1,

        agent: "",

        remarks: "",
      },
    ],
  };