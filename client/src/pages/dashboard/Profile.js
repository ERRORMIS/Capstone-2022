import { useState } from 'react'
import { FormRow, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import Select from 'react-select';

const genderList = [
  { label: "Male", value: 'Male' },
  { label: "Female", value: 'Female' }
];


const Profile =  () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const { user, showAlert, displayAlert, updateUser, isLoading } = useAppContext()

  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [lastName, setLastName] = useState(user?.lastName)
  const [gender, setGender] = useState(user?.gender)
  const [nic, setNic] = useState(user?.nic)
  const [id] = useState(user?.id)
  const [type] = useState(user?.type)

  const [department, setDepartment] = useState(user?.department)
  const [jobRole, setJobRole] = useState(user?.jobRole)
  const [contactNo, setContactNo] = useState(user?.contactNo)
  const [address, setAddress] = useState(user?.address)

  const [company, setCompany] = useState(user?.company)
  const [jobTitle, setJobTitle] = useState(user?.jobTitle)
  const [graduatedYear, setGraduatedYear] = useState(user?.graduatedYear)
  const [location, setLocation] = useState(user?.location)
  

  const handleSubmit = (e) => {


    e.preventDefault()
    if (!name || !email || !lastName || !nic) {
      displayAlert()
      return
    }

    if(type === "Student"){
      updateUser({ name, email, lastName, nic, type, id, gender })
    }else if(type === "Staff"){
      updateUser({ name, email, lastName, nic, type, id, contactNo, address, department, jobRole })
    }else if(type === "Alumni"){
      updateUser({ name, email, lastName, nic, type, id, contactNo, address, company, jobTitle, graduatedYear })
    }else if(type === "Partner"){
      updateUser({ name, email, lastName, nic, type, id, location })
    }

    

  }



  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>profile</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            type='email'
            name='email'
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormRow
            type='text'
            labelText='last name'
            name='lastName'
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <FormRow
            type='text'
            labelText='NIC'
            name='nic'
            value={nic}
            handleChange={(e) => setNic(e.target.value)}
          />

        {/* <div>
            <div className='form-row'>
            <div> <label htmlFor={'Select'} className='form-label'>
                Gender
            </label></div>
            <div>
                <Select options={genderList} placeholder="Select"/>
            </div>
            <div className="col-md-4"></div>
            </div>
        </div> */}

        {user.type === 'Staff' && (
          <FormRow
              type='text'
              labelText='Contact No'
              name='contact'
              value={contactNo}
              handleChange={(e) => setContactNo(e.target.value)}
            />
        )}

        {user.type === 'Staff' && (
          <FormRow
              type='text'
              labelText='Address'
              name='address'
              value={address}
              handleChange={(e) => setAddress(e.target.value)}
            />
        )}

      {user.type === 'Staff' && (
          <FormRow
              type='text'
              labelText='Department'
              name='department'
              value={department}
              handleChange={(e) => setDepartment(e.target.value)}
            />
        )}

      {user.type === 'Staff' && (
          <FormRow
              type='text'
              labelText='Job Role'
              name='jobrole'
              value={jobRole}
              handleChange={(e) => setJobRole(e.target.value)}
            />
        )}

        {user.type === 'Alumni' && (
          <FormRow
              type='text'
              labelText='Contact No'
              name='contact'
              value={contactNo}
              handleChange={(e) => setContactNo(e.target.value)}
            />
        )}

        {user.type === 'Alumni' && (
          <FormRow
              type='text'
              labelText='Address'
              name='address'
              value={address}
              handleChange={(e) => setAddress(e.target.value)}
            />
        )}

          {user.type === 'Alumni' && (
                  <FormRow
                      type='text'
                      labelText='Company'
                      name='company'
                      value={company}
                      handleChange={(e) => setCompany(e.target.value)}
                    />

          )}

        {user.type === 'Alumni' && (
              <FormRow
                  type='text'
                  labelText='Job Title'
                  name='jobTitle'
                  value={jobTitle}
                  handleChange={(e) => setJobTitle(e.target.value)}
                />
        )}

        {user.type === 'Alumni' && (
            <FormRow
                type='text'
                labelText='Graduated Year'
                name='year'
                value={graduatedYear}
                handleChange={(e) => setGraduatedYear(e.target.value)}
              />
        )}

        {user.type === 'Partner' && (
            <FormRow
                type='text'
                labelText='Location'
                name='location'
                value={location}
                handleChange={(e) => setLocation(e.target.value)}
              />
        )}

          <button className='btn btn-block' type='submit' disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>

        </div>
      </form>
      <br></br>
      <div>
      <br /><br />
      <div>
        <h3>Upload Profile Picture</h3>
          {selectedImage && (
            <div>
              <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
            <br />
            <button className='btn btn-danger' onClick={()=>setSelectedImage(null)}>Remove</button>
            <button className='btn btn-success' onClick={()=>setSelectedImage(null)}>Upload</button>
            </div>
          )}
          <br />
        
          <br /> 
          <input
            className='btn btn-info'
            type="file"
            name="myImage"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
          />
      </div>

      </div>
    </Wrapper>
  )
}

export default Profile
