import { v4 } from "uuid";

const getUserAdminDetailsArr = [];

export const getUserAdminDetails = (req, res) => {
  try {
    console.log("inside", req.body);
    getUserAdminDetailsArr.push(req.body);

    const results = {
      message: "User Details reached to Backend Successfully!!! ",
      data: getUserAdminDetailsArr,
    };
    res.send(results);
    return;
  } catch (err) {
    res.send({
      message: "We are unable to take your request. Please try later",
    });
  }
};
