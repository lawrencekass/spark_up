import React, { useEffect, useState } from "react";
import AppLayout from "../../../Components/AppLayout/AppLayout";
import AppBreadcrumbs from "../../../Components/BreadCrumbs/AppBreadCrumbs";
import MaterialTable from "material-table";
import Popup from "../../../Components/Reusables/Popup";
import LoanApplicationDetails from "./LoanApplicationDetails/LoanApplicationDetails";
import { Button } from "@mui/material";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

function LoanApplication(props) {
  const { history } = props;
  const [loading, setLoading] = useState(true);
  const columns = [
    {
      title: "Photo",
      field: "photo",
      render: (rowData) => (
        <img
          src={rowData.photo}
          style={{ width: 40, borderRadius: "50%" }}
          alt="profile"
        />
      ),
    },
    { title: "Name", field: "name" },
    { title: "Business", field: "business" },
    { title: "Amount requesting", field: "amountrequesting" },
    { title: "Location", field: "location" },
    { title: "Loan submited", field: "loansubmited" },
    { title: "Review", field: "review" },
    { title: "Approve", field: "approve" },
    { title: "Reject", field: "reject" },
    { title: "Training", field: "training" },
  ];
  // const data = [
  //   {
  //     photo: "https://avatars0.githubusercontent.com/u/7895451?s=460&v=4",
  //     name: "Jamie Leannon",
  //     amountrequesting: "10/17/2021",
  //     location: "Zambia",
  //     loansubmited: "+260 111 222 333",
  //     review: <Button variant="contained">Review</Button>,
  //     approve: <Button variant="contained">Approve</Button>,
  //     reject: <Button variant="contained">Reject</Button>,
  //   },
  //   {
  //     photo: "https://avatars0.githubusercontent.com/u/7895451?s=460&v=4",
  //     name: "Jamie Leannon",
  //     createddate: "10/17/2021",
  //     locality: "Zambia",
  //     number: "+260 111 222 333",
  //   },
  //   {
  //     photo: "https://avatars0.githubusercontent.com/u/7895451?s=460&v=4",
  //     name: "Some Leannon",
  //     createddate: "10/17/2021",
  //     locality: "Zambia",
  //     number: "+260 111 222 333",
  //   },
  // ];
  const [loanList, setLoanList] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("loanApplications")
      .onSnapshot((snapShot) => {
        const loanData = [];
        snapShot.forEach((doc) =>
          loanData.push({ ...doc.data().result, id: doc.id })
        );
        setLoanList(loanData);
        setLoading(false);
      });
  }, []);

  console.log(loanList);
  var data = loanList.map((item) => {
    let userData = {
      photo: item.selfie,
      name: item.firstName + " " + item.lastName,
      business: item.bussinessexpenseName,
      amountrequesting: item.requestAmount,
      location: item.location,
      loansubmited: "2021-11-20",
      review: <Button variant="contained">Review</Button>,
      approve: <Button variant="contained">Approve</Button>,
      reject: <Button variant="contained">Reject</Button>,
    };
    return userData;
  });
  const [openpopup, setOpenpopup] = useState(false);

  const handleOpen = () => {
    setOpenpopup(true);
  };

  return (
    <AppLayout>
      <AppBreadcrumbs path={history} />
      <MaterialTable
        title="Loan Application"
        columns={columns}
        data={data}
        onRowClick={(event, rowData) => {
          handleOpen();
        }}
        options={{
          headerStyle: {
            backgroundColor: "#000000",
            color: "#FFF",
            "&:hover": {
              color: "#fff",
            },
          },
          rowStyle: (x) => ({
            backgroundColor: x.tableData.id % 2 === 0 ? "#808080" : "#c8c8c8",
          }),
        }}
        isLoading={loading}
      />
      <Popup
        title="Loan Application Details"
        openpopup={openpopup}
        setOpenpopup={setOpenpopup}
      >
        <LoanApplicationDetails />
      </Popup>
    </AppLayout>
  );
}

export default LoanApplication;
