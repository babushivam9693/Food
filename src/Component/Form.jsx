import React, { useState } from "react";
const Form = () => {
  const [studentName,setStudentName]= useState()
  const [rollNumber,setRollnumber] = useState()
  const [classNameData,setClassNameData] = useState()
  const [gmail,setGmail]= useState()
  const [contact,setContact] = useState()
  const [address,setAddress] = useState()
  const [showFormDesign,setshowFormDesign] =useState()
  const [student, setStudent] = useState([
    {
      id: 1,
      Name: "Shivam",
      Class: "BSC.IT",
      Roll: 32,
      Address: "Noida",
      Contact: 9693137992,
      Gmail: "shivam@gmail.com",
    },
    {
      id: 1,
      Name: "Ankit",
      Class: "BSC.IT",
      Roll: 31,
      Address: "Delhi",
      Contact: 9693133454,
      Gmail: "shivam@gmail.com",
    },
    {
      id: 1,
      Name: "Rahul",
      Class: "BSC.IT",
      Roll: 30,
      Address: "Greater-Noida",
      Contact: 6200137992,
      Gmail: "shivam@gmail.com",
    },
    {
      id: 1,
      Name: "Sachin",
      Class: "BSC.IT",
      Roll: 22,
      Address: "Patna",
      Contact: 9693137342,
      Gmail: "shivam@gmail.com",
    },
    {
      id: 1,
      Name: "Raushan",
      Class: "BSC.IT",
      Roll: 29,
      Address: "Mumbai",
      Contact: 9693145692,
      Gmail: "shivam@gmail.com",
    },
    {
      id: 1,
      Name: "Dhrampal",
      Class: "BSC.IT",
      Roll: 26,
      Address: "Kolkata",
      Contact: 6203137992,
      Gmail: "shivam@gmail.com",
    },
    {
      id: 1,
      Name: "Badal",
      Class: "BSC.IT",
      Roll: 22,
      Address: "Jaipur",
      Contact: 9693786992,
      Gmail: "shivam@gmail.com",
    },
    {
      id: 1,
      Name: "Vinay",
      Class: "BSC.IT",
      Roll: 34,
      Address: "Ranchi",
      Contact: 9654321992,
      Gmail: "shivam@gmail.com",
    },
    {
      id: 1,
      Name: "Pritam",
      Class: "BSC.IT",
      Roll: 16,
      Address: "Puna",
      Contact: 9693199992,
      Gmail: "shivam@gmail.com",
    },
    {
      id: 1,
      Name: "Saurav",
      Class: "BSC.IT",
      Roll: 45,
      Address: "Napal",
      Contact: 9693137992,
      Gmail: "shivam@gmail.com",
    },
    {
      id: 1,
      Name: "Akash",
      Class: "BSC.IT",
      Roll: 18,
      Address: "Goa",
      Contact: 9693154992,
      Gmail: "shivam@gmail.com",
    },
    {
      Name: "Roshani",
      Class: "BSC.IT",
      Roll: 4,
      Address: "Rajasthan",
      Contact: 9453137992,
      Gmail: "shivam@gmail.com",
    },
    {
      id: 1,
      Name: "Lovely",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "shivam@gmail.com",
    },
    {
      id: 1,
      Name: "Pulkit",
      Class: "Math",
      Roll: 30,
      Address: "Japan",
      Contact: 7061546174,
      Gmail: "pulkit@gmail.com",
    },
    {
      id: 1,
      Name: "Prince",
      Class: "Bio",
      Roll: 89,
      Address: "Jharkhand",
      Contact: 8746274682,
      Gmail: "prince@gmail.com",
    },
    {
      id: 1,
      Name: "Gaurav",
      Class: "Commerce",
      Roll: 54,
      Address: "Mirjapur",
      Contact: 6200626315,
      Gmail: "Gaurav@gmail.com",
    },
    {
      id: 1,
      Name: "Piyush",
      Class: "LLPP",
      Roll: 22,
      Address: "Bajhari",
      Contact: 9867354627,
      Gmail: "piyush@gmail.com",
    },
    {
      id: 1,
      Name: "Chulbul",
      Class: "Arts",
      Roll: 78,
      Address: "Puna",
      Contact: 6200627456,
      Gmail: "chulbul@gmail.com",
    },
    {
      id: 1,
      Name: "Aman King👑",
      Class: "Math",
      Roll: 73,
      Address: "Chapardah",
      Contact: 6263786754,
      Gmail: "aman@gmail.com",
    },
    {
      id: 1,
      Name: "Nivish",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "nivish@gmail.com",
    },
    {
      id: 1,
      Name: "Sonu",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "sonu@gmail.com",
    },
    {
      id: 1,
      Name: "Khushi",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "khushi@gmail.com",
    },
    {
      id: 1,
      Name: "Kajal",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "kajal@gmail.com",
    },
    {
      id: 1,
      Name: "Juhi",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "juhi@gmail.com",
    },
    {
      id: 1,
      Name: "Anjali",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "anjali@gmail.com",
    },
    {
      id: 1,
      Name: "Raushan",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "raushan@gmail.com",
    },
    {
      id: 1,
      Name: "Ayush",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "ayush@gmail.com",
    },
    {
      id: 1,
      Name: "Anish",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "anish@gmail.com",
    },
    {
      id: 1,
      Name: "Sanjeev",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "sanjeev@gmail.com",
    },
    {
      id: 1,
      Name: "Dipu",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "dipu@gmail.com",
    },
    {
      id: 1,
      Name: "Sundram",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "sundram@gmail.com",
    },
    {
      id: 1,
      Name: "Satyam",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "satyam@gmail.com",
    },
    {
      id: 1,
      Name: "Manish",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "manish@gmail.com",
    },
    {
      id: 1,
      Name: "Nitish",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "nitish@gmail.com",
    },
    {
      id: 1,
      Name: "Niraj",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "niraj@gmail.com",
    },
    {
      id: 1,
      Name: "Sunny",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "sunny@gmail.com",
    },
    {
      id: 1,
      Name: "Alok",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "alok@gmail.com",
    },
    {
      id: 1,
      Name: "Pritam",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "pritam@gmail.com",
    },
    {
      id: 1,
      Name: "Divya",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "divya@gmail.com",
    },
    {
      id: 1,
      Name: "Supriya",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "supriya@gmail.com",
    },
    {
      id: 1,
      Name: "Amit",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "amit@gmail.com",
    },
    {
      id: 1,
      Name: "Golu",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "golu@gmail.com",
    },
    {
      id: 1,
      Name: "Anjali",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "anjali@gmail.com",
    },
    {
      id: 1,
      Name: "Amar",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "amar@gmail.com",
    },
    {
      id: 1,
      Name: "Sumit",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "sumit@gmail.com",
    },
    {
      id: 1,
      Name: "Pinku",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "pinku@gmail.com",
    },
    {
      id: 1,
      Name: "Smita",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "smita@gmail.com",
    },
    {
      id: 1,
      Name: "Ritu",
      Class: "BSC.IT",
      Roll: 53,
      Address: "Noida",
      Contact: 6209760945,
      Gmail: "Ritu@gmail.com",
    },
  ]);
  const [showForm, setShowForm] = useState("");

  function submitData(){
    const data = {
      id:1,
      Name:studentName,
      Class:classNameData,
      Roll:rollNumber,
      Address:address,
      Contact:contact,
      Gmail:gmail
    }
    console.log(...student,data)
    setStudent([...student,data])
   
  }
  return (
    <>
      {showFormDesign&&<div style={styles.container}>
        <h2 style={styles.header}>User Information</h2>
        {/* <form onSubmit={handleSubmit}> */}
          <div style={styles.inputGroup}>
            <label htmlFor="name" style={styles.label}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              style={styles.input}
              onChange={(e)=>{setStudentName(e.target.value)}}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="className" style={styles.label}>
              Class:
            </label>
            <input
              type="text"
              id="className"
              name="className"
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="rollno" style={styles.label}>
              Roll No:
            </label>
            <input
              type="text"
              id="rollno"
              name="name"
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="address" style={styles.label}>
              Address:
            </label>
            <textarea
              id="address"
              name="address"
              style={styles.textarea}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="contact" style={styles.label}>
              Contact:
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="gmail" style={styles.label}>
              Gmail:
            </label>
            <input
              type="email"
              id="gmail"
              name="gmail"
              style={styles.input}
            />
          </div>

          <div style={styles.buttonContainer}>
            <button type="submit" onClick={()=>{submitData()}} style={styles.button}>
              Submit
            </button>
          </div>
        {/* </form> */}
      </div>}
      <div className="font-bold justify-center text-center">
        <button
          style={{ backgroundColor: "aqua" }}
          onClick={() => setShowForm("NAME")}
          type="button"
          className="btn btn-outline-primary mx-3"
        >
          Name
        </button>
        <button
          style={{ backgroundColor: "aqua" }}
          onClick={() => setarea("Canadian")}
          type="button"
          className="btn btn-outline-primary mx-3"
        >
          Class
        </button>
        <button
          style={{ backgroundColor: "aqua" }}
          onClick={() => setarea("American")}
          type="button"
          className="btn btn-outline-primary mx-3"
        >
          Roll
        </button>
        <button
          style={{ backgroundColor: "aqua" }}
          onClick={() => setarea("Thai")}
          type="button"
          className="btn btn-outline-primary mx-3"
        >
          Gmail
        </button>
        <button
          style={{ backgroundColor: "aqua" }}
          onClick={() => setarea("British")}
          type="button"
          className="btn btn-outline-primary mx-3"
        >
          Contact
        </button>
        <button
          style={{ backgroundColor: "aqua" }}
          onClick={() => setarea("Russian")}
          type="button"
          className="btn btn-outline-primary mx-3"
        >
          Address
        </button>
        {showForm && <h2 onClick={()=>{setshowFormDesign(true)}}>Add Student</h2>}
      </div>
      <div></div>

      <div className="flex flex-wrap gap-6 justify-center bg-black">
        {student?.map((data, index) => (
          <div
            key={index}
            className="bg-cover bg-center bg-no-repeat  text-black p-6 mt-4 rounded-lg shadow-lg border-2 border-aqua-500 w-64"
            style={{
              backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/008/804/954/small/abstract-background-illustration-yellow-abstract-background-with-simple-shape-vector.jpg') `,
            }}
          >
            <div className="font-bold text-lg">Name: {data?.Name}</div>
            <h2>Class: {data?.Class}</h2>
            <h5>Roll: {data?.Roll}</h5>
            <h4>Gmail: {data?.Gmail}</h4>
            <h3>Contact: {data?.Contact}</h3>
            <h2>Address: {data?.Address}</h2>
          </div>
        ))}
      </div>
    </>
  );
};
const styles = {
  container: {
    width: "300px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  header: {
    textAlign: "center",
    color: "#333",
  },
  inputGroup: {
    marginBottom: "10px",
  },
  label: {
    display: "block",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    height: "80px",
  },
  buttonContainer: {
    textAlign: "center",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "4px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
  },
};

export default Form;
