import JobHome from "./jobHome/JobHome"
import JobCard from "./JobCard/JobCard"

// import JobSearchBanner from "./JobSearchBanner/JobSearchBanner"

const JobCategories=()=>{
    
    return (
        <>
        <JobHome
        heading="Job Categories" breadcrumb="Job Categories" title="Jobstack"
        />
        <JobCard/>
        {/* <JobSearchBanner/> */}
       
        </>
    )

}
export default JobCategories