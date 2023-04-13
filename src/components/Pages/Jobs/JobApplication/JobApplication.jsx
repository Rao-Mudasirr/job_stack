import React from "react";
import JobForm from "./components/JobForm/JobForm";

const JobApplication = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-emerald-600  text-2xl font-bold">
        People Operations Coordinator
      </h1>
      <p className="text-gray-600 mt-1">
  at Care Library{' '}
  <a href="#" className="text-blue-400 hover:underline">
    (View all jobs)
  </a>
</p>

      <p className="mt-2">London</p>
      <p className="my-4">
        Uniting The Miracles Of Hope Through Our Devotion In Healthcare
        Ecosystem
      </p>
      <p>
        Care lIbrary is looking for an organized, detail-oriented individual
        with a strong passion for learning to join the PeopleOps team as a&nbsp;
        <span className="font-bold">People Operations Coordinator.</span> In
        this position, the ideal candidate will partner with the PeopleOps team
        to facilitate programs across business locations, support the
        administration of employee health and welfare plans, and oversee
        employee engagement programs while building strong, trusting
        relationships.
      </p>
      <p className="my-4">
        {" "}
        Care Library is a staffing firm that specializes in putting together a
        high quality, well trained and compassionate healthcare workforce.
      </p>

      <JobForm/>
      
    </div>
  );
};

export default JobApplication;
