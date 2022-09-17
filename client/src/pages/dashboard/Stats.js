import { useEffect } from 'react'
import { useAppContext } from '../../context/appContext'
import { StatsContainer, Loading, ChartsContainer } from '../../components'


//Statistics of Projects
const Stats = () => {
  const { showStats, isLoading, monthlyApplications, getJobs } = useAppContext()

  useEffect(() => {
    showStats()
    getJobs()
    // eslint-disable-next-line
  }, [])
  if (isLoading) {
    return <Loading center />
  }
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  )
}

export default Stats
