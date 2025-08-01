import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { assets, dummyDashboardData } from '../../assets/assets';
import Loading from '../../components/student/Loading'
import axios from 'axios';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const { currency, backendUrl, getToken, isEducator } = useContext(AppContext);
  const [dashboardData, setDashboardData] = useState(null);

  const fetchDashboardData = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get(backendUrl + '/api/educator/dashboard', { headers: { Authorization: `Bearer ${token}` } });

      if (data.success) {
        setDashboardData(data.dashboardData);
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    if (isEducator) {
      fetchDashboardData();
    }

  }, [isEducator])

  return dashboardData ? (
    <div className='min-h-screen flec flex-col items-start justify-between gap-8 md:pb-0 p-4 pt-8 pb-0'>
      <div className='space-y-5'>
        <div className='flex flex-wrap gap-5 items-center'>
          <div className='flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md'>
            <img src={assets.patients_icon} alt="patients_icon" />
            <div>
              <p className='text-2xl font-medium text-gary-600'>{dashboardData.enrolledStudentsData.length} </p>
              <p className='text-base text-gary-500'>Total enrollmemts</p>
            </div>
          </div>

          <div className='flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md'>
            <img src={assets.appointments_icon} alt="appointments_icon" />
            <div>
              <p className='text-2xl font-medium text-gary-600'>{dashboardData.totalCourses} </p>
              <p className='text-base text-gary-500'>Total Courses</p>
            </div>
          </div>

          <div className='flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md'>
            <img src={assets.earning_icon} alt="patients_icon" />
            <div>
              <p className='text-2xl font-medium text-gary-600'>{currency} {dashboardData.totalEarnings} </p>
              <p className='text-base text-gary-500'>Total Earnings</p>
            </div>
          </div>
        </div>

        <h2 className='pb-4 txt-lg font-medium'>Latest Enrollments</h2>
        <div className='flex flex-col items-ceneter max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20'>

          <table className='md:table-auto table-fixed w-full overflow-idden border mt-10'>
            <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden'>
              <tr>
                <th className='px-4 py-3 font-semibold truncate'>#</th>
                <th className='px-4 py-3 font-semibold truncate'>Student Name</th>
                <th className='px-4 py-3 font-semibold truncate'>Course Title</th>
              </tr>
            </thead>
            <tbody className='text-gray-500'>
              {dashboardData.enrolledStudentsData.map((item, index) => (
                <tr key={index} className='border-b border-gray-500/20'>
                  <td className='px-4 py-3 text-center hidden sm:table-cell'>{index + 1} </td>
                  <td className='md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3'>
                    <img src={item.student.imageUrl} alt="Profile" className='w-9 h-9 rounded-full' />
                    <span className='truncate'>{item.student.name} </span>
                  </td>
                  <td className='px-4 py-3 truncate'>
                    {item.courseTitle}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  ) : <Loading />
}

export default Dashboard