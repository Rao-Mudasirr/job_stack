import axios from "axios";
import React, { useState, useEffect } from "react";

export const MainTest = () => {
  const [jobTest, setJobTest] = useState();
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(
          `https://jobs.orcaloholding.co.uk/my-jobs/Wer4p96MvKDAb0k3nqbYaEZ1lQ/test`
        );

        setJobTest([response?.data?.data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchJobDetails();
  }, []);
  console.log(jobTest, "jobTests");
  return (
    <div dir="ltr">
      <section className="bg-slate-50 dark:bg-slate-800 md:py-24 py-16">
        <div className="container mt-10 mx-auto">Assessment</div>
      </section>
    </div>
  );
};
