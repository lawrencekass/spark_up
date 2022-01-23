import React, { useEffect, useState } from "react";
import AppLayout from "../../../Components/AppLayout/AppLayout";
import AppBreadcrumbs from "../../../Components/BreadCrumbs/AppBreadCrumbs";
import MaterialTable from "material-table";
import Popup from "../../../Components/Reusables/Popup";

function ActiveLoans(props) {
  const { history } = props;
  const [loading, setLoading] = useState(true);
  const columns = [
    {
      title: "Photo",
      field: "photo",
      render: (rowData) => (
        <img
          src={rowData.photo}
          style={{ width: 40, borderRadius: "20%" }}
          alt="profile"
        />
      ),
    },
    { title: "Name", field: "name" },
    { title: "Location", field: "location" },
    { title: "Business", field: "business" },
    { title: "Loan Amount", field: "loanamount" },
    { title: "Last Payment", field: "lastpayment" },
    { title: "Loan Outstanding", field: "loanoutstanding" },
    { title: "Next Payment date", field: "nextpaymentdate" },
    { title: "Status", field: "status" },
  ];
  const [userList, setUserList] = useState([]);
  const [info, setInfo] = useState("");
  // useEffect(() => {
  //   firebase
  //     .firestore()
  //     .collection("users")
  //     .where("accountStatus", "==", 200)
  //     .onSnapshot((snapShot) => {
  //       const postData = [];
  //       snapShot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
  //       setUserList(postData);
  //      setLoading(false);
  //     });
  // }, []);
  // console.log(userList);
  // var data = userList.map((item) => {
  //   let userData = {
  //     id: item.id,
  //     photo: item.selfie,
  //     name: item.firstName + " " + item.lastName,
  //     createddate: item.createdOn,
  //     locality: item.currentLocality,
  //     number: item.phoneNumber,
  //     dob: item.DOB,
  //     accountStatus: item.accountStatus,
  //     cityYouWereBorn: item.cityYouWereBorn,
  //     divorced: item.divorced,
  //     idBack: item.idBack,
  //     idFront: item.idFront,
  //     married: item.married,
  //     numberOfChildren: item.numberOfChildren,
  //     province: item.province,
  //     shortBio: item.shortBio,
  //     widow: item.widow,
  //   };
  //   return userData;
  // });
  const [openpopup, setOpenpopup] = useState(false);

  const handleOpen = () => {
    setOpenpopup(true);
  };
  return (
    <AppLayout>
      <AppBreadcrumbs path={history} />
      <MaterialTable
        title="Active Loans"
        columns={columns}
        //data={data}
        onRowClick={(event, rowData) => {
          setInfo(rowData);
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
        title="Account Details"
        openpopup={openpopup}
        setOpenpopup={setOpenpopup}
      ></Popup>
    </AppLayout>
  );
}

export default ActiveLoans;
