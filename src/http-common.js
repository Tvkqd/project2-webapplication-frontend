import axios from "axios";

var baseurl = "";
if(process.env.NODE_ENV === "development") {
  baseurl = "http://localhost/courses-t1/"
}
else
{
  baseurl = "/courses-t1/";
}

export default axios.create({
  baseURL: baseurl,
   //origin: "http://localhost:3001/course-t1"
  headers: {
    "Content-type": "application/json"
  }
});