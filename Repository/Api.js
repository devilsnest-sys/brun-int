import axios from "axios";

const Baseurl = "https://brun-api-5yk6o.ondigitalocean.app/";

// Api Modules
export const getApi = async ({
  url,
  setResponse,
  setLoading,
  additionalFunctions = [],
}) => {
  if (setLoading) {
    setLoading(true);
  }
  try {
    const res = await axios.get(`${Baseurl}${url}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    setResponse(res.data);
    additionalFunctions.forEach((func) => {
      if (typeof func === "function") {
        func();
      }
    });
  } catch (e) {
    console.log(e);
  } finally {
    if (setLoading) {
      setLoading(false);
    }
  }
};

//   export const editApi = async ({
//     url,
//     payload,
//     setLoading,
//     additionalFunctions = [],
//     successMsg,
//     errorMsg,
//   }) => {
//     if (setLoading) {
//       setLoading(true);
//     }
//     try {
//       const res = await axios.put(`${Baseurl}${url}`, payload, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
//         },
//       });
//       if (res) {
//         if (successMsg) {
//           showMsg("", successMsg, "success");
//         }
//         additionalFunctions.forEach((func) => {
//           if (typeof func === "function") {
//             func(res?.data);
//           }
//         });
//       }
//     } catch (e) {
//       const msg = e?.response?.data?.message || "Something went worng !";
//       if (errorMsg && e?.response?.data?.message === undefined) {
//         showMsg("", errorMsg, "danger");
//       } else {
//         showMsg("", msg, "danger");
//       }
//     } finally {
//       if (setLoading) {
//         setLoading(false);
//       }
//     }
//   };

export const postApi = async ({
  url,
  payload,
  setLoading,
  additionalFunctions = [],
  successMsg,
  errorMsg,
}) => {
  if (setLoading) {
    setLoading(true);
  }
  try {
    const res = await axios.post(`${Baseurl}${url}`, payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    if (res) {
      if (successMsg) {
        alert(successMsg);
      }
      additionalFunctions.forEach((func) => {
        if (typeof func === "function") {
          func(res?.data);
        }
      });
    }
  } catch (e) {
    const msg = e?.response?.data?.message || "Something went worng !";
    if (errorMsg && e?.response?.data?.message === undefined) {
      alert(errorMsg);
    } else {
      alert(msg);
    }
  } finally {
    if (setLoading) {
      setLoading(false);
    }
  }
};

export const patchApi = async ({
  url,
  payload,
  setLoading,
  additionalFunctions = [],
  successMsg,
  errorMsg,
}) => {
  if (setLoading) {
    setLoading(true);
  }
  try {
    const res = await axios.patch(`${Baseurl}${url}`, payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    if (res) {
      if (successMsg) {
        alert(successMsg);
      }
      additionalFunctions.forEach((func) => {
        if (typeof func === "function") {
          func(res?.data);
        }
      });
    }
  } catch (e) {
    const msg = e?.response?.data?.message || "Something went worng !";
    if (errorMsg && e?.response?.data?.message === undefined) {
      alert(errorMsg);
    } else {
      alert(msg);
    }
  } finally {
    if (setLoading) {
      setLoading(false);
    }
  }
};

export const deleteApi = async ({
  url,
  payload,
  setLoading,
  additionalFunctions = [],
  successMsg,
  errorMsg,
}) => {
  if (setLoading) {
    setLoading(true);
  }
  try {
    const res = await axios.delete(`${Baseurl}${url}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    if (res) {
      if (successMsg) {
        alert(successMsg);
      }
      additionalFunctions.forEach((func) => {
        if (typeof func === "function") {
          func(res?.data);
        }
      });
    }
  } catch (e) {
    const msg = e?.response?.data?.message || "Something went worng !";
    if (errorMsg && e?.response?.data?.message === undefined) {
      alert(errorMsg);
    } else {
      alert(msg);
    }
  } finally {
    if (setLoading) {
      setLoading(false);
    }
  }
};




//   // Module with dispatch
//   export const edit_module_redux = ({
//     url,
//     payload,
//     setLoading,
//     additionalFunctions = [],
//     successMsg,
//     errorMsg,
//     dispatchFunc = [],
//   }) => {
//     return async (dispatch) => {
//       if (setLoading) {
//         setLoading(true);
//       }
//       try {
//         const res = await axios.put(`${Baseurl}${url}`, payload, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
//           },
//         });
//         if (res) {
//           if (successMsg || res.data.msg) {
//             showMsg("", successMsg || res.data.msg, "success");
//           }
//           dispatchFunc.forEach((func) => {
//             if (typeof func === "function") {
//               dispatch(func());
//             }
//           });
//           additionalFunctions.forEach((func) => {
//             if (typeof func === "function") {
//               func();
//             }
//           });
//         }
//       } catch (e) {
//         const msg = e?.response?.data?.message || "Something went worng !";
//         if (errorMsg && e?.response?.data?.message === undefined) {
//           showMsg("", errorMsg, "danger");
//         } else {
//           showMsg("", msg, "danger");
//         }
//       } finally {
//         if (setLoading) {
//           setLoading(false);
//         }
//       }
//     };
//   };

//   export const create_module_redux = ({
//     url,
//     payload,
//     setLoading,
//     additionalFunctions = [],
//     successMsg,
//     errorMsg,
//     dispatchFunc = [],
//   }) => {
//     return async (dispatch) => {
//       if (setLoading) {
//         setLoading(true);
//       }
//       try {
//         const res = await axios.post(`${Baseurl}${url}`, payload, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
//           },
//         });
//         if (res) {
//           if (successMsg) {
//             showMsg("", successMsg, "success");
//           }
//           dispatchFunc.forEach((func) => {
//             if (typeof func === "function") {
//               dispatch(func());
//             }
//           });
//           additionalFunctions.forEach((func) => {
//             if (typeof func === "function") {
//               func();
//             }
//           });
//         }
//       } catch (e) {
//         const msg = e?.response?.data?.message || "Something went worng !";
//         if (errorMsg && e?.response?.data?.message === undefined) {
//           showMsg("", errorMsg, "danger");
//         } else {
//           showMsg("", msg, "danger");
//         }
//       } finally {
//         if (setLoading) {
//           setLoading(false);
//         }
//       }
//     };
//   };

//   export const remove_module_redux = ({
//     url,
//     setLoading,
//     additionalFunctions = [],
//     successMsg,
//     errorMsg,
//     dispatchFunc = [],
//   }) => {
//     return async (dispatch) => {
//       if (setLoading) {
//         setLoading(true);
//       }
//       try {
//         const res = await axios.delete(`${Baseurl}${url}`, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
//           },
//         });
//         if (res) {
//           if (successMsg) {
//             showMsg("", successMsg, "success");
//           }
//           dispatchFunc.forEach((func) => {
//             if (typeof func === "function") {
//               dispatch(func());
//             }
//           });
//           additionalFunctions.forEach((func) => {
//             if (typeof func === "function") {
//               func();
//             }
//           });
//         }
//       } catch (e) {
//         const msg = e?.response?.data?.message || "Something went worng !";
//         if (errorMsg && e?.response?.data?.message === undefined) {
//           showMsg("", errorMsg, "danger");
//         } else {
//           showMsg("", msg, "danger");
//         }
//       } finally {
//         if (setLoading) {
//           setLoading(false);
//         }
//       }
//     };
//   };

//   // Verify Otp
//   export const post_api_with_response = async ({
//     url,
//     payload,
//     setLoading,
//     additionalFunctions = [],
//     successMsg,
//     errorMsg,
//   }) => {
//     if (setLoading) {
//       setLoading(true);
//     }
//     try {
//       const res = await axios.post(`${Baseurl}${url}`, payload, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
//         },
//       });
//       if (res) {
//         const data = res?.data;
//         if (successMsg) {
//           showMsg("", successMsg, "success");
//         }
//         additionalFunctions.forEach((func) => {
//           if (typeof func === "function") {
//             func(data);
//           }
//         });
//       }
//     } catch (e) {
//       const msg = e?.response?.data?.message || "Something went worng !";
//       if (errorMsg && e?.response?.data?.message === undefined) {
//         showMsg("", errorMsg, "danger");
//       } else {
//         showMsg("", msg, "danger");
//       }
//     } finally {
//       if (setLoading) {
//         setLoading(false);
//       }
//     }
//   };
