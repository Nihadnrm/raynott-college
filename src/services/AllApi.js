import base_url from "./base_url";
import commonApi from "./commonApi";

// course
export const addcourseApi = async (data) => {
   return await commonApi(`${base_url}/addcourse`,"POST",data)

}
export const getcourseApi = async () => {
   return await commonApi(`${base_url}/getcourse`,"GET")

}

// faculty

export const addfacultyApi = async (data) => {
   return await commonApi(`${base_url}/addfaculty`,"POST",data)

}
export const getfacultyApi = async () => {
   return await commonApi(`${base_url}/getfaculty`,"GET")

}
export const deletefacultyApi = async (id) => {
   return await commonApi(`${base_url}/deletefaculty/${id}`,"DELETE")

}



// event

export const addEventApi = async (data) => {
   return await commonApi(`${base_url}/addevent`,"POST",data)

}
export const getEventApi = async () => {
   return await commonApi(`${base_url}/getevent`,"GET")

}
export const deleteEventApi = async (id) => {
   return await commonApi(`${base_url}/deletevent/${id}`,"DELETE")

}


// Contact

export const addContactApi = async (data) => {
   return await commonApi(`${base_url}/addcontact`,"POST",data)

}
export const getContactApi = async () => {
   return await commonApi(`${base_url}/getcontact`,"GET")

}





